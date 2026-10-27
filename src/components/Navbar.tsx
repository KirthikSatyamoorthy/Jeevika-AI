import React, { useState } from 'react';
import { Mic, User, Compass, BarChart3, LayoutDashboard, Volume2, Globe2, Eye, Menu, X, Sparkles } from 'lucide-react';
import { AssistantLanguage } from '../services/voiceAssistant';

interface NavbarProps {
  currentTab: string;
  onNavigate: (tab: string) => void;
  onOpenVoice: () => void;
  selectedLanguage: AssistantLanguage;
  onSelectLanguage: (lang: AssistantLanguage) => void;
  isHighContrast: boolean;
  onToggleHighContrast: () => void;
  isLargeFont: boolean;
  onToggleLargeFont: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  onNavigate,
  onOpenVoice,
  selectedLanguage,
  onSelectLanguage,
  isHighContrast,
  onToggleHighContrast,
  isLargeFont,
  onToggleLargeFont
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (tab: string) => {
    onNavigate(tab);
    setMobileMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Brand */}
        <div 
          className="brand-section" 
          onClick={() => handleNavClick('home')}
          style={{ cursor: 'pointer' }}
          role="button"
          tabIndex={0}
          aria-label="Jeevika AI Home"
        >
          <div className="brand-logo" aria-hidden="true">🌱</div>
          <div>
            <div className="brand-name">
              Jeevika AI
              <span className="badge badge-primary" style={{ fontSize: '0.65rem', padding: '0.1rem 0.4rem' }}>PS 097</span>
            </div>
            <div className="brand-tagline">PM-AJAY GIA Livelihood & Skilling</div>
          </div>
        </div>

        {/* Desktop Nav Items */}
        <nav className="nav-links" aria-label="Main Navigation">
          <button 
            className={`nav-item-btn ${currentTab === 'home' ? 'active' : ''}`}
            onClick={() => handleNavClick('home')}
          >
            Home
          </button>
          <button 
            className={`nav-item-btn ${currentTab === 'assessment' ? 'active' : ''}`}
            onClick={() => handleNavClick('assessment')}
          >
            <Sparkles size={16} /> Assessment
          </button>
          <button 
            className={`nav-item-btn ${currentTab === 'recommendations' ? 'active' : ''}`}
            onClick={() => handleNavClick('recommendations')}
          >
            <Compass size={16} /> Pathways
          </button>
          <button 
            className={`nav-item-btn ${currentTab === 'opportunities' ? 'active' : ''}`}
            onClick={() => handleNavClick('opportunities')}
          >
            Opportunities
          </button>
          <button 
            className={`nav-item-btn ${currentTab === 'dashboard' ? 'active' : ''}`}
            onClick={() => handleNavClick('dashboard')}
          >
            <User size={16} /> My Profile
          </button>
          <button 
            className={`nav-item-btn ${currentTab === 'facilitator' ? 'active' : ''}`}
            onClick={() => handleNavClick('facilitator')}
          >
            <BarChart3 size={16} /> Facilitator View
          </button>
        </nav>

        {/* Actions & Accessibility */}
        <div className="nav-actions">
          {/* Language Selector */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
            <Globe2 size={16} color="var(--text-muted)" aria-hidden="true" />
            <select 
              value={selectedLanguage}
              onChange={(e) => onSelectLanguage(e.target.value as AssistantLanguage)}
              className="a11y-pill"
              aria-label="Select Interface and Voice Language"
              style={{ cursor: 'pointer', paddingRight: '0.5rem' }}
            >
              <option value="English">English</option>
              <option value="Hindi">हिंदी (Hindi)</option>
              <option value="Tamil">தமிழ் (Tamil)</option>
            </select>
          </div>

          {/* High Contrast Toggle */}
          <button 
            onClick={onToggleHighContrast}
            className="a11y-pill"
            title="Toggle High Contrast"
            aria-pressed={isHighContrast}
          >
            <Eye size={15} />
            <span style={{ display: 'none' }}>Contrast</span>
          </button>

          {/* Large Font Toggle */}
          <button 
            onClick={onToggleLargeFont}
            className="a11y-pill"
            title="Toggle Text Size"
            aria-pressed={isLargeFont}
          >
            <span style={{ fontWeight: 800 }}>A+</span>
          </button>

          {/* Quick Voice Assistant Trigger */}
          <button 
            onClick={onOpenVoice}
            className="btn btn-primary btn-sm"
            style={{ borderRadius: 'var(--radius-full)', gap: '0.4rem' }}
            aria-label="Open Voice Assistant"
          >
            <Mic size={16} />
            <span style={{ fontWeight: 700 }}>Voice AI</span>
          </button>

          {/* Mobile hamburger */}
          <button 
            className="a11y-pill"
            style={{ display: 'none' }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Open Navigation Menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer (visible on small screens) */}
      {mobileMenuOpen && (
        <div style={{ padding: '1rem', borderTop: '1px solid var(--border-color)', background: 'var(--bg-surface)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <button className={`nav-item-btn ${currentTab === 'home' ? 'active' : ''}`} onClick={() => handleNavClick('home')}>Home</button>
            <button className={`nav-item-btn ${currentTab === 'assessment' ? 'active' : ''}`} onClick={() => handleNavClick('assessment')}>Assessment</button>
            <button className={`nav-item-btn ${currentTab === 'recommendations' ? 'active' : ''}`} onClick={() => handleNavClick('recommendations')}>Livelihood Pathways</button>
            <button className={`nav-item-btn ${currentTab === 'opportunities' ? 'active' : ''}`} onClick={() => handleNavClick('opportunities')}>Opportunities</button>
            <button className={`nav-item-btn ${currentTab === 'dashboard' ? 'active' : ''}`} onClick={() => handleNavClick('dashboard')}>My Profile</button>
            <button className={`nav-item-btn ${currentTab === 'facilitator' ? 'active' : ''}`} onClick={() => handleNavClick('facilitator')}>Facilitator Insights</button>
          </div>
        </div>
      )}
    </header>
  );
};
