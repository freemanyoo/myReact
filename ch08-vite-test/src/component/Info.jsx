import React, { useState, useEffect } from 'react';

const Info = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  // useEffect : 리액트 컴포넌트가 렌더링 될 때마다 특정 작업을 수행하도록 설정 할 수 있는 Hook
  // useEffect(함수)
  // useEffect(함수, deps)
  // deps : 의존성 배열, 배열 안의 값이 변경 될 때만 함수를 실행.
  // deps 에 빈 배열을 넣으면, 최초 렌더링 될 때만 실행.
  // deps 에 아무것도 넣지 않으면, 렌더링 될 때마다 실행.
  // deps 에 특정 값을 넣으면, 그 값이 변경 될 때만 실행.

  // 1. 렌더링 될 때마다 실행.
  useEffect(() => {
    console.log('렌더링이 완료되었습니다.');
    console.log({ name, email });
  });

  // 2. 마운트 될 때만 실행.
  // useEffect(() => {
  //   console.log('마운트 될 때만 실행됩니다.');
  // }, []);

  // 3. 특정 값이 변경 될 때만 실행.
  // useEffect(() => {
  //   console.log('name 값이 변경 될 때만 실행됩니다.');
  // }, [name]);

  // 4. 클린업 함수, 언마운트 될 때 실행.
  // useEffect(() => {
  //   console.log('effect');
  //   return () => {
  //     console.log('cleanup');
  //   };
  // }, []);

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName} type="text" />
        <input value={email} onChange={onChangeEmail} type="text" />
      </div>
      <div>
        <b>이름 : </b> {name}
        <b>이메일 : </b> {email}
      </div>
    </div>
  );
};

export default Info;

// Gemini 주석 추가 시작
// 이 파일은 `Info` 컴포넌트로, `useState`와 `useEffect` Hook을 함께 사용하여
// 컴포넌트의 상태를 관리하고, 특정 라이프사이클 이벤트에 따라 작업을 수행하는 예제입니다.
//
// 1. `const [name, setName] = useState('');`
//    `const [email, setEmail] = useState('');`
//    - `useState`를 사용하여 `name`과 `email`이라는 두 개의 상태 변수를 선언합니다.
//    - 각각의 초기값은 빈 문자열(`''`)입니다.
//    - `setName`과 `setEmail`은 각 상태를 업데이트하는 함수입니다.
//
// 2. `useEffect` Hook:
//    - `useEffect`는 함수형 컴포넌트에서 사이드 이펙트(side effect)를 수행할 수 있게 해주는 Hook입니다.
//    - 사이드 이펙트란 데이터 가져오기, 구독 설정, DOM 직접 조작 등 컴포넌트의 렌더링 결과에 영향을 주지 않지만
//      컴포넌트 외부의 시스템과 상호작용하는 작업을 의미합니다.
//    - `useEffect`는 두 번째 인자로 의존성 배열(deps)을 받으며, 이 배열의 값에 따라 실행 시점이 달라집니다.
//
//    - **현재 코드 (`useEffect(() => { ... });`):**
//      - 의존성 배열이 생략되었으므로, 컴포넌트가 **렌더링될 때마다** (초기 렌더링 포함) `useEffect` 내부의 함수가 실행됩니다.
//      - `console.log({ name, email });`을 통해 `name`이나 `email` 값이 변경되어 컴포넌트가 리렌더링될 때마다
//        현재 상태 값이 콘솔에 출력되는 것을 확인할 수 있습니다.
//
//    - **주석 처리된 `useEffect` 예시:**
//      - `useEffect(() => { ... }, []);`: 의존성 배열이 빈 배열(`[]`)인 경우, 컴포넌트가 **마운트될 때(처음 화면에 나타날 때) 한 번만** 실행됩니다.
//      - `useEffect(() => { ... }, [name]);`: 의존성 배열에 `name`이 포함된 경우, `name` 값이 **변경될 때만** 실행됩니다.
//      - `useEffect(() => { ... }, []);` (클린업 함수 포함): `return` 문 안에 함수를 반환하면, 이 함수는 컴포넌트가 **언마운트될 때(화면에서 사라질 때)** 실행됩니다. 이를 클린업(cleanup) 함수라고 하며, 구독 해제, 타이머 정리 등 뒷정리 작업에 유용합니다.
//
// 3. `onChangeName` 및 `onChangeEmail` 함수:
//    - input 필드의 `onChange` 이벤트에 연결된 핸들러 함수입니다.
//    - `e.target.value`를 통해 input에 입력된 현재 값을 가져와 `setName` 또는 `setEmail` 함수를 호출하여 해당 상태를 업데이트합니다.
//    - 상태가 업데이트되면 컴포넌트가 리렌더링되고, 이에 따라 `useEffect`도 다시 실행됩니다.
//
// 4. 렌더링 부분:
//    - `<input value={name} onChange={onChangeName} />`: `name` 상태와 `onChangeName` 핸들러를 연결합니다.
//    - `<input value={email} onChange={onChangeEmail} />`: `email` 상태와 `onChangeEmail` 핸들러를 연결합니다.
//    - `<b>이름 : </b> {name}` 및 `<b>이메일 : </b> {email}`: 현재 `name`과 `email` 상태 값을 화면에 표시합니다.
// Gemini 주석 추가 끝