import { NSQFPathway, RecommendationResult, UserAssessment } from '../types/assessment';
import { SAMPLE_PATHWAYS } from '../data/pathways';

export interface ScoringWeights {
  interestWeight: number;    // default 0.35 (35%)
  skillWeight: number;       // default 0.30 (30%)
  livelihoodWeight: number;  // default 0.20 (20%)
  educationWeight: number;   // default 0.15 (15%)
}

export const DEFAULT_WEIGHTS: ScoringWeights = {
  interestWeight: 0.35,
  skillWeight: 0.30,
  livelihoodWeight: 0.20,
  educationWeight: 0.15
};

/**
 * Normalizes string for fuzzy/substring matching
 */
function normalizeText(text: string): string {
  return text.toLowerCase().replace(/[^a-z0-9]/g, ' ').trim();
}

/**
 * Calculates interest match score (0 - 35 points)
 */
function calculateInterestScore(pathway: NSQFPathway, userInterests: string[], maxPoints: number = 35): { score: number; matchedInterests: string[] } {
  if (!userInterests || userInterests.length === 0) {
    return { score: maxPoints * 0.4, matchedInterests: [] }; // Baseline engagement
  }

  const pathwaySearchable = [
    pathway.title,
    pathway.category,
    pathway.sector,
    pathway.description,
    ...pathway.tags,
    ...pathway.targetOccupations
  ].map(t => normalizeText(t)).join(' ');

  const matched: string[] = [];

  for (const interest of userInterests) {
    const normInterest = normalizeText(interest);
    if (!normInterest) continue;

    // Check direct word containment or tag match
    const words = normInterest.split(/\s+/).filter(w => w.length > 2);
    let hasMatch = false;

    if (pathwaySearchable.includes(normInterest)) {
      hasMatch = true;
    } else {
      for (const word of words) {
        if (pathwaySearchable.includes(word)) {
          hasMatch = true;
          break;
        }
      }
    }

    if (hasMatch) {
      matched.push(interest);
    }
  }

  const matchRatio = Math.min(1.0, matched.length / Math.max(1, Math.min(userInterests.length, 3)));
  const score = Math.round(matchRatio * maxPoints * 10) / 10;
  return { score, matchedInterests: matched };
}

/**
 * Calculates skill match score (0 - 30 points)
 */
function calculateSkillScore(pathway: NSQFPathway, existingSkills: string[], maxPoints: number = 30): { score: number; relevantSkills: string[]; missingSkills: string[] } {
  const allPathwaySkills = [...pathway.coreSkills, ...pathway.transferableSkills];
  const pathwaySkillNorms = allPathwaySkills.map(s => ({ original: s, norm: normalizeText(s) }));

  const relevant: string[] = [];

  for (const userSkill of existingSkills) {
    const normUserSkill = normalizeText(userSkill);
    if (!normUserSkill) continue;

    const matchedPathwaySkill = pathwaySkillNorms.find(ps => 
      ps.norm.includes(normUserSkill) || normUserSkill.includes(ps.norm) ||
      normUserSkill.split(/\s+/).some(w => w.length > 3 && ps.norm.includes(w))
    );

    if (matchedPathwaySkill && !relevant.includes(matchedPathwaySkill.original)) {
      relevant.push(matchedPathwaySkill.original);
    }
  }

  // Identify skills needing development
  const missingSkills = pathway.coreSkills.filter(cs => !relevant.includes(cs));

  // Minimum partial score if user possesses transferable skills
  const ratio = Math.min(1.0, relevant.length / Math.max(1, Math.min(pathway.coreSkills.length, 3)));
  const score = Math.round(ratio * maxPoints * 10) / 10;

  return { score, relevantSkills: relevant, missingSkills };
}

/**
 * Calculates preferred livelihood match score (0 - 20 points)
 */
function calculateLivelihoodScore(pathway: NSQFPathway, preferredType: string, maxPoints: number = 20): number {
  if (pathway.livelihoodTypes.includes(preferredType as any)) {
    return maxPoints;
  }
  // Partial credit if pathway supports adjacent entrepreneurial/apprenticeship modes
  return Math.round(maxPoints * 0.5 * 10) / 10;
}

