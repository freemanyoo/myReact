// import React, { useEffect, useState } from 'react';
// 커스텀 훅스 불러오기. 순서1
import useInputs from './useInputs.jsx';

const InfoCustomHookSample = () => {
  // 변경 전, useState 형식
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');

  // 순서2
  // 변경 후, 커스텀 훅스를 이용한 같은 기능 구현.
  const [state, onChange] = useInputs({
    name: '',
    email: '',
  });

  // 순서3
  const { name, email } = state;

  //화면에 input 태그에서 값이 변경 할 때 마다, state 의 값을 변경 해주는
  // onChangeXXX , 이벤트 핸들러 추가하기.

  // 변경 전,
  // const onChangeName = (e) => {
  //   setName(e.target.value);
  // };
  //
  // const onChangeEmail = (e) => {
  //   setEmail(e.target.value);
  // };

  return (
    <div>
      <div>
        {/*순서4 적용, */}
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

export default InfoCustomHookSample;

// Gemini 주석 추가 시작
// 이 파일은 `InfoCustomHookSample` 컴포넌트로, 앞서 정의한 `useInputs` 커스텀 Hook의 사용 예시를 보여줍니다.
//
// 1. `import useInputs from './useInputs.jsx';`
//    - 다른 파일에서 정의한 `useInputs` 커스텀 Hook을 가져옵니다.
//
// 2. `const [state, onChange] = useInputs({ name: '', email: '' });`
//    - `useInputs` Hook을 호출합니다.
//    - 인자로 `{ name: '', email: '' }` 라는 초기 상태 객체를 전달합니다.
//    - `useInputs`는 `[state, onChange]` 형태의 배열을 반환하므로, 이를 구조 분해 할당하여 `state`와 `onChange`를 받습니다.
//      - `state`: 현재 폼의 상태를 담고 있는 객체 (예: `{ name: '', email: '' }`).
//      - `onChange`: input의 `onChange` 이벤트에 연결할 이벤트 핸들러 함수.
//    - 이 한 줄의 코드는 여러 개의 `useState`와 `onChange` 핸들러를 선언하는 것을 대체하여 코드를 간결하게 만듭니다.
//
// 3. `const { name, email } = state;`
//    - `state` 객체에서 `name`과 `email` 값을 추출하여 렌더링 부분에서 쉽게 사용할 수 있도록 합니다.
//
// 4. `<input name="name" value={name} onChange={onChange} ... />`
//    - `input` 태그에 `useInputs` Hook에서 반환된 값들을 바인딩합니다.
//    - `name="name"`: `useInputs`의 `reducer`가 어떤 필드를 업데이트할지 구분하는 데 사용됩니다.
//    - `value={name}`: `state` 객체의 `name` 값을 input의 값으로 설정합니다.
//    - `onChange={onChange}`: input의 값이 변경될 때마다 `useInputs`에서 제공하는 `onChange` 핸들러를 호출하여
//      `state`를 자동으로 업데이트합니다.
//
// 이처럼 커스텀 Hook을 사용하면 컴포넌트의 로직을 분리하고 재사용성을 높여 코드의 가독성과 유지보수성을 향상시킬 수 있습니다.
// Gemini 주석 추가 끝