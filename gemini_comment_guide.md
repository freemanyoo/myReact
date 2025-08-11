## 주석 추가 방식

Gemini는 이제 각 파일에 주석을 추가할 때, 주석 블록의 시작과 끝을 나타내는 특정 마커를 사용합니다.

- **주석 시작 마커:** `// Gemini 주석 추가 시작`
- **주석 끝 마커:** `// Gemini 주석 추가 끝`

이 마커들을 기준으로 Gemini는 기존 주석 블록의 위치를 정확하게 파악하고, 새로운 주석을 추가할 때 항상 `// Gemini 주석 추가 끝` 마커 바로 위에 추가하게 됩니다. 이렇게 함으로써 본문 내용이 변경되어도 주석의 위치를 일관되게 유지할 수 있습니다.

## 추가 설명

- **유연성:** 본문 내용이 추가되거나 삭제되어도 Gemini는 마커를 통해 주석 블록의 위치를 찾아내므로, 사용자는 코드 수정에 대한 제약 없이 자유롭게 작업할 수 있습니다.
- **확장성:** 앞으로 다른 파일에 주석을 추가하게 될 경우, 이 `gemini.md` 파일에 해당 파일명과 주석 블록의 위치에 대한 설명이 추가될 예정입니다.
- **수동 편집 주의:** `// Gemini 주석 추가 시작`과 `// Gemini 주석 추가 끝` 마커는 Gemini가 주석 위치를 파악하는 데 사용되므로, 이 마커들을 수동으로 편집하거나 삭제하지 않는 것이 좋습니다. 만약 수동으로 변경해야 할 경우, Gemini에게 알려주시면 해당 변경 사항을 인지하고 작업을 계속할 수 있도록 업데이트하겠습니다.
- **마커가 없을 경우:** 만약 어떤 파일에서 `// Gemini 주석 추가 시작` 또는 `// Gemini 주석 추가 끝` 마커가 발견되지 않는다면, Gemini는 해당 파일에 대한 주석이 처음 추가되는 것으로 간주하고 파일의 가장 하단에 새로운 주석 블록을 생성하여 추가할 것입니다.

예시)
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
{/_ 색을 변경하는 버튼을 클릭시, 위에 있는 message 글자 색을 변경하기. _/}
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
