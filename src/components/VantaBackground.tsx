import { useState, useEffect, useRef } from "react";
import * as THREE from "three";

// Ignore type checking for the 'vanta/dist/vanta.net.min' module
//@ts-ignore
import NET from "vanta/dist/vanta.net.min";


export default function AnimBg({ children, className }: { children: string, className: string }) {
  const [vantaEffect, setVantaEffect] = useState<any>(null);
  const myRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: myRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x220000,
          backgroundColor: 'white',
          spacing: 23.0,
          points: 5.0,
          maxDistance: 30.0,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div className={className} ref={myRef}>
      {children}
    </div>
  );
}
