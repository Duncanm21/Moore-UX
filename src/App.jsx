import React, { useState, useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import LandingPageDesktopSporg from "./pages/LandingPageDesktopSporg";

// Create a loading component
const LoadingScreen = ({ progress }) => (
  <div className="loading-message">
    <div>
      <h1
        style={{
          color: "#E4572E",
          fontFamily: "VCR OSD Mono",
          fontSize: "40px",
        }}
      >
        Moore-UX
      </h1>
      <p
        style={{
          color: "#F3A712",
          fontFamily: "VCR OSD Mono",
          fontSize: "24px",
        }}
      >
        Loading interactive portfolio{progress ? ` ${progress}%` : "..."}
      </p>
    </div>
  </div>
);

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  // Add a loading strategy
  useEffect(() => {
    // Start with initial progress
    let progress = 0;

    // Create incremental loading effect
    const interval = setInterval(() => {
      progress += Math.floor(Math.random() * 10) + 1;

      if (progress >= 100) {
        clearInterval(interval);
        progress = 100;

        // Add a small delay before showing content for smooth transition
        setTimeout(() => setIsLoading(false), 300);
      }

      setLoadingProgress(progress);
    }, 200);

    // Fallback timer in case loading gets stuck
    const fallbackTimer = setTimeout(() => {
      clearInterval(interval);
      setIsLoading(false);
    }, 5000);

    return () => {
      clearInterval(interval);
      clearTimeout(fallbackTimer);
    };
  }, []);

  // Scroll restoration
  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  // Document metadata update
  useEffect(() => {
    let title = "Moore UX Portfolio";
    let metaDescription =
      "Interactive UX/UI design portfolio showcasing work across various projects including SPOrg, Glidance, Education Design Lab, and more.";

    switch (pathname) {
      case "/":
        // Default values already set
        break;
      // Add cases for other routes as needed
      default:
        // Keep defaults
        break;
    }

    // Update title
    document.title = title;

    // Update meta description
    const metaDescriptionTag = document.querySelector(
      'head > meta[name="description"]'
    );

    if (metaDescriptionTag) {
      metaDescriptionTag.content = metaDescription;
    } else {
      // Create meta description if it doesn't exist
      const newMeta = document.createElement("meta");
      newMeta.name = "description";
      newMeta.content = metaDescription;
      document.head.appendChild(newMeta);
    }
  }, [pathname]);

  // Add error boundary
  if (isLoading) {
    return <LoadingScreen progress={loadingProgress} />;
  }

  return (
    <Routes>
      <Route path="/" element={<LandingPageDesktopSporg />} />
      {/* Add a fallback route */}
      <Route path="*" element={<LandingPageDesktopSporg />} />
    </Routes>
  );
}

export default App;
