export type LivelihoodType = 'Employment' | 'Self-employment' | 'Entrepreneurship' | 'Apprenticeship';

export type TrainingMode = 'In-person' | 'Online' | 'Either';

export type EducationLevel = 
  | 'Below 8th Standard'
  | '8th Pass'
  | '10th Pass (Matriculation)'
  | '12th Pass (Higher Secondary)'
  | 'ITI / Vocational Diploma'
  | 'Graduate / Above';

export interface UserAssessment {
  id?: string;
  fullName?: string;
  state: string;
  district: string;
  educationLevel: EducationLevel;
  existingSkills: string[];
  workExperienceYears: number;
  workExperienceDescription?: string;
  interests: string[];
  preferredLivelihoodType: LivelihoodType;
  preferredTrainingMode: TrainingMode;
  preferredLanguage: 'English' | 'Hindi' | 'Tamil';
  createdAt?: string;
}

export interface LearningStage {
  stage: number;
  title: string;
  duration: string;
  description: string;
  skillsAcquired: string[];
}

export interface NSQFPathway {
  id: string;
  title: string;
  category: string;
  sector: string;
  description: string;
  illustrativeNSQFLevel: number;
  illustrativeJobRole: string;
  targetOccupations: string[];
  prerequisites: string;
  keyCompetencies: string[];
  coreSkills: string[];
  transferableSkills: string[];
  learningStages: LearningStage[];
  potentialAssessmentRoute: string;
  trainingProviderGuidance: string;
  livelihoodTypes: LivelihoodType[];
  suitableEducation: EducationLevel[];
  tags: string[];
}

export interface RecommendationScoreBreakdown {
  interestScore: number;       // max 35
  skillScore: number;          // max 30
  livelihoodScore: number;     // max 20
  educationScore: number;      // max 15
  totalScore: number;          // normalized out of 100
}

export interface RecommendationResult {
  pathway: NSQFPathway;
  scoreBreakdown: RecommendationScoreBreakdown;
  matchPercentage: number;
  whyMatched: string[];
  relevantExistingSkills: string[];
  skillsToDevelop: string[];
  suggestedNextSteps: string[];
  suitableRoutes: ('Employment' | 'Self-employment' | 'Entrepreneurship' | 'Apprenticeship')[];
}

export interface OpportunityItem {
  id: string;
  title: string;
  providerName: string;
  category: 'Vocational Training' | 'Skill Program' | 'Apprenticeship' | 'Employment' | 'Entrepreneurship Support' | 'Government Scheme';
  location: string;
  state: string;
  district: string;
  mode: 'In-person' | 'Online' | 'Hybrid';
  stipendOrSubsidy: string;
  eligibility: string;
  duration: string;
  relatedPathwayId: string;
  description: string;
  nextSteps: string;
  isSyntheticDemo: boolean;
}

export interface FacilitatorStats {
  totalAssessments: number;
  topSectors: { sector: string; count: number; percentage: number }[];
  livelihoodDistribution: { type: LivelihoodType; count: number }[];
  commonSkillGaps: { skill: string; count: number }[];
  districtDistribution: { district: string; state: string; count: number }[];
}
