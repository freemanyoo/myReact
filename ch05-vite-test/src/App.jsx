import "./App.css";
import ScrollBox from "./component/ScrollBox";
import ValidationSample from "./component/ValidationSample";
import React from "react";

// function App() {
class App extends React.Component {
  render() {
    return (
      <>
        <h1 className="react">ch5 리액트 버전으로 ref 확인해보기 </h1>
        <ValidationSample />
        <ScrollBox ref={(ref) => (this.ScrollBox = ref)} />
        <button onClick={() => this.ScrollBox.scrollToBottom()}>
          맨밑으로
        </button>
        <button onClick={() => this.ScrollBox.scrollToTop()}>맨위로</button>
        <button onClick={() => this.ScrollBox.scrollToMiddle()}>가운데</button>
      </>
    );
  }
}

export default App;

// Gemini 주석 추가 시작
// 이 파일은 App.jsx로, ch5 예제의 메인 컴포넌트입니다.
// React의 클래스형 컴포넌트로 작성되었습니다.
//
// 주요 기능:
// 1. ValidationSample 컴포넌트 렌더링: `ValidationSample`은 ref를 사용한 input 포커싱 및 유효성 검사 기능을 제공합니다.
// 2. ScrollBox 컴포넌트 렌더링 및 제어:
//    - `ScrollBox` 컴포넌트에 `ref`를 설정하여 (`ref={(ref) => (this.ScrollBox = ref)}`) 컴포넌트의 인스턴스에 직접 접근할 수 있도록 합니다.
//    - `this.ScrollBox`는 `ScrollBox` 컴포넌트의 인스턴스를 가리키게 되며, 이를 통해 `ScrollBox` 내부에 정의된 메서드(예: `scrollToBottom`)를 호출할 수 있습니다.
//    - "맨밑으로", "맨위로", "가운데" 버튼 클릭 시, `onClick` 이벤트 핸들러는 `this.ScrollBox`의 각 메서드(`scrollToBottom`, `scrollToTop`, `scrollToMiddle`)를 호출하여 `ScrollBox`의 스크롤 위치를 제어합니다.
//
// 이 예제는 부모 컴포넌트에서 자식 컴포넌트의 DOM 요소나 메서드에 접근해야 할 때 `ref`를 어떻게 활용하는지 보여줍니다.
// Gemini 주석 추가 끝
