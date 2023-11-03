import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";

const Index = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1150);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    if (loading) {
      setLoading(false);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {loading ? (
        <p>Loading</p>
      ) : (
        <>
          <Nav isMobile={isMobile} />
        </>
      )}
    </>
  );
};

export default Index;
