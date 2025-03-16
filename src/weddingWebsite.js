import React, { useState } from "react";
import NavigationMenu from "./components/Navigation";
import HomeSection from "./components/pages/Home";
import ThingsToDoSection from "./components/pages/ThingsToDo";
import WhereToStaySection from "./components/pages/WhereToStay";
import OurStorySection from "./components/pages/OurStory";
import DetailsSection from "./components/pages/Details";
import GallerySection from "./components/pages/Gallery";

export default function WeddingWebsite() {
  const [activeSection, setActiveSection] = useState("home");
  // const [formData, setFormData] = useState({
  //   name: "",
  //   guests: 1,
  //   attending: true,
  // });

  function renderActiveSection() {
    switch (activeSection) {
      case "home":
        return <HomeSection />;
      case "our story":
        return <OurStorySection />;
      case "details":
        return <DetailsSection />;
      case "things to do":
        return <ThingsToDoSection />;
      case "where to stay":
        return <WhereToStaySection />;
      case "gallery":
        return <GallerySection />;
      default:
        return <HomeSection />;
    }
  }

  return (
    <div>
      <NavigationMenu
        setActiveSection={setActiveSection}
        activeSection={activeSection}
      />
      <div style={{ marginTop: "70px", height: "80vh" }}>
        {renderActiveSection()}
      </div>
    </div>
  );
}
