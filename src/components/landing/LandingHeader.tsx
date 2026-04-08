type LandingHeaderProps = {
  activeSection: string;
  onNavigate: (sectionId: string, message: string) => void;
};

export function LandingHeader({
  activeSection,
  onNavigate,
}: LandingHeaderProps) {
  return (
    <header className="top-nav">
      <button
        className={`pill ${activeSection === "menu" ? "active" : ""}`}
        onClick={() => onNavigate("menu", "Viewing full menu section.")}
      >
        MENU
      </button>
      <button
        className="nav-link"
        onClick={() => onNavigate("home", "Back to home.")}
      >
        HOME
      </button>
      <button
        className="nav-link"
        onClick={() => onNavigate("menu", "Browsing menu.")}
      >
        MENU
      </button>

      <div className="logo">CRUST</div>
      <button
        className="nav-link"
        onClick={() => onNavigate("about", "Reading about us.")}
      >
        ABOUT
      </button>
      <button
        className="nav-link"
        onClick={() => onNavigate("request", "Go to contact/request section.")}
      >
        CONTACT
      </button>
      <span className="dot" />
    </header>
  );
}
