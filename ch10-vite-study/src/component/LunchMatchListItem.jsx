import React from 'react';
import { MdCheckCircleOutline, MdClose } from 'react-icons/md';
import '../styles/LunchMatchListItem.scss';

const LunchMatchListItem = () => {
  return (
    <div className="LunchMatchListItem">
      <div className="checkbox">
        <MdCheckCircleOutline />
      </div>
      <div className="menu">메뉴</div>
      <div className="remove">
        {' '}
        <MdClose />
      </div>
    </div>
  );
};

export default LunchMatchListItem;
