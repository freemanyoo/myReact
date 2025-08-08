import React, { useState } from "react";

const Say = () => {
  const [message, setMessage] = useState("");
  // useState의 정의
  // useState("") -> 초깃값을 빈 문자열로 할당.
  // 2개를 반환함, 1) 변수,message 2) 함수(세터) setMessage
  const onClickEnter = () => setMessage("안녕하세요");
  const onClickLeave = () => setMessage("안녕히 가세요");

  // 2번째 useState, 색깔 변경해보기.
  const [color, setColor] = useState("black");
  const onClickChageColorRed = () => setColor("red");
  const onClickChageColorBlue = () => setColor("blue");
  const onClickChageColorGreen = () => setColor("green");
  return (
    <>
      <div>
        <button onClick={onClickEnter}>입장</button>
        <button onClick={onClickLeave}>퇴장</button>
        <h1 style={{ color }}>{message}</h1>
        {/* 색을 변경하는 버튼을 클릭시, 위에 있는 message 글자 색을 변경하기. */}
        <button onClick={onClickChageColorRed}>빨간색</button>
        <button onClick={onClickChageColorBlue}>파란색</button>
        <button onClick={onClickChageColorGreen}>초록색</button>
      </div>
    </>
  );
};

export default Say;

// Gemini 주석 추가 시작
// 이 파일은 Say.jsx로, React의 함수형 컴포넌트입니다.
// `useState` Hook(함수)을 사용하여 컴포넌트의 상태를 관리합니다.
// `message` 상태는 텍스트 메시지를 관리하며, `setMessage` 함수로 업데이트됩니다. 초깃값은 빈 문자열("")입니다.
// `onClickEnter` 함수는 "입장" 버튼 클릭 시 `message`를 "안녕하세요"로 설정합니다.
// `onClickLeave` 함수는 "퇴장" 버튼 클릭 시 `message`를 "안녕히 가세요"로 설정합니다.
// `color` 상태는 텍스트의 색상을 관리하며, `setColor` 함수로 업데이트됩니다. 초깃값은 "black"입니다.
// `onClickChageColorRed`, `onClickChageColorBlue`, `onClickChageColorGreen` 함수들은 각각 해당 색상 버튼 클릭 시 `color` 상태를 업데이트합니다.
// `h1` 태그는 `message` 상태를 표시하며, `style` 속성을 통해 `color` 상태에 따라 글자 색상이 변경됩니다.
// `useState`를 통해 상태가 변경되면 컴포넌트가 자동으로 리렌더링되어 화면에 최신 상태가 반영됩니다.
// Gemini 주석 추가 끝
