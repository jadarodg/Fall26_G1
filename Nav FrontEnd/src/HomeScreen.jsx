import { useEffect, useRef, useState } from "react";
import "./home.css";

const ICONS = {
  map: (
    <>
      <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" />
      <path d="M9 3v15" />
      <path d="M15 6v15" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21l-4.3-4.3" />
    </>
  ),
  settings: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.7 1.7 0 0 0 .34 1.87l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.7 1.7 0 0 0-1.87-.34 1.7 1.7 0 0 0-1 1.55V21a2 2 0 1 1-4 0v-.09A1.7 1.7 0 0 0 9 19.36a1.7 1.7 0 0 0-1.87.34l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.7 1.7 0 0 0 4.64 15a1.7 1.7 0 0 0-1.55-1H3a2 2 0 1 1 0-4h.09A1.7 1.7 0 0 0 4.64 9a1.7 1.7 0 0 0-.34-1.87l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.7 1.7 0 0 0 9 4.64a1.7 1.7 0 0 0 1-1.55V3a2 2 0 1 1 4 0v.09a1.7 1.7 0 0 0 1 1.55 1.7 1.7 0 0 0 1.87-.34l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.7 1.7 0 0 0 19.36 9a1.7 1.7 0 0 0 1.55 1H21a2 2 0 1 1 0 4h-.09a1.7 1.7 0 0 0-1.55 1z" />
    </>
  ),
  bookmark: <path d="M6 3h12v18l-6-4-6 4V3z" />,
  chevron: <path d="M9 18l6-6-6-6" />,
};

function Icon({ name, size = 20, className }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      {ICONS[name]}
    </svg>
  );
}

// onNavigate(route) gets "building", "settings", "map" or "saved".
// Return true when the page exists; otherwise "Coming soon" shows.
export default function HomeScreen({ onNavigate }) {
  const [toast, setToast] = useState("");
  const timer = useRef();

  useEffect(() => () => clearTimeout(timer.current), []);

  function go(route) {
    const handled = onNavigate ? onNavigate(route) : false;
    if (!handled) {
      setToast("Coming soon");
      clearTimeout(timer.current);
      timer.current = setTimeout(() => setToast(""), 1800);
    }
  }

  return (
    <div className="screen">
      <header className="hero">
        <div className="hero-top">
          <span className="brand">ASU</span>
          <span className="hero-label">CAMPUS MAP</span>
        </div>
        <h1 className="hero-title">Navigate</h1>
        <p className="hero-tag">Your campus. Your way around.</p>
      </header>

      <main className="content">
        <section className="section">
          <h2 className="section-label">GET STARTED</h2>
          <button
            type="button"
            className="card card--primary"
            onClick={() => go("building")}
          >
            <span className="icon-tile">
              <Icon name="search" size={22} />
            </span>
            <span className="card-text">
              <span className="card-title">Find a Building</span>
              <span className="card-sub">Search by name or code, like BCB</span>
            </span>
            <Icon name="chevron" size={18} className="chevron" />
          </button>
        </section>

        <section className="section">
          <h2 className="section-label">MORE</h2>
          <div className="list">
            <button type="button" className="card" onClick={() => go("map")}>
              <Icon name="map" className="card-icon" />
              <span className="card-text">
                <span className="card-title">General Map</span>
                <span className="card-sub">Browse the full campus map</span>
              </span>
              <Icon name="chevron" size={18} className="chevron" />
            </button>
            <button
              type="button"
              className="card"
              onClick={() => go("settings")}
            >
              <Icon name="settings" className="card-icon" />
              <span className="card-text">
                <span className="card-title">Settings</span>
                <span className="card-sub">
                  Campus, accessible routes, alerts
                </span>
              </span>
              <Icon name="chevron" size={18} className="chevron" />
            </button>
          </div>
        </section>

        <p className="footer-note">ASU Campus Map &nbsp;·&nbsp; Version 1.0</p>
      </main>

      <nav className="tabbar" aria-label="Main">
        <button
          type="button"
          className="tab"
          aria-current="page"
          onClick={() => go("map")}
        >
          <Icon name="map" />
          <span>Map</span>
        </button>
        <button type="button" className="tab" onClick={() => go("saved")}>
          <Icon name="bookmark" />
          <span>Saved</span>
        </button>
        <button type="button" className="tab" onClick={() => go("settings")}>
          <Icon name="settings" />
          <span>Settings</span>
        </button>
      </nav>

      <div
        className={`toast${toast ? " is-visible" : ""}`}
        role="status"
        aria-live="polite"
      >
        {toast}
      </div>
    </div>
  );
}
