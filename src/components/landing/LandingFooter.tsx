type LandingFooterProps = {
  onNavigate: (sectionId: string, message: string) => void;
  onRequest: (type: string) => void;
  onMessage: (message: string) => void;
};

export function LandingFooter({
  onNavigate,
  onRequest,
  onMessage,
}: LandingFooterProps) {
  return (
    <footer className="footer-nav">
      <div className="logo small">CRUST</div>
      <button className="nav-link" onClick={() => onNavigate("menu", "Menu opened.")}>
        MENU
      </button>
      <button
        className="nav-link"
        onClick={() => {
          onRequest("catering");
          onNavigate("request", "Catering request selected.");
        }}
      >
        CATERING
      </button>
      <button className="nav-link" onClick={() => onMessage("Gift cards available soon.")}>
        GIFTING
      </button>
      <button
        className="nav-link"
        onClick={() => onMessage("Communication center not available in demo.")}
      >
        COMMUNICATION
      </button>
      <button className="nav-link" onClick={() => onMessage("Privacy policy coming soon.")}>
        PRIVACY
      </button>
      <button
        className="nav-link"
        onClick={() => onMessage("Terms and conditions coming soon.")}
      >
        TERMS
      </button>
    </footer>
  );
}
