import React, { useEffect, useState } from 'react';
import ClipLoader from "react-spinners/DotLoader";
import Welcome from './Welcome';

function Loader() {
  const [loading, setloading] = useState(false);

  useEffect(() => {
    setloading(true);

    setTimeout(() => {
      setloading(false);
    }, 3000);
  }, []);

  // Define the CSS override for the loader
  const override = `
    display: block;
    margin: 0 auto;
  `;

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      {loading ? (
        <ClipLoader
          color={"#DC143C"}
          css={override} // Use css instead of cssOverride
          size={100}
          aria-label="Loading Spinner"
          loading={loading}
        />
      ) : (
        <Welcome/>
      )}
    </div>
  );
}

export default Loader;
