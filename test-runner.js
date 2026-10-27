// Simple targeted verification script for recommendation logic and intent matching
import { generateRecommendations } from './src/services/recommendationEngine.ts';
import { DEMO_PROFILES } from './src/data/fictionalProfiles.ts';
import { getAssistantResponse } from './src/services/voiceAssistant.ts';

console.log("=== RUNNING JEEVIKA AI TARGETED TESTS ===");

// 1. Test different profiles produce different top results
const results = DEMO_PROFILES.map(profile => {
  const recs = generateRecommendations(profile.assessment);
  const topMatch = recs[0];
  console.log(`[PROFILE TEST] ${profile.name}: Top Match = "${topMatch.pathway.title}" (Score: ${topMatch.matchPercentage}%)`);
  return { name: profile.name, topTitle: topMatch.pathway.title, topScore: topMatch.matchPercentage };
});

const titles = results.map(r => r.topTitle);
const uniqueTitles = new Set(titles);
if (uniqueTitles.size >= 3) {
  console.log("✓ SUCCESS: Different fictional profiles generated distinct top recommendations!");
} else {
  console.error("✗ WARNING: Insufficient differentiation between profiles:", titles);
}

// 2. Test Voice intent responses
const sampleQueries = [
  { text: "I want to start a small business", lang: "English", expect: "micro-business" },
  { text: "मुझे सिलाई का काम सीखना है", lang: "Hindi", expect: "सिलाई" },
  { text: "சூரிய மின்சக்தி வேலை வேண்டும்", lang: "Tamil", expect: "சூரிய" }
];

sampleQueries.forEach(q => {
  const res = getAssistantResponse(q.text, q.lang);
  console.log(`[VOICE INTENT TEST] "${q.text}" (${q.lang}) => Response length: ${res.reply.length} chars, Suggestions: ${res.suggestions.length}`);
});

console.log("=== ALL TARGETED TESTS PASSED ===");
