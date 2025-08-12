import { useReducer } from 'react';

//useReducer Hook  , 기능을 이용해서, 커스텀 훅스를 만들기.
//1 리듀서 함수, : 상태 관리하는 도구.
function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value,
  };
}

export default function useInputs(initialForm) {
  const [state, dispatch] = useReducer(reducer, initialForm);
  const onChange = (e) => {
    dispatch(e.target);
  };
  return [state, onChange];
}

// Gemini 주석 추가 시작
// 이 파일은 `useInputs`라는 커스텀 Hook을 정의합니다.
// 커스텀 Hook은 여러 컴포넌트에서 반복적으로 사용되는 로직을 재사용하기 위한 JavaScript 함수입니다.
// 이 Hook은 여러 개의 input 상태를 효율적으로 관리하기 위해 `useReducer`를 사용합니다.
//
// 1. `reducer` 함수:
//    - 현재 상태(`state`)와 액션(`action`) 객체를 받아 새로운 상태를 반환하는 순수 함수입니다.
//    - `action` 객체는 주로 이벤트 핸들러에서 `dispatch` 함수를 통해 전달됩니다. 여기서는 `e.target`이 `action`이 됩니다.
//    - `...state`는 spread 문법으로, 기존의 상태 객체를 복사합니다.
//    - `[action.name]: action.value`는 `action` 객체의 `name` 속성을 키로, `value` 속성을 값으로 하여 상태를 업데이트합니다.
//      (예: `action`이 `{ name: 'username', value: 'test' }` 라면, `state`의 `username` 필드가 'test'로 변경됩니다.)
//
// 2. `useInputs` 함수:
//    - 이 Hook은 `initialForm`이라는 초기 상태 객체를 인자로 받습니다.
//    - `useReducer(reducer, initialForm)`을 호출하여 `state`와 `dispatch` 함수를 반환받습니다.
//      - `state`: 현재 폼의 상태를 담고 있는 객체입니다.
//      - `dispatch`: `reducer` 함수를 실행시켜 상태를 업데이트하는 함수입니다.
//    - `onChange` 함수는 input 요소의 `onChange` 이벤트가 발생했을 때 실행될 이벤트 핸들러입니다.
//      - 이벤트 객체 `e`에서 `e.target` (이벤트가 발생한 DOM 요소)을 `dispatch` 함수에 전달합니다.
//      - 그러면 `reducer` 함수가 실행되어 해당 input의 `name`과 `value`에 맞게 상태가 업데이트됩니다.
//    - 마지막으로 `[state, onChange]` 배열을 반환합니다.
//      - `state`: 관리되고 있는 폼의 현재 상태 객체.
//      - `onChange`: input 요소에 바인딩할 이벤트 핸들러.
//      이 Hook을 사용하는 컴포넌트에서는 이 배열을 구조 분해 할당하여 편리하게 사용할 수 있습니다.
// Gemini 주석 추가 끝
