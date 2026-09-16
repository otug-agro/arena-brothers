"use client";

import { useEffect, useRef, useState } from "react";

/** URLs das últimas publicações do @arenabrothersbt no Instagram */
const INSTAGRAM_POSTS = [
  "https://www.instagram.com/p/DJfQ2YPJlqQ/",
  "https://www.instagram.com/p/DJL1jzzJp1S/",
  "https://www.instagram.com/p/DI_nwCuJmYo/",
  "https://www.instagram.com/p/DIyLqyiJjk1/",
  "https://www.instagram.com/p/DIoFGI8pN4C/",
  "https://www.instagram.com/p/DIiw4HypJyR/",
];

const PROFILE_URL = "https://www.instagram.com/arenabrothersbt/";

export function InstagramFeed() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Load Instagram embed script
    const existing = document.querySelector(
      'script[src="https://www.instagram.com/embed.js"]'
    );
    if (!existing) {
      const script = document.createElement("script");
      script.src = "https://www.instagram.com/embed.js";
      script.async = true;
      script.onload = () => {
        (window as any).instgrm?.Embeds?.process();
        setLoaded(true);
      };
      document.body.appendChild(script);
    } else {
      // Script already loaded, just reprocess
      (window as any).instgrm?.Embeds?.process();
      setLoaded(true);
    }
  }, []);

  return (
    <div className="instagram-embed-feed" ref={containerRef}>
      <div className="instagram-embed-feed__grid">
        {INSTAGRAM_POSTS.map((url) => (
          <div className="instagram-embed-feed__item" key={url}>
            <blockquote
              className="instagram-media"
              data-instgrm-captioned={false}
              data-instgrm-permalink={url}
              data-instgrm-version="14"
              style={{
                background: "#FFF",
                border: 0,
                borderRadius: "12px",
                boxShadow: "none",
                margin: 0,
                maxWidth: "100%",
                minWidth: "100%",
                padding: 0,
                width: "100%",
              }}
            />
          </div>
        ))}
      </div>
      <div className="instagram-embed-feed__cta">
        <a
          href={PROFILE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="button button--dark"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
          </svg>
          Seguir @arenabrothersbt
        </a>
      </div>
    </div>
  );
}
