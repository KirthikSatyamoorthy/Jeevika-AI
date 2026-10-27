# JEEVIKA AI — PROJECT STATUS

**Problem Statement:** PS 097: AI-Driven Voice Assistant for Livelihood Mapping and NSQF-Aligned Skilling Recommendations for SC Communities under the GIA component of PM-AJAY.

---

## 1. COMPLETED FEATURES

- [x] **Project Initialization**: Clean React + TypeScript + Vite architecture with zero unnecessary dependencies.
- [x] **Accessible Design System**:
  - High-contrast mode toggle.
  - Large-font accessibility toggle (A+).
  - Touch targets meeting >48px standard.
  - Social-impact color palette (Forest Emerald `#15803d`, Warm Amber `#d97706`, Trust Blue, Slate).
  - Responsive layout across desktop and mobile devices.
- [x] **Voice Assistant (Web Speech API + Text Fallback)**:
  - Speech-to-text recognition via native browser API (`SpeechRecognition` / `webkitSpeechRecognition`).
  - Text-to-speech audio feedback (`SpeechSynthesis`).
  - Multilingual support for English, Hindi (हिंदी), and Tamil (தமிழ்).
  - Clear permission handling and graceful fallbacks for unsupported browsers or denied permissions.
  - Contextual rule-based intent engine for livelihood guidance (zero paid APIs or external keys).
  - Interactive quick suggestion chips and direct action link routing.
- [x] **4-Factor Livelihood Recommendation Engine**:
  - Interest match: 35% weight.
  - Existing skill match: 30% weight.
  - Preferred livelihood type match: 20% weight.
  - Education level & work experience suitability: 15% weight.
  - Normalized 0–100% suitability indicators.
  - Dynamic generation of "Why this matches you", relevant skills, and immediate next steps.
- [x] **12 NSQF-Aligned Sample Livelihood Pathways**:
  1. Tailoring and garment production.
  2. Electrical installation and maintenance.
  3. Solar panel installation and maintenance.
  4. Food preparation and catering.
  5. Retail and customer service.
  6. Digital services and computer operations.
  7. Mobile phone repair and servicing.
  8. Beauty and wellness services.
  9. Agriculture-related enterprises.
  10. Small-scale manufacturing.
  11. Plumbing and maintenance.
  12. Entrepreneurship and microenterprise management.
  - Complete with 3-stage learning curricula, key competencies, prerequisites, and illustrative disclaimers.
- [x] **Guided Livelihood Assessment**:
  - 4-step progressive intake with visual progress bar.
  - Selectable visual cards and custom chip additions.
  - Support for optional skipping and required field validation.
  - One-click testing profile preloads for Ramesh, Priya, Vikram, and Anita.
- [x] **Skill-Gap Analysis**:
  - Clear visual demarcation between current informal strengths and target skills.
  - Distinction between self-reported skills and formally assessed certifications.
- [x] **Training & Opportunity Explorer**:
  - Demonstration records for PM-AJAY GIA capital subsidies, Suryamitra solar, NAPS electrician apprenticeships, CSC hubs, etc.
  - Searchable by keywords, filterable by category and state.
  - LocalStorage bookmarking capability.
- [x] **User Dashboard**:
  - Personal skills profile snapshot.
  - Primary target pathway tracker.
  - 3-stage learning roadmap.
  - Bookmarked opportunities management.
  - Reset local demo data utility.
- [x] **Facilitator & Policy Dashboard**:
  - Aggregated synthetic analytics (candidate counts, sector distribution, top 5 skill gaps, district activity).
  - Explicit privacy and synthetic data notices.

---

## 2. CURRENT WORKING STATE

- Full application is implemented and fully integrated.
- 100% local execution without paid cloud keys, external AI APIs, or databases.
- Verified TypeScript compilation and production build.

---

## 3. KNOWN LIMITATIONS & DISCLAIMERS

- **Web Speech API**: Browser speech recognition requires microphone permissions and works best in Chromium-based browsers (Chrome, Edge); text-input fallback is always active and functional.
- **Demonstration Records**: All NSQF qualification codes, provider details, and GIA grants are synthetic demo models clearly marked with illustrative disclaimers as required.

---

## 4. HOW TO RUN THE APPLICATION

Ensure Node.js is installed, then run in the project directory:

```bash
# In c:\Users\kirth\OneDrive\Desktop\Jeevika AI
npm.cmd run dev
```

The application will start immediately at `http://localhost:3000`.

To create a production build:

```bash
npm.cmd run build
```

---

## 5. NEXT ACTION IF WORK IS INTERRUPTED

The project is fully complete and build-verified. Launch `npm.cmd run dev` for live demonstration to hackathon evaluators.
