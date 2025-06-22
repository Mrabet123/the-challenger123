import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"
import './i18n';

// Function to initialize the app
function initApp() {
  const rootElement = document.getElementById("root")

  if (!rootElement) {
    console.error("Root element not found. Make sure there is a div with id='root' in your HTML.")
    return
  }

  const root = ReactDOM.createRoot(rootElement)

  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
}

// Wait for DOM to be ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initApp)
} else {
  // DOM is already ready
  initApp()
}
