import React, { Component } from "react";

class ErrorBoundary extends Component {
  state = {
    error: false,
    // errorInfo: null,
  };

  static getDerivedStateFromError(error) {
    return { error: true };
  }

  componentDidCatch(error, info) {
    console.log("없는 값에 접근시 오류 발생하고, 예외 처리 componentDidCatch", {
      error,
      info,
    });
    this.setState({
      errorInfo: info,
    });
  }

  handleReset = () => {
    this.setState({
      error: false,
      errorInfo: null,
    });
  };
  render() {
    if (this.state.error) {
      return (
        <div>
          <h1>에러가 발생했습니다.</h1>
          <button onClick={this.handleReset}>다시 시도</button>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;

// Gemini 주석 추가 시작
// 이 파일은 ErrorBoundary.jsx로, React의 에러 경계 컴포넌트입니다.
// 자식 컴포넌트에서 발생하는 에러를 잡아내고, 에러 발생 시 보여줄 UI를 설정합니다.
// state는 error와 errorInfo 값을 가집니다.
// getDerivedStateFromError: 자식 컴포넌트에서 에러가 발생했을 때 호출되며, state를 업데이트하여 에러 UI를 렌더링하도록 합니다.
// componentDidCatch: 에러 정보를 로깅하는 데 사용됩니다.
// handleReset: "다시 시도" 버튼 클릭 시 state를 초기화하여 다시 정상적으로 렌더링하도록 합니다.
// render: this.state.error가 true이면 에러 UI를, false이면 자식 컴포넌트를 렌더링합니다.
// Gemini 주석 추가 끝