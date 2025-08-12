import React, { useReducer } from 'react';

// 리듀서 함수 생성, 새로운 상태를 반환하는 함수
function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value,
  };
}

const InfoUseReducer = () => {
  const [state, dispatch] = useReducer(reducer, {
    name: '',
    email: '',
  });

  const { name, email } = state;

  const onChange = (e) => {
    dispatch(e.target);
  };

  return (
    <div>
      <div>
        <h2>useReducer 2</h2>
        <input name="name" value={name} onChange={onChange} type="text" />
        <input name="email" value={email} onChange={onChange} type="text" />
      </div>
      <div>
        <b>이름 : </b> {name}
        <b>이메일 : </b> {email}
      </div>
    </div>
  );
};

export default InfoUseReducer;

// Gemini 주석 추가 시작
// 이 파일은 `InfoUseReducer` 컴포넌트로, 여러 개의 input 상태를 `useReducer` Hook 하나로 관리하는 예제입니다.
// `useState`를 여러 번 사용하는 대신 `useReducer`를 사용하면 관련 상태 로직을 하나로 묶어 더 깔끔하게 관리할 수 있습니다.
//
// 1. `reducer` 함수:
//    - `function reducer(state, action) { ... }`
//    - 이 `reducer` 함수는 `action` 객체에 어떤 `type`이 있는지 확인하는 대신, `action` 객체 자체를 사용하여 상태를 업데이트합니다.
//    - `...state`: 기존의 상태 객체(예: `{ name: '', email: '' }`)를 복사합니다.
//    - `[action.name]: action.value`: `action` 객체의 `name` 속성을 키로, `value` 속성을 값으로 하여 상태를 업데이트합니다.
//      (예: `action`이 `{ name: 'name', value: '홍길동' }` 이면, `state`의 `name` 필드가 '홍길동'으로 변경됩니다.)
//    - 이 방식은 input의 `name` 속성과 상태의 키를 일치시켜 코드를 매우 간결하게 만듭니다.
//
// 2. `useReducer` Hook 사용:
//    - `const [state, dispatch] = useReducer(reducer, { name: '', email: '' });`
//    - `useReducer`를 호출하여 `name`과 `email`을 필드로 갖는 객체를 초기 상태로 설정합니다.
//    - `state`: 현재 상태 객체 (예: `{ name: '...', email: '...' }`).
//    - `dispatch`: `reducer`에게 상태 업데이트를 요청하는 함수.
//
// 3. `const { name, email } = state;`
//    - `state` 객체에서 `name`과 `email` 값을 추출하여 렌더링 부분에서 쉽게 사용할 수 있도록 합니다.
//
// 4. `const onChange = (e) => { dispatch(e.target); };`
//    - input의 `onChange` 이벤트가 발생할 때 실행될 핸들러입니다.
//    - 이벤트 객체 `e`에서 `e.target` (이벤트가 발생한 DOM 요소, 즉 `<input>` 태그)을 `dispatch` 함수에 그대로 전달합니다.
//    - `e.target` 객체에는 `name`과 `value` 속성이 포함되어 있으므로, `reducer` 함수는 이를 `action`으로 받아 상태를 올바르게 업데이트할 수 있습니다.
//
// 5. 렌더링 부분:
//    - `<input name="name" ... onChange={onChange} />`: `name` input에 `onChange` 핸들러를 연결합니다.
//    - `<input name="email" ... onChange={onChange} />`: `email` input에도 동일한 `onChange` 핸들러를 연결합니다.
//    - `reducer`가 `action.name`을 사용하기 때문에, 하나의 `onChange` 함수로 여러 input의 상태를 동시에 관리할 수 있습니다.
// Gemini 주석 추가 끝