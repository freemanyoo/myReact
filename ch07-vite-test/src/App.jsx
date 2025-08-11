import "./App.css";
import ErrorBoundary from "./component/ErrorBoundary";
import LifeCycleSample from "./component/LifeCycleSample";
import React, { Component } from "react";

// rcc , 클래스형 컴포넌트의 코드 스니펫,
class App extends Component {
  state = {
    show: true,
    color: "red",
  };
  // 부모 App.js , 자식 컴포넌트를 언마운트, 즉 소멸, 화면에서 제거하는 기능.
  handleUnmount = () => {
    this.setState({
      show: false,
    });
  };

  render() {
    return (
      <>
        <div>
          <h1 className="react">
            ch7 클래스 컴포넌트 생명주기(마운트, 업데이트, 언마운트)
          </h1>
          {this.state.show && (
            <ErrorBoundary>
              <LifeCycleSample
                color={this.state.color}
                onRequestUnmount={this.handleUnmount}
              />
            </ErrorBoundary>
          )}
        </div>
      </>
    );
  }
}

export default App;

//함수형 컴포넌트
// function App() {
//   return (
//     <>
//       <h1 className="react">
//         ch7 클래스 컴포넌트 생명주기(마운트, 업데이트, 언마운트)
//       </h1>
//       <LifeCycleSample />
//     </>
//   );
// }

// export default App;

// Gemini 주석 추가 시작
// 이 파일은 App.jsx로, React의 클래스형 컴포넌트입니다.
// state는 show와 color 값을 가집니다.
// handleUnmount: 버튼 클릭 시 show 값을 false로 변경하여 LifeCycleSample 컴포넌트를 언마운트 시킵니다.
// render: 조건부 렌더링을 사용하여 this.state.show가 true일 때만 ErrorBoundary와 LifeCycleSample 컴포넌트를 렌더링합니다.
// LifeCycleSample 컴포넌트에 color와 onRequestUnmount props를 전달합니다.
// Gemini 주석 추가 끝