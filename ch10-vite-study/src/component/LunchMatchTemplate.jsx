import React from 'react';
import '../styles/LunchMatchTemplate.scss';
import { MdFoodBank } from 'react-icons/md';

const LunchMatchTemplate = ({ children }) => {
  return (
    <div className="LunchMatchTemplate">
      <div className="app-title">
        식후감
        <MdFoodBank />
      </div>
      <div className="content">{children}</div>
    </div>
  );
};

export default LunchMatchTemplate;
