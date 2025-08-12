import React, { useRef } from 'react';

// useRef 를 이용해서, 렌더링에 영향을 주지 않는 값을 설정.

const RefSample = () => {
  const id = useRef(1);
  const setId = (n) => {
    id.current = n;
  };
  const printId = () => {
    console.log('id의 현재 값 : ', id.current);
  };
  return (
    <div>
      <h2>refSample , 화면 업데이트에 영향을 주지 않는 값 , useRef</h2>
      <h3>현재 값 : {id.current}</h3>
      <button onClick={() => setId(id.current + 1)}>ID 증가</button>
      <button onClick={printId}>콘솔 출력</button>
    </div>
  );
};

export default RefSample;

// Gemini 주석 추가 시작
// 이 파일은 `RefSample` 컴포넌트로, `useRef` Hook의 두 가지 주요 사용법 중 하나인
// **리렌더링을 발생시키지 않는 값을 관리**하는 예제를 보여줍니다.
//
// 1. `const id = useRef(1);`
//    - `useRef`를 호출하여 `ref` 객체를 생성합니다. 인자로 전달된 `1`은 `ref` 객체의 `.current` 속성의 초기값입니다.
//    - `id`는 `{ current: 1 }` 과 같은 형태의 객체가 됩니다.
//    - `useRef`로 생성된 `ref` 객체는 컴포넌트의 전체 생명주기 동안 동일한 객체를 유지합니다.
//
// 2. `ref` 값의 특징:
//    - `ref.current` 값을 변경해도 컴포넌트가 리렌더링되지 않습니다.
//      (반면, `useState`의 `setState` 함수를 호출하면 항상 리렌더링이 발생합니다.)
//    - 컴포넌트가 리렌더링되더라도 `ref.current` 값은 초기화되지 않고 유지됩니다.
//
// 3. `const setId = (n) => { id.current = n; };`
//    - `id.current` 값을 인자로 받은 `n`으로 변경하는 함수입니다.
//    - 이 함수가 호출되어 `id.current` 값이 바뀌어도 화면은 다시 그려지지 않습니다.
//
// 4. `const printId = () => { console.log('id의 현재 값 : ', id.current); };`
//    - 현재 `id.current` 값을 콘솔에 출력하는 함수입니다.
//
// 5. 렌더링 부분:
//    - `<h3>현재 값 : {id.current}</h3>`: 화면에 현재 `id.current` 값을 표시합니다.
//      **중요:** `ID 증가` 버튼을 클릭하여 `id.current` 값이 변경되어도 이 부분은 업데이트되지 않습니다.
//      `useRef` 값의 변경은 리렌더링을 유발하지 않기 때문입니다.
//      (만약 다른 이유로 컴포넌트가 리렌더링된다면, 그때는 변경된 `id.current` 값이 화면에 반영됩니다.)
//    - `<button onClick={() => setId(id.current + 1)}>ID 증가</button>`: 버튼 클릭 시 `id.current` 값을 1 증가시킵니다.
//    - `<button onClick={printId}>콘솔 출력</button>`: 버튼 클릭 시 현재 `id.current` 값을 콘솔에서 확인할 수 있습니다.
//      화면에는 변화가 없지만, 콘솔에는 증가된 값이 정상적으로 출력되는 것을 통해 `ref` 값이 실제로 변경되었음을 알 수 있습니다.
//
// 이처럼 `useRef`는 렌더링과 관련 없는 값(예: 타이머 ID, 소켓 연결 등)을 관리하거나,
// 리렌더링 없이 값을 계속 추적하고 싶을 때 유용하게 사용됩니다.
// Gemini 주석 추가 끝