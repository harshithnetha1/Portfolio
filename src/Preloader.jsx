import React, { useEffect, useState } from 'react';
import './CSS/Preloader.css';

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000); // Adjust the delay time as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && (
        <div className="preloader">
          <video autoPlay muted playsInline className="preloader-video">
            <source src="N.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
    </>
  );
}
