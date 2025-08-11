import React, { useState } from "react";

const IterationSample = () => {
  //방법1, 기본 배열 , 컴포넌트 반복
  //   const names = ["사과", "포도", "바나나", "딸기"];
  //   const fruitList = names.map((name, index) => <li key={index}>{name}</li>);

  // 방법2, useState , 상태 관리로 반복 구현.
  const [names, setNames] = useState([
    { id: 1, text: "사과" }, // 객체 자리에, 백엔드에서 넘겨 받은 데이터 타입, MemberDTO 를 요소로 가지는 리스트 형식.
    { id: 2, text: "포도" },
    { id: 3, text: "바나나" },
    { id: 4, text: "딸기" },
  ]);

  const [InputText, setInputText] = useState("");
  const [nextId, setNextId] = useState(5);

  // 데이터 추가 기능.
  const onChange = (e) => setInputText(e.target.value);

  const onClick = () => {
    // 기존 배열에(names), 추가된 id, text 연결해서, 새로운 배열(nextNames)을 생성.
    const nextNames = names.concat({
      id: nextId,
      text: InputText,
    });
    setNextId(nextId + 1);
    setNames(nextNames);
    setInputText("");
  };

  // 제거하기. 순서1
  const onRemove = (id) => {
    //예시 삭제 할 id 4 번
    // filter 함수는 , 전체 요소를 순회해서, 참인 결과인 요소들만으로 구성을 하는 새로운 배열 생성.
    const nextNames = names.filter((name) => name.id !== id);
    //  nextNames => [{ id: 1, text: "사과" },  { id: 2, text: "포도" },  { id: 3, text: "바나나" },]
    setNames(nextNames);
  };

  const fruitList = names.map((name) => (
    // 제거하기. 순서2
    <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
      {name.text}
    </li>
  ));
  return (
    <>
      <input value={InputText} onChange={onChange} />
      <button onClick={onClick}>추가</button>
      <ul>{fruitList}</ul>
    </>
  );
};

export default IterationSample;

// Gemini 주석 추가 시작
// 이 파일은 React 함수형 컴포넌트에서 동적인 목록을 렌더링하고 관리하는 방법을 학습하기 위한 예제입니다.
//
// 주요 학습 내용:
// 1.  **`useState` Hook으로 배열 상태 관리:**
//     - `const [names, setNames] = useState([...])`를 사용하여 객체 배열을 상태로 관리합니다.
//     - 각 객체는 `id`와 `text` 속성을 가지며, `id`는 각 항목을 고유하게 식별하는 데 사용됩니다.
//
// 2.  **동적 목록 렌더링:**
//     - `names.map((name) => ...)`: `map` 함수를 사용하여 `names` 배열의 각 요소를 `<li>` 태그로 변환합니다.
//     - `key={name.id}`: React가 각 목록 항목을 효율적으로 업데이트하고 식별할 수 있도록 고유한 `key` prop을 전달합니다.
//
// 3.  **새로운 항목 추가:**
//     - `inputText` 상태는 입력 필드의 값을 관리합니다.
//     - `nextId` 상태는 새로운 항목에 할당할 고유 `id`를 관리합니다.
//     - `onClick` 핸들러에서 `names.concat()` 메서드를 사용하여 기존 배열에 새로운 객체를 추가한 새로운 배열을 생성하고, 이를 `setNames`로 상태를 업데이트합니다. `push` 대신 `concat`을 사용하는 이유는 React에서 상태의 불변성을 유지하기 위함입니다.
//
// 4.  **항목 제거:**
//     - `onRemove(id)` 핸들러는 특정 `id`를 가진 항목을 제거합니다.
//     - `names.filter((name) => name.id !== id)`: `filter` 함수를 사용하여 해당 `id`를 가진 항목을 제외한 새로운 배열을 생성하고, `setNames`로 상태를 업데이트합니다.
//     - `onDoubleClick` 이벤트를 사용하여 목록 항목을 더블클릭했을 때 `onRemove` 함수가 호출되도록 합니다.
//
// 5.  **제어 컴포넌트:**
//     - `<input>` 태그는 `value`를 `inputText` 상태와 연결하고, `onChange` 이벤트를 핸들러와 연결하여 사용자의 입력을 제어합니다.
//
// 이 예제는 데이터 배열을 동적으로 다루는 React의 핵심 개념인 상태 관리, 배열 메서드(`map`, `concat`, `filter`) 활용, 그리고 이벤트 핸들링을 종합적으로 보여줍니다.
// Gemini 주석 추가 끝