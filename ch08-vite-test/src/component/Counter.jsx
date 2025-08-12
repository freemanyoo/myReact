import React, { useState } from 'react';

const Counter = () => {
  const [value, setValue] = useState(0);
  return (
    <div>
      <p>
        현재 카운트 값: <b>{value}</b>
      </p>
      <button onClick={() => setValue(value + 1)}>+1</button>
      <button onClick={() => setValue(value - 1)}>-1</button>
    </div>
  );
};

export default Counter;

// Gemini 주석 추가 시작
// 이 파일은 `Counter` 컴포넌트로, `useState` Hook을 사용한 가장 기본적인 예제입니다.
// `useState`는 함수형 컴포넌트에서 동적인 상태(state)를 관리할 수 있게 해주는 React Hook입니다.
//
// 1. `import React, { useState } from 'react';`
//    - React 라이브러리에서 `useState` Hook을 가져옵니다.
//
// 2. `const [value, setValue] = useState(0);`
//    - `useState`를 호출하여 상태를 선언합니다.
//    - `useState`는 배열을 반환하며, 구조 분해 할당을 통해 두 개의 원소를 받습니다.
//      - `value`: 현재 상태 값입니다. `useState`의 인자로 전달된 `0`이 초기값으로 설정됩니다.
//      - `setValue`: 상태를 업데이트하는 함수(Setter 함수)입니다. 이 함수를 호출하면 `value`가 변경되고 컴포넌트가 리렌더링됩니다.
//
// 3. `return ( ... );`
//    - 컴포넌트가 렌더링할 JSX 코드입니다.
//    - `<p>현재 카운트 값: <b>{value}</b></p>`: 현재 `value` 상태를 화면에 표시합니다.
//
// 4. `<button onClick={() => setValue(value + 1)}>+1</button>`
//    - `+1` 버튼을 클릭하면 `onClick` 이벤트가 발생합니다.
//    - `setValue(value + 1)`가 호출되어 현재 `value`에 1을 더한 값으로 상태를 업데이트합니다.
//    - `setValue` 함수가 호출되면 React는 `Counter` 컴포넌트를 리렌더링하여 변경된 `value` 값을 화면에 반영합니다.
//
// 5. `<button onClick={() => setValue(value - 1)}>-1</button>`
//    - `-1` 버튼도 마찬가지로, 클릭 시 `setValue` 함수를 호출하여 `value`를 1 감소시킵니다.
// Gemini 주석 추가 끝