export type AssistantLanguage = 'English' | 'Hindi' | 'Tamil';

export interface AssistantMessage {
  id: string;
  sender: 'user' | 'assistant' | 'system';
  text: string;
  timestamp: string;
  suggestions?: string[];
  actionLink?: {
    label: string;
    targetTab: string;
    prefillData?: any;
  };
}

export interface VoiceState {
  isListening: boolean;
  isSpeaking: boolean;
  supported: boolean;
  speechSynthesisSupported: boolean;
  permissionError: string | null;
  currentLanguage: AssistantLanguage;
}

// BCP-47 language codes
export const LANG_CODES: Record<AssistantLanguage, string> = {
  English: 'en-IN',
  Hindi: 'hi-IN',
  Tamil: 'ta-IN'
};

interface IntentRule {
  keywords: string[];
  reply: Record<AssistantLanguage, string>;
  suggestions: Record<AssistantLanguage, string[]>;
  actionLink?: {
    label: string;
    targetTab: string;
    prefillData?: any;
  };
}

const INTENT_RULES: IntentRule[] = [
  {
    keywords: ['business', 'start', 'dukan', 'vyapar', 'thozhil', 'dukaan', 'shop', 'self employed', 'entrepreneur'],
    reply: {
      English: "Starting a micro-business or self-employment venture is a great livelihood choice! Under the PM-AJAY GIA component, eligible entrepreneurs can access toolkits and capital support. What type of work or trade interests you most (e.g., tailoring, food/catering, mobile repair, retail)?",
      Hindi: "अपना छोटा व्यवसाय या स्वरोजगार शुरू करना एक बेहतरीन अवसर है! पीएम-अजय (PM-AJAY GIA) के तहत टूलकिट और पूंजी सहायता उपलब्ध होती है। आपको किस काम में रुचि है (जैसे सिलाई, खान-पान, मोबाइल रिपेयर, या दुकान)?",
      Tamil: "சொந்த தொழில் அல்லது சுயதொழில் தொடங்குவது ஒரு சிறந்த வழி! PM-AJAY திட்டத்தின் கீழ் உபகரணங்கள் மற்றும் மூலதன உதவி பெற முடியும். உங்களுக்கு தையல், உணவு தயாரிப்பு, மொபைல் ரிப்பேர் போன்ற எந்த துறையில் ஆர்வம் உள்ளது?"
    },
    suggestions: {
      English: ["Tailoring & Garments", "Food preparation & catering", "Mobile phone repair", "Start Assessment"],
      Hindi: ["सिलाई और गारमेंट्स", "खान-पान और कैटरिंग", "मोबाइल फोन रिपेयर", "मूल्यांकन शुरू करें"],
      Tamil: ["தையல் தொழில்", "உணவு & கேட்டரிங்", "மொபைல் பழுதுபார்த்தல்", "மதிப்பீட்டைத் தொடங்கவும்"]
    },
    actionLink: {
      label: "Start Livelihood Assessment",
      targetTab: "assessment",
      prefillData: { preferredLivelihoodType: "Entrepreneurship" }
    }
  },
  {
    keywords: ['cooking', 'food', 'catering', 'kitchen', 'khana', 'rasoi', 'hotel', 'unavu', 'samayal'],
    reply: {
      English: "Food preparation, catering, or a small snack/food business are high-demand local pathways! You can learn standard hygiene (FSSAI) and bulk food management to launch a tiffin or catering service. Would you like to check the skill requirements or start your assessment?",
      Hindi: "खान-पान, कैटरिंग या टिफिन सेवा बहुत लोकप्रिय और लाभदायक आजीविका है! आप स्वच्छता नियमों (FSSAI) और थोक भोजन तैयार करने का कौशल सीख सकते हैं। क्या आप इसका कौशल-मार्ग देखना चाहते हैं?",
      Tamil: "உணவு தயாரிப்பு, கேட்டரிங் அல்லது டிபன் சென்டர் நடத்துவது நல்ல வருமானம் தரும் தொழில்! முறையான சுகாதாரம் (FSSAI) மற்றும் உணவு தயாரிப்பு பயிற்சி பெற்று எளிதாக தொடங்கலாம். முழு வழிகாட்டியைப் பார்க்கலாமா?"
    },
    suggestions: {
      English: ["View Food Prep Pathway", "Start Assessment for Cooking", "Search Food Schemes"],
      Hindi: ["खान-पान मार्ग देखें", "मूल्यांकन शुरू करें", "योजनाएं खोजें"],
      Tamil: ["உணவு வழிகாட்டியைப் பார்", "மதிப்பீட்டைத் தொடங்கு", "திட்டங்களைத் தேடு"]
    },
    actionLink: {
      label: "View Food & Catering Pathway",
      targetTab: "recommendations",
      prefillData: { pathwayId: "food-preparation" }
    }
  },
  {
    keywords: ['tailor', 'tailoring', 'cloth', 'stitching', 'silai', 'kapda', 'boutique', "thaiyal"],
    reply: {
      English: "Tailoring and garment production offer strong opportunities for both independent boutique work and garment factory employment. PM-AJAY GIA often assists with sewing machine assets for self-help groups and individuals. Let's see your current stitching experience!",
      Hindi: "सिलाई और गारमेंट उत्पादन में स्वतंत्र बुटीक और परिधान उद्योग दोनों में काम के बहुत अवसर हैं। पीएम-अजय जीआईए अक्सर सिलाई मशीन टूलकिट में सहायता करता है। आइए अपना मूल्यांकन पूरा करें!",
      Tamil: "தையல் மற்றும் ஆடை தயாரிப்பில் சொந்த பூட்டிக் அல்லது ஆடை நிறுவனங்களில் நல்ல வாய்ப்புகள் உள்ளன. PM-AJAY திட்டத்தில் தையல் இயந்திர உபகரண உதவிகள் கிடைக்கின்றன. உங்கள் அனுபவத்தை பதிவு செய்யலாம்!"
    },
    suggestions: {
      English: ["View Tailoring Pathway", "Start Tailoring Assessment", "Explore GIA Grants"],
      Hindi: ["सिलाई मार्ग देखें", "सिलाई मूल्यांकन शुरू करें", "अनुदान देखें"],
      Tamil: ["தையல் வழிகாட்டியைப் பார்", "மதிப்பீட்டைத் தொடங்கு", "மானியம் காண்க"]
    },
    actionLink: {
      label: "Start Assessment (Tailoring Profile)",
      targetTab: "assessment",
      prefillData: { interests: ["Garment design", "Tailoring", "Boutique"], preferredLivelihoodType: "Self-employment" }
    }
  },
  {
    keywords: ['solar', 'energy', 'bijli', 'suryamitra', 'panel', 'electrician', 'wiring', 'minnor', 'suriyan'],
    reply: {
      English: "Clean energy and electrical maintenance are rapidly expanding sectors! The Government's Suryamitra program and Power Sector Skill Council offer recognized certifications. Would you like to explore the Solar Technician or Domestic Electrician pathway?",
      Hindi: "सौर ऊर्जा (सोलर) और इलेक्ट्रीशियन कार्य आज बहुत तेजी से बढ़ रहे हैं! सरकारी सूर्यमित्र कार्यक्रम और कौशल प्रमाणन से अच्छी नौकरी या ठेकेदारी मिल सकती है। क्या आप सोलर या वायरिंग का मार्ग देखना चाहते हैं?",
      Tamil: "சூரிய மின்சக்தி (Solar) மற்றும் எலக்ட்ரீஷியன் பணிகள் தற்போது அதிக வேலைவாய்ப்புகளை கொண்டுள்ளன! சூர்யமித்ரா திட்டத்தில் இலவச சான்றிதழ் பெறலாம். சோலார் அல்லது வயரிங் வழிகாட்டியைப் பார்க்கலாமா?"
    },
    suggestions: {
      English: ["View Solar Pathway", "View Electrician Pathway", "Start Technical Assessment"],
      Hindi: ["सोलर मार्ग देखें", "इलेक्ट्रीशियन मार्ग देखें", "मूल्यांकन शुरू करें"],
      Tamil: ["சோலார் வழிகாட்டி", "எலக்ட்ரீஷியன் வழிகாட்டி", "மதிப்பீடு தொடங்கு"]
    },
    actionLink: {
      label: "Explore Solar Pathway",
      targetTab: "recommendations",
      prefillData: { pathwayId: "solar-installation" }
    }
  },
  {
    keywords: ['mobile', 'phone', 'repair', 'electronics', 'hardware', 'screen', 'cellphone', 'recharge'],
    reply: {
      English: "Mobile phone repair and servicing is an ideal technical self-employment trade with low initial shop setup cost. You can learn screen replacement, chip soldering, and troubleshooting in a few weeks of NSQF-aligned training.",
      Hindi: "मोबाइल फोन रिपेयर और सर्विसिंग कम लागत में अपनी दुकान शुरू करने का एक बहुत अच्छा विकल्प है। आप कुछ हफ्तों के व्यावहारिक प्रशिक्षण में स्क्रीन बदलना, सोल्डरिंग और सॉफ्टवेयर फ्लैशिंग सीख सकते हैं।",
      Tamil: "மொபைல் போன் சர்வீஸ் மற்றும் ரிப்பேர் குறைந்த முதலீட்டில் சொந்த கடை வைக்க சிறந்த தொழில். சில வார பயிற்சிகளிலேயே டிஸ்ப்ளே மாற்றுதல், சால்டரிங் மற்றும் பழுது நீக்குதலைக் கற்றுக்கொள்ளலாம்."
    },
    suggestions: {
      English: ["View Mobile Repair Pathway", "Start Mobile Assessment", "Explore Training"],
      Hindi: ["मोबाइल रिपेयर मार्ग", "मूल्यांकन शुरू करें", "प्रशिक्षण खोजें"],
      Tamil: ["மொபைல் பழுதுபார்த்தல்", "மதிப்பீடு தொடங்கு", "பயிற்சி தேடு"]
    },
    actionLink: {
      label: "View Mobile Repair Pathway",
      targetTab: "recommendations",
      prefillData: { pathwayId: "mobile-phone-repair" }
    }
  },
  {
    keywords: ['scheme', 'grant', 'pm-ajay', 'gia', 'government', 'subsidy', 'sarkar', 'thittam', 'yojana', 'paisa', 'loan'],
    reply: {
      English: "Under PM-AJAY (Pradhan Mantri Anusuchit Jaati Abhyuday Yojana) Grants-in-Aid (GIA) component, income-generating micro-projects, skill development, and community livelihood infrastructure are supported for SC beneficiaries. You can explore the demonstration records in our Opportunity Explorer.",
      Hindi: "पीएम-अजय (PM-AJAY GIA) घटक के अंतर्गत अनुसूचित जाति के लाभार्थियों के लिए आय-सृजक सूक्ष्म परियोजनाओं, कौशल विकास और आजीविका सहायता हेतु अनुदान मिलता है। आप हमारे अवसर एक्सप्लोरर में प्रदर्शन रिकॉर्ड देख सकते हैं।",
      Tamil: "PM-AJAY திட்டத்தின் கீழ் ஆதிதிராவிடர் சமூகத்தினருக்கான வருமானம் தரும் சிறுதொழில்கள், திறன் மேம்பாட்டு பயிற்சிகள் மற்றும் உபகரண மானியங்கள் வழங்கப்படுகின்றன. இதனை எங்கள் வாய்ப்பு பக்கத்தில் பார்க்கலாம்."
    },
    suggestions: {
      English: ["Explore PM-AJAY Schemes", "Start Livelihood Assessment", "Check Eligibility"],
      Hindi: ["पीएम-अजय योजनाएं देखें", "मूल्यांकन शुरू करें", "पात्रता जांचें"],
      Tamil: ["திட்டங்களை காண்க", "மதிப்பீடு தொடங்கு", "தகுதி விவரங்கள்"]
    },
    actionLink: {
      label: "Open Opportunity Explorer",
      targetTab: "opportunities"
    }
  },
  {
    keywords: ['assessment', 'test', 'profile', 'start', 'begin', 'shuru', 'form', 'evaluate', 'thodangu'],
    reply: {
      English: "Let's begin your 2-minute livelihood assessment! We'll ask about your education, current skills, interests, and whether you prefer employment or self-employment to generate your top 3 personalized pathways.",
      Hindi: "आइए आपका 2 मिनट का आजीविका मूल्यांकन शुरू करते हैं! हम आपकी शिक्षा, वर्तमान कौशल, रुचियों और काम की प्राथमिकता के आधार पर शीर्ष 3 व्यक्तिगत मार्ग तैयार करेंगे।",
      Tamil: "உங்கள் 2 நிமிட வாழ்வாதார மதிப்பீட்டைத் தொடங்குவோம்! உங்கள் கல்வி, திறன்கள், ஆர்வங்களின் அடிப்படையில் முதல் 3 பொருத்தமான தொழிற்பாதைகளை பரிந்துரைப்போம்."
    },
    suggestions: {
      English: ["Start Assessment Now", "Load Ramesh's Demo Profile", "Load Priya's Demo Profile"],
      Hindi: ["मूल्यांकन शुरू करें", "रमेश का प्रोफाइल लोड करें", "प्रिया का प्रोफाइल लोड करें"],
      Tamil: ["மதிப்பீட்டைத் தொடங்கவும்", "மாதிரி சுயவிவரம் காண்க"]
    },
    actionLink: {
      label: "Go to Assessment Form",
      targetTab: "assessment"
    }
  }
];

