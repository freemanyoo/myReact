import React from 'react';
import LunchMatchListItem from './LunchMatchListItem.jsx';
import '../styles/LunchMatchList.scss';

const LunchMatchList = () => {
  return (
    <div>
      <LunchMatchListItem />
      <LunchMatchListItem />
      <LunchMatchListItem />
    </div>
  );
};

export default LunchMatchList;
