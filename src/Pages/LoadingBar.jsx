import React from 'react';

const LoadingBar = ({ progress }) => {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '6px',
      backgroundColor: '#e0e0e0',
      zIndex: 9999,
    }}>
      <div style={{
        width: `${progress}%`,
        height: '100%',
        backgroundColor: '#4caf50',
        transition: 'width 0.3s ease',
      }} />
    </div>
  );
};

export default LoadingBar;
