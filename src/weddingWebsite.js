import React, { useState } from "react";
import NavigationMenu from "./components/Navigation";
import HomeSection from "./components/pages/Home";
import RSVPSection from "./components/pages/RSVP";
import OurStorySection from "./components/pages/OurStory";
import DetailsSection from "./components/pages/Details";
import GallerySection from "./components/pages/Gallery";

export default function WeddingWebsite() {
  const [activeSection, setActiveSection] = useState("home");
  const [formData, setFormData] = useState({
    name: "",
    guests: 1,
    attending: true,
  });

  function renderActiveSection() {
    switch (activeSection) {
      case "home":
        return <HomeSection />;
      case "our story":
        return <OurStorySection />;
      case "details":
        return <DetailsSection />;
      case "rsvp":
        return <RSVPSection formData={formData} setFormData={setFormData} />;
      case "gallery":
        return <GallerySection />;
      default:
        return <HomeSection />;
    }
  }

  return (
    <div>
      <NavigationMenu setActiveSection={setActiveSection} />
      <div style={{ marginTop: "70px" }}>{renderActiveSection()}</div>
    </div>
  );
}