export function getAssistantResponse(userText: string, lang: AssistantLanguage = 'English'): { reply: string; suggestions: string[]; actionLink?: any } {
  const norm = userText.toLowerCase().trim();

  // Search through intent rules
  for (const rule of INTENT_RULES) {
    if (rule.keywords.some(k => norm.includes(k))) {
      return {
        reply: rule.reply[lang] || rule.reply.English,
        suggestions: rule.suggestions[lang] || rule.suggestions.English,
        actionLink: rule.actionLink
      };
    }
  }

  // Default context-aware response
  const defaultReplies: Record<AssistantLanguage, { reply: string; suggestions: string[] }> = {
    English: {
      reply: `I heard: "${userText}". I can help you map your skills to 12 vocational livelihood pathways (such as Solar Energy, Tailoring, Food Catering, Mobile Repair, or Computer Operations) and explore PM-AJAY GIA grant opportunities. Would you like to start the guided assessment?`,
      suggestions: ["Start Assessment", "Explore Solar & Electrical", "Tailoring & Garments", "PM-AJAY Grants"]
    },
    Hindi: {
      reply: `मैंने सुना: "${userText}"। मैं आपके कौशल को 12 व्यावसायिक आजीविका मार्गों (जैसे सोलर, सिलाई, खान-पान, मोबाइल रिपेयर या कंप्यूटर कार्य) से जोड़ने में मदद कर सकता हूँ। क्या आप मूल्यांकन शुरू करना चाहते हैं?`,
      suggestions: ["मूल्यांकन शुरू करें", "सिलाई और गारमेंट्स", "सोलर और बिजली कार्य", "पीएम-अजय योजनाएं"]
    },
    Tamil: {
      reply: `நான் கேட்டது: "${userText}". தையல், சோலார், கேட்டரிங், மொபைல் சர்வீஸ் போன்ற 12 தொழில் வழிகாட்டிகள் மற்றும் PM-AJAY திட்டங்கள் பற்றி அறிய உங்களுக்கு உதவ முடியும். மதிப்பீட்டைத் தொடங்கலாமா?`,
      suggestions: ["மதிப்பீடு தொடங்கு", "தையல் தொழில்", "சோலார் & எலக்ட்ரிக்கல்", "அரசு திட்டங்கள்"]
    }
  };

  return {
    reply: defaultReplies[lang].reply,
    suggestions: defaultReplies[lang].suggestions,
    actionLink: {
      label: "Start Assessment",
      targetTab: "assessment"
    }
  };
}
