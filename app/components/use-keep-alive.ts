"use client";

import { useEffect, useRef } from "react";

/**
 * Plays a silent audio loop to prevent iOS Safari from suspending the tab.
 * This keeps setInterval/setTimeout running when the screen is locked
 * or the user switches to another app.
 *
 * Call with `active = true` during training sessions.
 */
export function useKeepAlive(active: boolean) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (!active) {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
      return;
    }

    // Create audio element playing silent file in loop
    const audio = new Audio("/silence.wav");
    audio.loop = true;
    audio.volume = 0.01; // near-silent but not 0 (some browsers ignore volume=0)
    audioRef.current = audio;

    // iOS requires user interaction to start audio — we attach to first touch
    const startAudio = () => {
      audio.play().catch(() => {});
      document.removeEventListener("touchstart", startAudio);
      document.removeEventListener("click", startAudio);
    };

    // Try to play immediately (works if user already interacted)
    audio.play().catch(() => {
      // If autoplay blocked, wait for user interaction
      document.addEventListener("touchstart", startAudio, { once: true });
      document.addEventListener("click", startAudio, { once: true });
    });

    return () => {
      audio.pause();
      audio.src = "";
      audioRef.current = null;
      document.removeEventListener("touchstart", startAudio);
      document.removeEventListener("click", startAudio);
    };
  }, [active]);
}
