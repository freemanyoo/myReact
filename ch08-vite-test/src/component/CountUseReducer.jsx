import React, { useReducer } from 'react';

// 리듀서 함수 정의
function reducer(state, action) {
  switch (
    action.type // action.type 에 따라서, 다른 작업 수행
  ) {
    case 'INCREMENT': // 행위 2개 밖에 없음, 증가, 감소
      return { value: state.value + 1 };
    case 'DECREMENT': //
      return { value: state.value - 1 };
    default:
      return state;
  }
}

const CountUseReducer = () => {
  const [state, dispatch] = useReducer(reducer, { value: 0 });
  return (
    <div>
      <p>
        현재 값 : <b>{state.value}</b>
      </p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+1</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-1</button>
    </div>
  );
};

export default CountUseReducer;

// Gemini 주석 추가 시작
// 이 파일은 `CountUseReducer` 컴포넌트로, `useReducer` Hook을 사용한 가장 기본적인 카운터 예제입니다.
// `useReducer`는 `useState`의 대체 함수로, 복잡한 상태 관리 로직을 컴포넌트 밖으로 분리할 수 있게 해줍니다.
//
// `useReducer`는 주로 세 가지 부분으로 구성됩니다: `reducer`, `dispatch`, `state`.
//
// 1. `reducer` 함수:
//    - `function reducer(state, action) { ... }`
//    - 현재 상태(`state`)와 업데이트를 위한 정보가 담긴 `action` 객체를 인자로 받아서,
//      새로운 상태를 반환하는 함수입니다.
//    - `switch (action.type)` 문을 사용하여 `action`의 `type`에 따라 다른 상태 업데이트 로직을 수행합니다.
//      - `case 'INCREMENT'`: 현재 `state.value`에 1을 더한 새로운 상태 객체 `{ value: state.value + 1 }`을 반환합니다.
//      - `case 'DECREMENT'`: 현재 `state.value`에서 1을 뺀 새로운 상태 객체 `{ value: state.value - 1 }`을 반환합니다.
//      - `default`: 정의되지 않은 `action.type`이 들어오면 기존 `state`를 그대로 반환합니다.
//
// 2. `useReducer` Hook 사용:
//    - `const [state, dispatch] = useReducer(reducer, { value: 0 });`
//    - `useReducer`를 호출하여 `state`와 `dispatch` 함수를 반환받습니다.
//    - 첫 번째 인자 `reducer`: 상태를 업데이트하는 로직이 담긴 `reducer` 함수를 전달합니다.
//    - 두 번째 인자 `{ value: 0 }`: 상태의 초기값입니다. 여기서는 `value`가 0인 객체입니다.
//    - `state`: 현재 상태를 가리킵니다. (초기값: `{ value: 0 }`)
//    - `dispatch`: `action` 객체를 `reducer` 함수에 전달하여 상태 업데이트를 요청하는 함수입니다.
//
// 3. `dispatch` 함수 호출:
//    - `<button onClick={() => dispatch({ type: 'INCREMENT' })}>+1</button>`
//    - `+1` 버튼을 클릭하면 `dispatch` 함수가 호출됩니다.
//    - `dispatch`에 `{ type: 'INCREMENT' }` 라는 `action` 객체를 전달합니다.
//    - 이 `action` 객체는 `reducer` 함수로 전달되어, `switch` 문에서 `case 'INCREMENT'`에 해당하는 로직을 실행시킵니다.
//    - 결과적으로 `state`가 `{ value: 1 }`로 업데이트되고 컴포넌트가 리렌더링됩니다.
//    - `-1` 버튼도 동일한 방식으로 동작합니다.
//
// 이처럼 `useReducer`를 사용하면 상태 업데이트 로직을 컴포넌트 외부의 `reducer` 함수에서 관리하므로,
// 상태 관리 코드가 더 명확해지고 유지보수가 용이해지는 장점이 있습니다.
// Gemini 주석 추가 끝