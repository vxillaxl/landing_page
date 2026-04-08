"use client";

import { LandingFooter } from "@/components/landing/LandingFooter";
import { LandingHeader } from "@/components/landing/LandingHeader";
import { LandingMainSections } from "@/components/landing/LandingMainSections";
import { useLandingPage } from "@/hooks/useLandingPage";

export function LandingPage() {
  const {
    cartCount,
    selectedRequest,
    activeSection,
    statusMessage,
    setStatusMessage,
    goTo,
    openOrderForm,
    goToLearnMore,
    handleRequest,
  } = useLandingPage();

  return (
    <div className="page-shell">
      <main className="landing-card">
        <p className="status-bar">
          {statusMessage} <strong suppressHydrationWarning>Cart: {cartCount}</strong>
        </p>

        <LandingHeader activeSection={activeSection} onNavigate={goTo} />

        <LandingMainSections
          selectedRequest={selectedRequest}
          onOpenOrderForm={openOrderForm}
          onLearnMore={goToLearnMore}
          onNavigate={goTo}
          onRequest={handleRequest}
          onMessage={setStatusMessage}
        />

        <LandingFooter
          onNavigate={goTo}
          onRequest={handleRequest}
          onMessage={setStatusMessage}
        />
      </main>
    </div>
  );
}
