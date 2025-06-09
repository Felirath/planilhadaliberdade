
'use client';
import React, { useEffect, useRef } from 'react';

interface VSLPlayerProps {
  videoId: string;
  playerScriptSrc: string;
  thumbnailSrc: string;
}

const VSLPlayer: React.FC<VSLPlayerProps> = ({ videoId, playerScriptSrc, thumbnailSrc }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scriptLoadedRef = useRef(false);

  useEffect(() => {
    if (typeof window === 'undefined' || !containerRef.current || scriptLoadedRef.current) {
      return;
    }

    const existingVidContainer = document.getElementById(`vid_${videoId}`);
    if (existingVidContainer) {
      // If the container is there, assume the script might also be there or will be loaded
      // This handles cases like fast refresh in development
      return;
    }

    const vidContainer = document.createElement('div');
    vidContainer.id = `vid_${videoId}`;
    vidContainer.style.position = 'relative';
    vidContainer.style.width = '100%';
    vidContainer.style.padding = '177.77777777777777% 0 0 0';

    const thumbImg = document.createElement('img');
    thumbImg.id = `thumb_${videoId}`;
    thumbImg.src = thumbnailSrc;
    thumbImg.style.position = 'absolute';
    thumbImg.style.top = '0';
    thumbImg.style.left = '0';
    thumbImg.style.width = '100%';
    thumbImg.style.height = '100%';
    thumbImg.style.objectFit = 'cover';
    thumbImg.style.display = 'block';
    thumbImg.alt = 'thumbnail';

    const backdropDiv = document.createElement('div');
    backdropDiv.id = `backdrop_${videoId}`;
    backdropDiv.style.webkitBackdropFilter = 'blur(5px)';
    backdropDiv.style.backdropFilter = 'blur(5px)';
    backdropDiv.style.position = 'absolute';
    backdropDiv.style.top = '0';
    backdropDiv.style.height = '100%';
    backdropDiv.style.width = '100%';

    vidContainer.appendChild(thumbImg);
    vidContainer.appendChild(backdropDiv);
    
    containerRef.current.appendChild(vidContainer);

    // Check if the script tag itself already exists
    const existingScriptTag = document.getElementById(`scr_${videoId}`);
    if (existingScriptTag) {
      scriptLoadedRef.current = true;
      return;
    }

    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.id = `scr_${videoId}`;
    script.src = playerScriptSrc;
    script.async = true;
    document.head.appendChild(script);
    scriptLoadedRef.current = true;

    // No specific cleanup for this script type, as it self-initializes.
    // Removing the script tag after it runs doesn't usually stop embedded players.
  }, [videoId, playerScriptSrc, thumbnailSrc]);

  return <div ref={containerRef} className="w-full"></div>;
};

export default VSLPlayer;
