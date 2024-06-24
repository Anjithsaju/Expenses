import React from 'react';

const MyComponent: React.FC = () => {
  const handleResetClick = () => {
    window.location.replace("reset.html");
  };

  return (
    <a
      className="btn btn-primary"
      style={{ border: "none", margin: "20px" }}
      onClick={handleResetClick}
      role="button"
      href="reset.html"
    >
      Reset
    </a>
  );
};

export default MyComponent;
