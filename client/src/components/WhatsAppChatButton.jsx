import React from "react";
import { useLocation } from "react-router-dom";

const WhatsAppChatButton = () => {
  const location = useLocation();

  const hiddenRoutes = ["/seller", "/login"];
  const shouldHide = hiddenRoutes.some((path) =>
    location.pathname.startsWith(path)
  );

  if (shouldHide) return null;

  return (
    <a
      href="https://wa.me/919510544723?text=Hi%20Juicy%20and%20Crazy%2C%20I%20need%20some%20help%20with%20my%20order."
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: 999,
        backgroundColor: "#25D366",
        color: "#fff",
        borderRadius: "50%",
        width: "56px",
        height: "56px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
      }}
      title="Chat with us on WhatsApp"
    >
      <img
        src="https://img.icons8.com/ios-filled/50/ffffff/whatsapp.png"
        alt="WhatsApp"
        style={{ width: "28px", height: "28px" }}
      />
    </a>
  );
};

export default WhatsAppChatButton;
