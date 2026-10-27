import { UserAssessment, FacilitatorStats } from '../types/assessment';
import { DEMO_PROFILES } from '../data/fictionalProfiles';

const ASSESSMENT_STORAGE_KEY = 'jeevika_user_assessment_v1';
const SAVED_OPPORTUNITIES_KEY = 'jeevika_saved_opps_v1';
const STATS_STORAGE_KEY = 'jeevika_facilitator_stats_v1';

export function getStoredAssessment(): UserAssessment | null {
  try {
    const data = localStorage.getItem(ASSESSMENT_STORAGE_KEY);
    if (data) {
      return JSON.parse(data);
    }
  } catch (e) {
    console.error("Failed to read from localStorage", e);
  }
  return null;
}

export function saveAssessmentToStorage(assessment: UserAssessment): void {
  try {
    localStorage.setItem(ASSESSMENT_STORAGE_KEY, JSON.stringify(assessment));
    incrementDemoStats(assessment);
  } catch (e) {
    console.error("Failed to save to localStorage", e);
  }
}

export function getSavedOpportunityIds(): string[] {
  try {
    const data = localStorage.getItem(SAVED_OPPORTUNITIES_KEY);
    if (data) {
      return JSON.parse(data);
    }
  } catch (e) {
    console.error("Failed to get saved opportunities", e);
  }
  return ["opp-1", "opp-2"]; // default sample saved for demo
}

export function toggleSaveOpportunity(id: string): string[] {
  const current = getSavedOpportunityIds();
  let updated: string[];
  if (current.includes(id)) {
    updated = current.filter(item => item !== id);
  } else {
    updated = [...current, id];
  }
  try {
    localStorage.setItem(SAVED_OPPORTUNITIES_KEY, JSON.stringify(updated));
  } catch (e) {
    console.error("Failed to toggle saved opportunity", e);
  }
  return updated;
}

export function clearAllLocalDemoData(): void {
  try {
    localStorage.removeItem(ASSESSMENT_STORAGE_KEY);
    localStorage.removeItem(SAVED_OPPORTUNITIES_KEY);
    localStorage.removeItem(STATS_STORAGE_KEY);
  } catch (e) {
    console.error("Failed to clear demo data", e);
  }
}

export function getFacilitatorStats(): FacilitatorStats {
  try {
    const raw = localStorage.getItem(STATS_STORAGE_KEY);
    if (raw) {
      return JSON.parse(raw);
    }
  } catch (e) {
    console.error("Failed to load facilitator stats", e);
  }

  // Initial synthetic baseline aggregated data
  return {
    totalAssessments: 148,
    topSectors: [
      { sector: "Green Jobs & Renewable Energy", count: 42, percentage: 28 },
      { sector: "Apparel & Textiles", count: 36, percentage: 24 },
      { sector: "Electronics & Hardware", count: 28, percentage: 19 },
      { sector: "Food & Hospitality", count: 22, percentage: 15 },
      { sector: "Digital Services & IT", count: 20, percentage: 14 }
    ],
    livelihoodDistribution: [
      { type: "Self-employment", count: 68 },
      { type: "Employment", count: 44 },
      { type: "Entrepreneurship", count: 24 },
      { type: "Apprenticeship", count: 12 }
    ],
    commonSkillGaps: [
      { skill: "Solar Inverter Wiring", count: 38 },
      { skill: "Industrial Pattern Drafting", count: 32 },
      { skill: "SMD Micro-Soldering", count: 29 },
      { skill: "FSSAI Commercial Food Safety", count: 24 },
      { skill: "Digital Bookkeeping & UPI Kiosks", count: 19 }
    ],
    districtDistribution: [
      { district: "Varanasi", state: "Uttar Pradesh", count: 34 },
      { district: "Kanchipuram", state: "Tamil Nadu", count: 31 },
      { district: "Nagpur", state: "Maharashtra", count: 29 },
      { district: "Patna", state: "Bihar", count: 26 },
      { district: "Jaipur", state: "Rajasthan", count: 28 }
    ]
  };
}

function incrementDemoStats(assessment: UserAssessment): void {
  try {
    const current = getFacilitatorStats();
    current.totalAssessments += 1;
    // update district count
    const dMatch = current.districtDistribution.find(d => d.district.toLowerCase() === (assessment.district || '').toLowerCase());
    if (dMatch) {
      dMatch.count += 1;
    } else if (assessment.district) {
      current.districtDistribution.push({
        district: assessment.district,
        state: assessment.state || 'General',
        count: 1
      });
    }
    // update livelihood distribution
    const lMatch = current.livelihoodDistribution.find(l => l.type === assessment.preferredLivelihoodType);
    if (lMatch) {
      lMatch.count += 1;
    }
    localStorage.setItem(STATS_STORAGE_KEY, JSON.stringify(current));
  } catch (e) {
    console.error("Failed to update stats", e);
  }
}
