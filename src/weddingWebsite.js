import React, { useState, useEffect } from "react";
import NavigationMenu from "./components/Navigation";
import HomeSection from "./components/pages/Home";
import ThingsToDoSection from "./components/pages/ThingsToDo";
import WhereToStaySection from "./components/pages/WhereToStay";
import OurStorySection from "./components/pages/OurStory";
import DetailsSection from "./components/pages/Details";
import GallerySection from "./components/pages/Gallery";

export default function WeddingWebsite() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // Adjust the width as needed
  const [activeSection, setActiveSection] = useState("home");
  // const [formData, setFormData] = useState({
  //   name: "",
  //   guests: 1,
  //   attending: true,
  // });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Update state based on window width
    };

    window.addEventListener("resize", handleResize); // Add event listener for window resize

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function renderActiveSection() {
    switch (activeSection) {
      case "home":
        return <HomeSection isMobile={isMobile} />;
      case "our story":
        return <OurStorySection isMobile={isMobile} />;
      case "details":
        return <DetailsSection isMobile={isMobile} />;
      case "things to do":
        return <ThingsToDoSection isMobile={isMobile} />;
      case "where to stay":
        return <WhereToStaySection isMobile={isMobile} />;
      case "gallery":
        return <GallerySection isMobile={isMobile} />;
      default:
        return <HomeSection isMobile={isMobile} />;
    }
  }

  return (
    <div>
      <NavigationMenu
        setActiveSection={setActiveSection}
        activeSection={activeSection}
        isMobile={isMobile}
      />
      <div style={{ marginTop: "70px", height: "80vh" }}>
        {renderActiveSection()}
      </div>
    </div>
  );
}
