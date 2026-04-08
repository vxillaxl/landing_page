"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useLocalStorageState } from "@/hooks/useLocalStorageState";

export function useLandingPage() {
  const router = useRouter();
  const [cartCount] = useLocalStorageState<number>("crust-cart-count", 0);
  const [selectedRequest, setSelectedRequest] = useLocalStorageState<string>(
    "crust-request-type",
    "none",
  );
  const [activeSection, setActiveSection] = useState("home");
  const [statusMessage, setStatusMessage] = useState("Welcome to CRUST Pizza.");

  const goTo = (sectionId: string, message: string) => {
    setActiveSection(sectionId);
    setStatusMessage(message);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    router.push(`/#${sectionId}`);
  };

  const openOrderForm = (itemName: string) => {
    setStatusMessage(`Preparing order form for ${itemName}.`);
    router.push(`/order?item=${encodeURIComponent(itemName)}`);
  };

  const goToLearnMore = () => {
    setStatusMessage("Opening more information page.");
    router.push("/about-site");
  };

  const handleRequest = (type: string) => {
    setSelectedRequest(type);
    setStatusMessage(`Request type selected: ${type}.`);
  };

  return {
    cartCount,
    selectedRequest,
    activeSection,
    statusMessage,
    setStatusMessage,
    goTo,
    openOrderForm,
    goToLearnMore,
    handleRequest,
  };
}
