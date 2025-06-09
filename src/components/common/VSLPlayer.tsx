'use client';
import React, { useEffect, useRef } from 'react';

interface VSLPlayerProps {
  scriptSrc: string;
  dataId: string; 
}

const VSLPlayer: React.FC<VSLPlayerProps> = ({ scriptSrc, dataId }) => {
  const scriptLoadedRef = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined' || scriptLoadedRef.current || !containerRef.current) {
      return;
    }

    const existingScript = document.querySelector(`script[data-id="${dataId}"]`);
    if (existingScript) {
      // Ensure the div structure is present if script is already loaded
      if (!document.getElementById(`ifr_${dataId}_wrapper`) && containerRef.current) {
        const divWrapper = document.createElement('div');
        divWrapper.id = `ifr_${dataId}_wrapper`;
        divWrapper.style.margin = "0 auto";
        divWrapper.style.width = "100%";
        
        const divAspect = document.createElement('div');
        divAspect.style.padding = "177.77777777777777% 0 0 0";
        divAspect.style.position = "relative";
        divAspect.id = `ifr_${dataId}_aspect`;
        
        divWrapper.appendChild(divAspect);
        containerRef.current.appendChild(divWrapper);
      }
      return;
    }
    
    // Create the wrapper div structure that the script expects
    if (containerRef.current && !document.getElementById(`ifr_${dataId}_wrapper`)) {
      const divWrapper = document.createElement('div');
      divWrapper.id = `ifr_${dataId}_wrapper`;
      divWrapper.style.margin = "0 auto";
      divWrapper.style.width = "100%";
      
      const divAspect = document.createElement('div');
      divAspect.style.padding = "177.77777777777777% 0 0 0";
      divAspect.style.position = "relative";
      divAspect.id = `ifr_${dataId}_aspect`; // The script creates the iframe inside this
      
      divWrapper.appendChild(divAspect);
      containerRef.current.appendChild(divWrapper);
    }

    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = scriptSrc;
    script.setAttribute('data-id', dataId);
    script.async = true;
    document.head.appendChild(script);
    scriptLoadedRef.current = true;

    return () => {
      // Script cleanup is optional and can be tricky with third-party SDKs
      // For instance, removing the script tag doesn't stop its execution if already run
      // And the SDK might have its own cleanup methods or expectations
    };
  }, [scriptSrc, dataId]);

  return <div ref={containerRef} className="w-full"></div>;
};

export default VSLPlayer;
