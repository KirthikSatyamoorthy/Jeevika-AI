import React, { useState, useEffect, useRef } from 'react';
import { Mic, MicOff, Volume2, VolumeX, Send, X, Globe2, AlertCircle, Sparkles, CornerDownLeft } from 'lucide-react';
import { AssistantLanguage, AssistantMessage, LANG_CODES, getAssistantResponse } from '../services/voiceAssistant';

interface VoiceAssistantModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedLanguage: AssistantLanguage;
  onSelectLanguage: (lang: AssistantLanguage) => void;
  onNavigateTab: (tab: string, prefill?: any) => void;
}

export const VoiceAssistantModal: React.FC<VoiceAssistantModalProps> = ({
  isOpen,
  onClose,
  selectedLanguage,
  onSelectLanguage,
  onNavigateTab
}) => {
  const [messages, setMessages] = useState<AssistantMessage[]>([
    {
      id: 'welcome-1',
      sender: 'assistant',
      text: "Namaste! I am your Jeevika AI voice companion. Ask me anything about finding a livelihood, tailoring, solar energy, food businesses, or PM-AJAY GIA grants.",
      timestamp: 'Just now',
      suggestions: [
        "I want to start a small business",
        "Explore solar panel work",
        "Tailoring & garment production",
        "Start my livelihood assessment"
      ]
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [autoSpeak, setAutoSpeak] = useState(true);
  const [speechSupported, setSpeechSupported] = useState(true);
  const [permissionError, setPermissionError] = useState<string | null>(null);

  const recognitionRef = useRef<any>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initialize Speech Recognition
  useEffect(() => {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) {
      setSpeechSupported(false);
      return;
    }

    try {
      const recognition = new SpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = LANG_CODES[selectedLanguage];

      recognition.onstart = () => {
        setIsListening(true);
        setPermissionError(null);
      };

      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        if (transcript) {
          handleSendMessage(transcript);
        }
      };

      recognition.onerror = (event: any) => {
        setIsListening(false);
        if (event.error === 'not-allowed') {
          setPermissionError('Microphone permission was denied. Please allow microphone access in your browser or type your message below.');
        } else if (event.error === 'no-speech') {
          setPermissionError('No speech detected. Please tap the mic and speak clearly into your microphone.');
        } else {
          setPermissionError(`Voice recognition event: ${event.error}. You can also type below.`);
        }
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognitionRef.current = recognition;
    } catch (e) {
      setSpeechSupported(false);
    }

    return () => {
      if (recognitionRef.current) {
        try {
          recognitionRef.current.abort();
        } catch (e) {}
      }
    };
  }, [selectedLanguage]);

  // Scroll to bottom on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Text to Speech
  const speakText = (text: string) => {
    if (!('speechSynthesis' in window) || !autoSpeak) return;

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = LANG_CODES[selectedLanguage];
    utterance.rate = 0.95;

    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    window.speechSynthesis.speak(utterance);
  };

  const handleToggleListen = () => {
    if (!speechSupported) {
      setPermissionError('Speech recognition is not supported in this browser. Please use the text input.');
      return;
    }

    if (isListening) {
      recognitionRef.current?.stop();
      setIsListening(false);
    } else {
      setPermissionError(null);
      try {
        if (recognitionRef.current) {
          recognitionRef.current.lang = LANG_CODES[selectedLanguage];
          recognitionRef.current.start();
        }
      } catch (err) {
        console.error('Error starting recognition:', err);
      }
    }
  };

  const handleSendMessage = (textToSend?: string) => {
    const text = (textToSend || inputText).trim();
    if (!text) return;

    const userMsg: AssistantMessage = {
      id: `usr-${Date.now()}`,
      sender: 'user',
      text,
      timestamp: 'Just now'
    };

    setMessages(prev => [...prev, userMsg]);
    setInputText('');

    // Generate assistant reply
    setTimeout(() => {
      const resp = getAssistantResponse(text, selectedLanguage);
      const assistantMsg: AssistantMessage = {
        id: `asst-${Date.now()}`,
        sender: 'assistant',
        text: resp.reply,
        timestamp: 'Just now',
        suggestions: resp.suggestions,
        actionLink: resp.actionLink
      };

      setMessages(prev => [...prev, assistantMsg]);
      speakText(resp.reply);
    }, 400);
  };

  const handleSuggestionClick = (sug: string) => {
    handleSendMessage(sug);
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" role="dialog" aria-modal="true" aria-labelledby="voice-modal-title">
      <div className="modal-content" style={{ maxWidth: '640px', height: '620px' }}>
        {/* Header */}
        <div className="modal-header" style={{ background: '#f8fafc' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <div style={{ width: '36px', height: '36px', background: 'var(--primary)', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Mic size={18} />
            </div>
            <div>
              <h3 id="voice-modal-title" style={{ fontSize: '1.1rem', fontWeight: 800 }}>Jeevika Voice Assistant</h3>
              <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Local rule-based intelligence for PM-AJAY Livelihoods</p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            {/* Language dropdown */}
            <select
              value={selectedLanguage}
              onChange={(e) => onSelectLanguage(e.target.value as AssistantLanguage)}
              className="a11y-pill"
              aria-label="Assistant Language"
            >
              <option value="English">English</option>
              <option value="Hindi">हिंदी</option>
              <option value="Tamil">தமிழ்</option>
            </select>

            {/* Audio toggle */}
            <button 
              onClick={() => {
                if (isSpeaking) window.speechSynthesis.cancel();
                setAutoSpeak(!autoSpeak);
              }}
              className="a11y-pill"
              title={autoSpeak ? "Audio enabled" : "Audio muted"}
              aria-label={autoSpeak ? "Mute assistant voice" : "Enable assistant voice"}
            >
              {autoSpeak ? <Volume2 size={16} color="var(--primary)" /> : <VolumeX size={16} color="var(--text-muted)" />}
            </button>

            {/* Close */}
            <button onClick={onClose} className="a11y-pill" aria-label="Close Assistant">
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Permission / Unsupported Alert */}
        {permissionError && (
          <div style={{ background: '#fef2f2', borderBottom: '1px solid #fee2e2', padding: '0.6rem 1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#b91c1c', fontSize: '0.84rem' }}>
            <AlertCircle size={16} />
            <span>{permissionError}</span>
          </div>
        )}

        {!speechSupported && (
          <div style={{ background: '#f0f9ff', padding: '0.5rem 1rem', color: '#0369a1', fontSize: '0.82rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <span>Voice input is not supported in this browser. Please use the text input below.</span>
          </div>
        )}

        {/* Chat message history */}
        <div className="modal-body" style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '1rem', background: '#fcfcfd' }}>
          {messages.map((msg) => (
            <div 
              key={msg.id} 
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: msg.sender === 'user' ? 'flex-end' : 'flex-start'
              }}
            >
              <div 
                style={{
                  maxWidth: '85%',
                  padding: '0.85rem 1.1rem',
                  borderRadius: msg.sender === 'user' ? '18px 18px 4px 18px' : '18px 18px 18px 4px',
                  background: msg.sender === 'user' ? 'var(--primary)' : '#ffffff',
                  color: msg.sender === 'user' ? 'white' : 'var(--text-primary)',
                  boxShadow: 'var(--shadow-sm)',
                  border: msg.sender === 'user' ? 'none' : '1px solid var(--border-color)',
                  fontSize: '0.94rem',
                  lineHeight: '1.5'
                }}
              >
                {msg.text}
              </div>

              {/* Action Button if attached */}
              {msg.actionLink && (
                <button
                  onClick={() => {
                    onClose();
                    onNavigateTab(msg.actionLink!.targetTab, msg.actionLink!.prefillData);
                  }}
                  className="btn btn-secondary btn-sm"
                  style={{ marginTop: '0.5rem', fontSize: '0.82rem' }}
                >
                  <Sparkles size={14} />
                  {msg.actionLink.label}
                </button>
              )}

              {/* Suggestion Chips */}
              {msg.suggestions && msg.suggestions.length > 0 && (
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: '0.6rem', maxWidth: '90%' }}>
                  {msg.suggestions.map((sug, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSuggestionClick(sug)}
                      style={{
                        padding: '0.35rem 0.75rem',
                        background: '#f1f5f9',
                        border: '1px solid #cbd5e1',
                        borderRadius: 'var(--radius-full)',
                        fontSize: '0.78rem',
                        fontWeight: 600,
                        color: '#334155',
                        cursor: 'pointer'
                      }}
                    >
                      💬 {sug}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Prominent Voice Mic & Input Area */}
        <div style={{ padding: '1rem 1.25rem', borderTop: '2px solid var(--border-color)', background: '#ffffff' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            {/* Big Mic Button */}
            <button
              onClick={handleToggleListen}
              style={{
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                background: isListening ? '#dc2626' : 'var(--primary)',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                boxShadow: isListening ? '0 0 0 6px rgba(220, 38, 38, 0.3)' : '0 4px 12px rgba(21, 128, 61, 0.35)',
                transition: 'all 0.2s ease',
                cursor: 'pointer'
              }}
              title={isListening ? "Listening... Click to stop" : "Tap to speak (Voice Recognition)"}
              aria-label={isListening ? "Listening... Click to stop" : "Tap to speak"}
            >
              {isListening ? <MicOff size={26} /> : <Mic size={26} />}
            </button>

            {/* Text input fallback */}
            <div style={{ flex: 1, position: 'relative', display: 'flex', alignItems: 'center' }}>
              <input
                type="text"
                placeholder={isListening ? "Listening to your voice..." : "Type or speak in English, Hindi, or Tamil..."}
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                style={{
                  width: '100%',
                  padding: '0.75rem 2.8rem 0.75rem 1rem',
                  border: '2px solid var(--border-color)',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.94rem',
                  outline: 'none'
                }}
              />
              <button
                onClick={() => handleSendMessage()}
                disabled={!inputText.trim()}
                style={{
                  position: 'absolute',
                  right: '6px',
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: inputText.trim() ? 'var(--primary)' : '#e2e8f0',
                  color: inputText.trim() ? 'white' : '#94a3b8',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: inputText.trim() ? 'pointer' : 'default'
                }}
                aria-label="Send message"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.45rem', fontSize: '0.74rem', color: 'var(--text-muted)' }}>
            <span>{isListening ? "🎙️ Recording... Speak now" : "💡 Tap mic or type text"}</span>
            <span>Local Speech API • Zero External Keys</span>
          </div>
        </div>
      </div>
    </div>
  );
};
