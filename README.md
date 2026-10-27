# JEEVIKA AI (जीविका AI)

> **Discover Your Skills. Find Your Path. Build Your Livelihood.**

**PS 097:** AI-Driven Voice Assistant for Livelihood Mapping and NSQF-Aligned Skilling Recommendations for SC Communities under the GIA component of PM-AJAY.

---

## 🌟 Overview

Jeevika AI is an accessible, voice-first application designed to help individuals and self-help group (SHG) members from Scheduled Caste (SC) communities explore vocational pathways, assess their informal skills, identify competency gaps, and connect with PM-AJAY Grants-in-Aid (GIA) microenterprise opportunities.

Built from scratch as a zero-cloud-cost, privacy-first prototype for the Student Innovation Hackathon.

---

## 🚀 Key Features

1. **Voice Assistant (Web Speech API + Text Fallback)**
   - Voice input via browser speech recognition (`en-IN`, `hi-IN`, `ta-IN`).
   - Spoken audio feedback using browser speech synthesis.
   - Text fallback for non-supported browsers or silent environments.
   - 100% local rule-based intent engine (zero paid API keys required).

2. **4-Factor Livelihood Recommendation Engine**
   - **Interests (35%)**: Evaluates organic interest alignment.
   - **Existing Skills (30%)**: Recognizes informal and household practical competencies.
   - **Livelihood Mode (20%)**: Self-employment vs Wage employment vs Microenterprise vs Apprenticeship.
   - **Education & Experience (15%)**: Ensures realistic entry prerequisites.

3. **12 NSQF-Aligned Sample Livelihood Pathways**
   - Tailoring and Garment Production
   - Electrical Installation and Maintenance
   - Solar Panel Installation and Maintenance (Suryamitra)
   - Food Preparation and Catering
   - Retail and Customer Service
   - Digital Services and Computer Operations (CSC)
   - Mobile Phone Repair and Servicing
   - Beauty and Wellness Services
   - Agriculture-Related Enterprises (Vermicompost & Nursery)
   - Small-Scale Manufacturing
   - Plumbing and Maintenance
   - Entrepreneurship and Microenterprise Management
   *(Each includes 3-stage learning curricula, competencies, and illustrative notices)*.

4. **Guided 4-Step Assessment Form**
   - Interactive cards, touch targets, and skip/validation options.
   - Quick one-click demo profile loaders (Ramesh, Priya, Vikram, Anita).

5. **Skill-Gap Analysis**
   - Clear visual progression between current informal skills and target competencies.
   - Distinction between self-reported skills and formally assessed certifications.

6. **Training & Opportunity Explorer**
   - Searchable directory of demonstration PM-AJAY GIA grants, apprenticeships, and vocational programs.
   - LocalStorage bookmarking.

7. **User & Facilitator Dashboards**
   - Candidate dashboard with target pathway, roadmap, and saved opportunities.
   - Facilitator portal with aggregated synthetic analytics by district and common skill gaps.

8. **Accessibility & Usability**
   - High-contrast toggle for low-vision users.
   - Font size increment toggle (A+).
   - Touch targets meeting >48px standard.

---

## 💻 Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Icons**: Lucide React
- **Voice**: Browser Web Speech API (`SpeechRecognition` & `SpeechSynthesis`)
- **Styling**: Standard CSS Design System with CSS Custom Properties
- **State & Storage**: React State + Browser LocalStorage

---

## 🛠️ Quick Start Instructions

### Prerequisites
- Node.js (v18+)

### Running the Application

1. Open a terminal in the project directory:
   ```bash
   cd "c:\Users\kirth\OneDrive\Desktop\Jeevika AI"
   ```

2. Start the development server:
   ```bash
   npm.cmd run dev
   ```

3. Open your browser at:
   ```
   http://localhost:3000
   ```

### Production Build Verification

```bash
npm.cmd run build
```

---

## ⚠️ Disclaimers & Limitations
- All NSQF levels, job roles, provider names, and PM-AJAY GIA grants displayed are illustrative demonstration models created for hackathon prototype evaluation.
- Official training programs and qualifications must be verified directly via [Skill India](https://skillindia.gov.in) and [NCVET](https://ncvet.gov.in).
