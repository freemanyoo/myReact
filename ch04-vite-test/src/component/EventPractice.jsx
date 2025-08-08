import React, { Component } from "react";

class EventPractice extends Component {
  // 초깃값
  state = {
    username: "",
    message: "",
  };

  // 태그에 직접 정의한 이벤트 핸들링 작업, 따로 분리 작업.
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  // 이벤트 핸들링 따로 정의,
  handleChange(e) {
    this.setState({
      // 변경전
      //   message: e.target.value,
      // 변경 후,
      //input, 2개가 될 예정, 각 input 이름에 해당하는 객체를 불러와서 사용하기.
      [e.target.name]: e.target.value,
    });
  }
  handleClick() {
    alert(this.state.username + ":" + this.state.message);
    this.setState({
      username: "",
      message: "",
    });
  }

  // 이벤트 추가.
  handleKeyPress = (e) => {
    if (e.key === "Enter") {
      this.handleClick();
    }
  };

  render() {
    return (
      <>
        <h1>이벤트 연습</h1>
        <h2>1 onChange 연습 해보기. </h2>
        <h3>message : {this.state.message}</h3>
        <h3>username : {this.state.username}</h3>
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력하세요"
          value={this.state.message} // getter, state 객체 안의 message 조회
          // 방법1, 직접 설정
          //   onChange={(e) => {
          //     // setter, state 의 객체의 message 값을 변경.
          //     this.setState({ message: e.target.value });
          //   }}
          // 방법2, 따로 분리 설정.
          onChange={this.handleChange}
          // 추가 키 이벤트 리스너, 엔터 키를 입력시, 클릭 하는 효과 주기.
          onKeyPress={this.handleKeyPress}
        />

        <input
          type="text"
          name="username"
          placeholder="사용자명 입력하기"
          value={this.state.username} // getter, state 객체 안의 message 조회
          onChange={this.handleChange}
          // 추가 키 이벤트 리스너, 엔터 키를 입력시, 클릭 하는 효과 주기.
          onKeyPress={this.handleKeyPress}
        />

        <h2>2 onClick 연습 해보기. </h2>
        <button
          // 방법1, 직접 설정
          //   onClick={() => {
          //     alert(this.state.message);
          //     this.setState({
          //       message: "",
          //     });
          //   }}
          // 방법2, 따로 분리 설정.
          onClick={this.handleClick}
        >
          확인
        </button>
      </>
    );
  }
}

export default EventPractice;

// Gemini 주석 추가 시작
// 이 파일은 React 클래스 컴포넌트에서 이벤트 핸들링과 상태 관리를 학습하기 위한 예제입니다.
//
// 주요 학습 내용:
// 1.  **state 객체:** 컴포넌트의 내부 상태(username, message)를 관리합니다.
//     - `state = { ... }` 문법을 사용하여 초기 상태를 정의합니다.
// 2.  **constructor와 this 바인딩:**
//     - `constructor(props)`: 컴포넌트가 마운트되기 전에 호출되며, 초기 상태 설정 및 이벤트 핸들러 바인딩에 사용됩니다.
//     - `super(props)`: 부모 클래스(Component)의 생성자를 호출하여 `this`를 초기화합니다.
//     - `this.handleChange = this.handleChange.bind(this);`: `handleChange`와 `handleClick`와 같은 커스텀 메서드에서 `this`가 컴포넌트 인스턴스를 올바르게 참조하도록 바인딩합니다. (화살표 함수를 사용하면 이 바인딩 과정이 필요 없습니다.)
// 3.  **이벤트 핸들러 분리:**
//     - `handleChange(e)`: `onChange` 이벤트가 발생할 때 호출됩니다. `e.target.name`을 사용하여 여러 입력 필드(message, username)의 상태를 동적으로 업데이트합니다. `setState`는 비동기적으로 작동합니다.
//     - `handleClick()`: `onClick` 이벤트가 발생할 때 호출됩니다. 현재 `username`과 `message` 상태 값을 `alert`으로 표시하고, 상태를 초기화합니다.
// 4.  **키보드 이벤트 처리:**
//     - `handleKeyPress(e)`: `onKeyPress` 이벤트가 발생할 때 호출됩니다. 사용자가 'Enter' 키를 누르면 `handleClick` 메서드를 호출하여 확인 버튼을 클릭한 것과 동일한 동작을 수행합니다.
// 5.  **제어 컴포넌트:**
//     - `<input value={this.state.message} ... />`: `input` 태그의 `value` 속성을 `state` 값과 연결하여 React가 입력 필드의 값을 제어하도록 합니다.
//     - `onChange={this.handleChange}`: 입력 필드의 값이 변경될 때 `handleChange` 메서드를 호출합니다.
// 6.  **JSX 내 이벤트 처리:**
//     - `onClick={this.handleClick}`: 버튼 클릭 시 `handleClick` 메서드를 호출합니다.
//
// 이 예제를 통해 React에서 사용자 입력을 받고, 상태를 업데이트하며, 다양한 이벤트에 반응하는 기본적인 방법을 이해할 수 있습니다.
// Gemini 주석 추가 끝