/**
 * Calculates education & experience suitability score (0 - 15 points)
 */
function calculateEducationScore(pathway: NSQFPathway, education: string, experienceYears: number, maxPoints: number = 15): number {
  let eduPoints = 0;
  if (pathway.suitableEducation.includes(education as any)) {
    eduPoints = maxPoints * 0.7; // 10.5 points
  } else {
    eduPoints = maxPoints * 0.4; // 6 points baseline
  }

  // Work experience booster (up to 4.5 points)
  const expPoints = Math.min(4.5, (experienceYears || 0) * 1.5);
  return Math.min(maxPoints, Math.round((eduPoints + expPoints) * 10) / 10);
}

/**
 * Main Recommendation Engine function: evaluates all pathways against a user assessment
 */
export function generateRecommendations(
  assessment: UserAssessment,
  pathways: NSQFPathway[] = SAMPLE_PATHWAYS,
  weights: ScoringWeights = DEFAULT_WEIGHTS
): RecommendationResult[] {
  const results: RecommendationResult[] = pathways.map(pathway => {
    const { score: interestScore, matchedInterests } = calculateInterestScore(pathway, assessment.interests, weights.interestWeight * 100);
    const { score: skillScore, relevantSkills, missingSkills } = calculateSkillScore(pathway, assessment.existingSkills, weights.skillWeight * 100);
    const livelihoodScore = calculateLivelihoodScore(pathway, assessment.preferredLivelihoodType, weights.livelihoodWeight * 100);
    const educationScore = calculateEducationScore(pathway, assessment.educationLevel, assessment.workExperienceYears, weights.educationWeight * 100);

    const totalScore = Math.min(100, Math.round((interestScore + skillScore + livelihoodScore + educationScore) * 10) / 10);

    // Why matched rationales
    const whyMatched: string[] = [];
    if (matchedInterests.length > 0) {
      whyMatched.push(`Strong alignment with your interests in: ${matchedInterests.join(', ')}.`);
    } else {
      whyMatched.push(`Offers entry-level potential in the high-demand ${pathway.sector} sector.`);
    }

    if (relevantSkills.length > 0) {
      whyMatched.push(`Your existing strengths in ${relevantSkills.join(' and ')} give you an early head start.`);
    } else {
      whyMatched.push(`Designed with foundational training modules suitable for beginners.`);
    }

    if (pathway.livelihoodTypes.includes(assessment.preferredLivelihoodType)) {
      whyMatched.push(`Directly supports your preference for ${assessment.preferredLivelihoodType.toLowerCase()} opportunities.`);
    }

    if (assessment.workExperienceYears > 0) {
      whyMatched.push(`Your ${assessment.workExperienceYears} year(s) of practical background will accelerate your progression.`);
    }

    // Suggested next steps
    const suggestedNextSteps: string[] = [
      `Review Stage 1 core competencies in ${pathway.title}.`,
      `Explore accredited training providers or PM-AJAY GIA microenterprise assistance in your district (${assessment.district || 'nearby centres'}).`,
      `Initiate hands-on practice in ${missingSkills.slice(0, 2).join(' and ') || 'key modules'}.`
    ];

    return {
      pathway,
      scoreBreakdown: {
        interestScore,
        skillScore,
        livelihoodScore,
        educationScore,
        totalScore
      },
      matchPercentage: Math.max(35, Math.min(98, Math.round(totalScore))),
      whyMatched,
      relevantExistingSkills: relevantSkills.length > 0 ? relevantSkills : ['Foundational willingness to learn'],
      skillsToDevelop: missingSkills.length > 0 ? missingSkills : pathway.coreSkills.slice(0, 3),
      suggestedNextSteps,
      suitableRoutes: pathway.livelihoodTypes
    };
  });

  // Sort descending by total score
  results.sort((a, b) => b.scoreBreakdown.totalScore - a.scoreBreakdown.totalScore);

  return results;
}
