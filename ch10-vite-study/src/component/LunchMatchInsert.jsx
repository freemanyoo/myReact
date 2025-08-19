import React from 'react';
// 검색창 : 리액트 아이콘 사용하기.
//https://react-icons.github.io/react-icons/
// 예시) mdadd, schedule
// 사용 방법, 1) 임포트 2) 사용하고 싶은 곳에 컴포넌트 위치 시키기
import { MdAdd } from 'react-icons/md';
import '../styles/LunchMatchInsert.scss';

const LunchMatchInsert = () => {
  return (
    <form className="LunchMatchInsert">
      <input placeholder="메뉴를 입력 하세요" />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default LunchMatchInsert;
