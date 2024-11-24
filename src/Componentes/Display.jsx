import React from 'react';

const Display = ({ value }) => (
  <div className="display" aria-live="polite">
    {value}
  </div>
);

export default Display;
