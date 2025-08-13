import React from 'react';
import '../styles/LunchMatchTemplate.scss';

const LunchMatchTemplate = ({ children }) => {
  return (
    <div className="LunchMatchTemplate">
      <div className="app-title">식후감</div>
      <div className="content">{children}</div>
    </div>
  );
};

export default LunchMatchTemplate;
