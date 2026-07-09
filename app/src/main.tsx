import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { AppProvider } from "./context/AppContext.tsx";
import { GoogleOAuthProvider } from "@react-oauth/google";

// export const server = "https://ai-career-backend-q7xn.onrender.com";
export const server = "http://localhost:5000";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppProvider>
      <GoogleOAuthProvider clientId="682713754426-gmltbc3q4rn99gf7et43kpjjdqqto3e9.apps.googleusercontent.com">
        <App />
      </GoogleOAuthProvider>
    </AppProvider>
  </StrictMode>
);