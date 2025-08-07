// 방법1. 단축키 사용안하고,(코드 스니펫)사용안하고, 수동 작성.
// const MyComponent = () => {
//   return (
//     <>
//       <div>나의 첫 함수형 컴포넌트</div>
//     </>
//   );
// };
// export default MyComponent; // 내보내기, 다른 곳에서 이용 가능.

// 방법2. 코드 스니펫을 이용해서, 작업.
// 함수형 컴포넌트 : rsc
// 클래스형 컴포넌트 : rcc
import React from "react";

// 방법1, 디폴트 props 변경 된 문법 버전.
const MyComponent = ({ name = "기본값 이름입니다.", children }) => {
  return (
    <>
      <div>나의 첫 함수형 컴포넌트 불러오기</div>
      <h2>매개변수로 정의한 props(속성들) 를 사용하기, </h2>
      <h3>props 객체이 있는 이름을 사용해보기 : {name}</h3>
      <h3>================================================</h3>
      <h3>children 받기 : {children}</h3>
    </>
  );
};

//기본 props 설정. 디폴트 props 설정.
// 17 버전 이후로, 함수형 컴포넌트 정상 동작을 안함.
// 꼭 사용시, 클래스형 컴포넌트로 변경하거나,
// 함수형 다른 방법
// 리액트 16버전
// MyComponent.defaultProps = {
//   name: "기본값 이름입니다.",
// };

// 방법2
// 클래스형 컴포넌트 버전으로 확인하기.
// class MyComponent extends React.Component {
//   render() {
//     return (
//       <>
//         <div>나의 첫 클래스형 컴포넌트 불러오기</div>
//         <h2>매개변수로 정의한 props(속성들) 를 사용하기, </h2>
//         <h3>props 객체이 있는 이름을 사용해보기 : {this.props.name}</h3>
//         <h3>================================================</h3>
//         <h3>children 받기 : {this.props.children}</h3>
//       </>
//     );
//   }
// }

// MyComponent.defaultProps = {
//   name: "클래스형 컴포넌트 버전. 기본값 이름입니다.",
// };

export default MyComponent;

// Gemini 주석 추가 시작
// 이 파일은 MyComponent.jsx로, React의 함수형 컴포넌트입니다.
// props(속성)를 매개변수로 받아 화면에 동적인 데이터를 표시하는 역할을 합니다.
// `name`과 `children` 두 가지 props를 사용합니다.
// `name` props는 구조 분해 할당을 통해 직접 접근하며, 기본값("기본값 이름입니다.")을 설정하여 props가 전달되지 않았을 경우에도 오류 없이 동작하도록 합니다.
// `children` props는 컴포넌트 태그 사이에 위치한 내용을 그대로 렌더링할 때 사용됩니다.
// 이 컴포넌트는 재사용 가능한 UI 조각으로, 부모 컴포넌트로부터 데이터를 받아 유연하게 내용을 변경할 수 있습니다.
// Gemini 주석 추가 끝
