import React from 'react';
import "./styles/Art.css"

function Art() {
  return (
    <div className="Art">
      <h1>bats_022</h1>
      <div style={{ width: '100%', height: '1200px', overflow: 'hidden', border: '1px solid #ddd', borderRadius: '10px' }}>
        <iframe 
          title="bats_022"
          src="https://www.instagram.com/bats_022/embed"
          width="100%" 
          height="10000" 
          frameBorder="0" 
          scrolling="no" 
          allowTransparency="true" 
          allow="encrypted-media"
        ></iframe>
      </div>
    </div>
  );
}

export default Art;
