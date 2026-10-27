import { UserAssessment } from '../types/assessment';

export interface FictionalDemoProfile {
  name: string;
  shortBio: string;
  expectedTopMatch: string;
  assessment: UserAssessment;
}

export const DEMO_PROFILES: FictionalDemoProfile[] = [
  {
    name: "Ramesh Kumar",
    shortBio: "22-year-old rural youth with 10th pass, loves technical outdoor work, interested in solar power and wiring.",
    expectedTopMatch: "Solar Panel Installation or Electrical Installation",
    assessment: {
      fullName: "Ramesh Kumar",
      state: "Uttar Pradesh",
      district: "Varanasi",
      educationLevel: "10th Pass (Matriculation)",
      existingSkills: ["Basic wiring", "Tool Handling", "Troubleshooting", "Safety Compliance"],
      workExperienceYears: 1,
      workExperienceDescription: "Helped local electrician with residential wiring and repairing small ceiling fans.",
      interests: ["Solar energy", "Electrical machines", "Working outdoors", "Green technology"],
      preferredLivelihoodType: "Employment",
      preferredTrainingMode: "In-person",
      preferredLanguage: "Hindi"
    }
  },
  {
    name: "Priya Devi",
    shortBio: "28-year-old SHG member with 8th pass, skilled in hand embroidery, wants to establish a self-employed boutique.",
    expectedTopMatch: "Tailoring and Garment Production",
    assessment: {
      fullName: "Priya Devi",
      state: "Tamil Nadu",
      district: "Kanchipuram",
      educationLevel: "8th Pass",
      existingSkills: ["Sewing & Stitching", "Hand-Eye Coordination", "Fabric Knowledge", "Garment Alteration"],
      workExperienceYears: 3,
      workExperienceDescription: "Does home stitching for neighbors and alteration work for local textile shops.",
      interests: ["Garment design", "Boutique business", "Fabric cutting", "Self-employment"],
      preferredLivelihoodType: "Self-employment",
      preferredTrainingMode: "In-person",
      preferredLanguage: "Tamil"
    }
  },
  {
    name: "Vikram Chandra",
    shortBio: "24-year-old 12th pass youth, enthusiastic about gadgets, computers, and smartphone hardware servicing.",
    expectedTopMatch: "Mobile Phone Repair or Digital Services",
    assessment: {
      fullName: "Vikram Chandra",
      state: "Maharashtra",
      district: "Nagpur",
      educationLevel: "12th Pass (Higher Secondary)",
      existingSkills: ["Computer Operations", "Hardware Disassembly", "Digital Literacy", "Attention to Detail"],
      workExperienceYears: 1,
      workExperienceDescription: "Operated a small photocopy and internet print kiosk in market.",
      interests: ["Smartphone repair", "Computer software", "Citizen digital services", "Electronics hardware"],
      preferredLivelihoodType: "Self-employment",
      preferredTrainingMode: "Either",
      preferredLanguage: "English"
    }
  },
  {
    name: "Anita Kumari",
    shortBio: "30-year-old home cook with 10th pass, passionate about starting a packaged snack or community catering enterprise.",
    expectedTopMatch: "Food Preparation and Catering or Microenterprise Management",
    assessment: {
      fullName: "Anita Kumari",
      state: "Bihar",
      district: "Patna",
      educationLevel: "10th Pass (Matriculation)",
      existingSkills: ["Cooking & Food Prep", "Kitchen Hygiene", "Portion & Batch Cooking", "Team Coordination"],
      workExperienceYears: 4,
      workExperienceDescription: "Prepared snacks and lunch boxes for school gatherings and local community events.",
      interests: ["Culinary arts", "Catering business", "Food packaging", "Microenterprise"],
      preferredLivelihoodType: "Entrepreneurship",
      preferredTrainingMode: "In-person",
      preferredLanguage: "Hindi"
    }
  }
];
