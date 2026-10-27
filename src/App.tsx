import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { VoiceAssistantModal } from './components/VoiceAssistantModal';
import { HomePage } from './pages/HomePage';
import { AssessmentPage } from './pages/AssessmentPage';
import { RecommendationsPage } from './pages/RecommendationsPage';
import { OpportunitiesPage } from './pages/OpportunitiesPage';
import { UserDashboard } from './pages/UserDashboard';
import { FacilitatorDashboard } from './pages/FacilitatorDashboard';
import { UserAssessment, RecommendationResult, NSQFPathway } from './types/assessment';
import { AssistantLanguage } from './services/voiceAssistant';
import { generateRecommendations } from './services/recommendationEngine';
import { 
  getStoredAssessment, 
  saveAssessmentToStorage, 
  getSavedOpportunityIds, 
  toggleSaveOpportunity, 
  clearAllLocalDemoData, 
  getFacilitatorStats 
} from './services/storage';
import { DEMO_PROFILES, FictionalDemoProfile } from './data/fictionalProfiles';
import { Mic, CheckCircle } from 'lucide-react';

export const App: React.FC = () => {
  const [currentTab, setCurrentTab] = useState<string>('home');
  const [isVoiceOpen, setIsVoiceOpen] = useState<boolean>(false);
  const [selectedLanguage, setSelectedLanguage] = useState<AssistantLanguage>('English');
  const [isHighContrast, setIsHighContrast] = useState<boolean>(false);
  const [isLargeFont, setIsLargeFont] = useState<boolean>(false);
  
  // Assessment and recommendations state
  const [assessment, setAssessment] = useState<UserAssessment | null>(null);
  const [recommendations, setRecommendations] = useState<RecommendationResult[]>([]);
  const [savedOpportunityIds, setSavedOpportunityIds] = useState<string[]>([]);
  const [primaryGoalPathway, setPrimaryGoalPathway] = useState<NSQFPathway | null>(null);
  const [filterPathwayId, setFilterPathwayId] = useState<string | undefined>(undefined);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  // Initialize data on mount
  useEffect(() => {
    const stored = getStoredAssessment();
    const savedOpps = getSavedOpportunityIds();
    setSavedOpportunityIds(savedOpps);

    if (stored) {
      setAssessment(stored);
      const recs = generateRecommendations(stored);
      setRecommendations(recs);
    } else {
      // Default to Ramesh's profile as initial baseline
      const defaultProf = DEMO_PROFILES[0].assessment;
      setAssessment(defaultProf);
      const recs = generateRecommendations(defaultProf);
      setRecommendations(recs);
    }
  }, []);

  // Sync high contrast and font size classes on body
  useEffect(() => {
    if (isHighContrast) {
      document.body.classList.add('high-contrast');
    } else {
      document.body.classList.remove('high-contrast');
    }
  }, [isHighContrast]);

  useEffect(() => {
    if (isLargeFont) {
      document.body.classList.add('large-font');
    } else {
      document.body.classList.remove('large-font');
    }
  }, [isLargeFont]);

  // Handle assessment submit
  const handleSubmitAssessment = (newAssessment: UserAssessment) => {
    setAssessment(newAssessment);
    saveAssessmentToStorage(newAssessment);
    const recs = generateRecommendations(newAssessment);
    setRecommendations(recs);
    showToast("Assessment completed! Recommendations updated.");
    setCurrentTab('recommendations');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle one-click demo profile load
  const handleLoadProfile = (profile: FictionalDemoProfile) => {
    handleSubmitAssessment(profile.assessment);
  };

  // Handle save opportunity
  const handleToggleSaveOpportunity = (id: string) => {
    const updated = toggleSaveOpportunity(id);
    setSavedOpportunityIds(updated);
    showToast(updated.includes(id) ? "Opportunity saved to your profile!" : "Opportunity removed from saved list.");
  };

  // Handle clear data
  const handleClearDemoData = () => {
    clearAllLocalDemoData();
    const freshProfile = DEMO_PROFILES[0].assessment;
    setAssessment(freshProfile);
    setRecommendations(generateRecommendations(freshProfile));
    setSavedOpportunityIds([]);
    setPrimaryGoalPathway(null);
    showToast("Demonstration data reset to initial defaults.");
  };

  // Voice assistant tab navigation callback
  const handleVoiceNavigate = (tab: string, prefill?: any) => {
    if (prefill) {
      if (prefill.pathwayId) {
        setFilterPathwayId(prefill.pathwayId);
      }
      if (prefill.preferredLivelihoodType && assessment) {
        setAssessment({ ...assessment, preferredLivelihoodType: prefill.preferredLivelihoodType });
      }
    }
    setCurrentTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const facilitatorStats = getFacilitatorStats();

  return (
    <div className="app-layout">
      {/* Toast Notification */}
      {toastMessage && (
        <div style={{
          position: 'fixed',
          top: '80px',
          right: '20px',
          background: '#064e3b',
          color: 'white',
          padding: '0.75rem 1.25rem',
          borderRadius: 'var(--radius-md)',
          boxShadow: 'var(--shadow-lg)',
          zIndex: 100,
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          fontSize: '0.9rem',
          fontWeight: 600,
          animation: 'fade-in 0.2s ease-out'
        }}>
          <CheckCircle size={18} color="#4ade80" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Navigation */}
      <Navbar
        currentTab={currentTab}
        onNavigate={(tab) => {
          setCurrentTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenVoice={() => setIsVoiceOpen(true)}
        selectedLanguage={selectedLanguage}
        onSelectLanguage={setSelectedLanguage}
        isHighContrast={isHighContrast}
        onToggleHighContrast={() => setIsHighContrast(!isHighContrast)}
        isLargeFont={isLargeFont}
        onToggleLargeFont={() => setIsLargeFont(!isLargeFont)}
      />

      {/* Main Pages */}
      <main className="main-content" role="main">
        {currentTab === 'home' && (
          <HomePage
            onNavigate={(tab) => {
              setCurrentTab(tab);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOpenVoice={() => setIsVoiceOpen(true)}
            onLoadProfile={handleLoadProfile}
          />
        )}

        {currentTab === 'assessment' && (
          <AssessmentPage
            initialData={assessment}
            onSubmitAssessment={handleSubmitAssessment}
            onOpenVoice={() => setIsVoiceOpen(true)}
          />
        )}

        {currentTab === 'recommendations' && (
          <RecommendationsPage
            recommendations={recommendations}
            assessment={assessment}
            onRetakeAssessment={() => setCurrentTab('assessment')}
            onExploreOpportunities={(pathwayId) => {
              setFilterPathwayId(pathwayId);
              setCurrentTab('opportunities');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onSelectPrimaryGoal={(pathway) => {
              setPrimaryGoalPathway(pathway);
              showToast(`"${pathway.title}" selected as your primary target!`);
              setCurrentTab('dashboard');
            }}
          />
        )}

        {currentTab === 'opportunities' && (
          <OpportunitiesPage
            savedOpportunityIds={savedOpportunityIds}
            onToggleSave={handleToggleSaveOpportunity}
            initialFilterPathwayId={filterPathwayId}
          />
        )}

        {currentTab === 'dashboard' && (
          <UserDashboard
            assessment={assessment}
            recommendations={recommendations}
            savedOpportunityIds={savedOpportunityIds}
            primaryGoalPathway={primaryGoalPathway}
            onRetakeAssessment={() => setCurrentTab('assessment')}
            onClearDemoData={handleClearDemoData}
            onExploreOpportunities={() => setCurrentTab('opportunities')}
            onViewRecommendations={() => setCurrentTab('recommendations')}
            onToggleSaveOpportunity={handleToggleSaveOpportunity}
          />
        )}

        {currentTab === 'facilitator' && (
          <FacilitatorDashboard stats={facilitatorStats} />
        )}
      </main>

      {/* Prominent Floating Voice Trigger Button */}
      <button
        onClick={() => setIsVoiceOpen(true)}
        className="voice-float-btn"
        aria-label="Talk to Jeevika AI Voice Assistant"
      >
        <Mic size={22} />
        <span>Voice AI ({selectedLanguage})</span>
      </button>

      {/* Voice Assistant Modal */}
      <VoiceAssistantModal
        isOpen={isVoiceOpen}
        onClose={() => setIsVoiceOpen(false)}
        selectedLanguage={selectedLanguage}
        onSelectLanguage={setSelectedLanguage}
        onNavigateTab={handleVoiceNavigate}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
};
