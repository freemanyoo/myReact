import "./App.css";
import React, { Component } from "react";
import MyComponent from "./component/MyComponent";
import Counter from "./component/Counter";
import Say from "./component/Say";

// 1. 함수형 컴포넌트
// function App() {
//   const name = "오늘 점심 뭐 먹지?";
//   return (
//     <>
//       <h1>ch3 컴포넌트 개념</h1>
//       <div className="react">{name}</div>
//       <h2>
//         현재: App.jsx , 1 부모 컴포넌트에서, 자식 컴포넌트 MyComponent
//         사용하기(불러오기)!
//       </h2>
//       <MyComponent />
//       {/* <h2>
//         현재: App.jsx , 2 부모 컴포넌트에서, 자식 컴포넌트 MyComponent props
//         전달해보기.{" "}
//       </h2>
//       <MyComponent name="이상용" /> */}
//     </>
//   );
// }

//2. 클래스형 컴포넌트
class App extends Component {
  render() {
    const name2 = "오늘 점심 뭐 먹지?";
    return (
      <>
        <h1>ch3 컴포넌트 개념</h1>
        <div className="react">{name2}</div>
        <h2>
          현재: App.jsx , 1 부모 컴포넌트에서, 자식 컴포넌트 MyComponent
          사용하기(불러오기)!
        </h2>
        <MyComponent />
        <h2>
          현재: App.jsx , 2 부모 컴포넌트에서, 자식 컴포넌트 MyComponent props
          전달하기
        </h2>
        <MyComponent name="이상용" />
        <h2>
          현재: App.jsx , 3 부모 컴포넌트에서, 자식 컴포넌트(MyComponent)
          children 전달하기.
        </h2>
        <MyComponent name="이상용3">
          children 자리에 값을 사용해서 전달하기.test
        </MyComponent>
        <h2>현재: App.jsx , 4 자식 컴포넌트(Counter) state 확인하기.</h2>
        <Counter />;
        <h2>현재: App.jsx , 5 자식 컴포넌트(Say) state 확인하기.</h2>
        <Say />
      </>
    );
  }
}

export default App;

// Gemini 주석 추가 시작
// 이 파일은 React 애플리케이션의 메인 컴포넌트인 App.jsx입니다.
// 애플리케이션의 최상위 컴포넌트 역할을 하며, 다른 하위 컴포넌트들을 조합하여 전체 UI를 구성합니다.
// 현재 클래스형 컴포넌트로 구현되어 있으며, React의 Component 클래스를 상속받습니다.
// render() 메서드 내에서 JSX를 반환하여 화면에 렌더링될 내용을 정의합니다.
// MyComponent를 자식 컴포넌트로 가져와 사용하며, props(속성)를 전달하는 방법을 보여줍니다.
// 'name'이라는 props를 MyComponent에 전달하여 자식 컴포넌트에서 부모로부터 받은 데이터를 활용하는 예시를 확인할 수 있습니다.
// Gemini 주석 추가 끝
