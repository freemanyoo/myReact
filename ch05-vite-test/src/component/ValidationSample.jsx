import React, { Component } from "react";
import "./ValidationSample.css";

class ValidationSample extends Component {
  state = {
    password: "",
    clicked: false,
    validated: false,
  };

  // 특정 DOM 에 접근 하기 위해서, 어쩔수 없이,
  // ref 라는 속성을 사용하는 데, 1) 포커스 2) 스크롤 부분에 접근.
  // 포커스 용, 이벤트 핸들러 추가

  // 방법1, 순서1, 설정.
  input1 = null;
  // 방법2, 순서1, 설정
  input2 = React.createRef();

  // 방법1
  handleFocus1 = () => {
    this.input1.focus();
  };

  // 방법2
  handleFocus2 = () => {
    this.input2.current.focus();
  };

  // 이벤트 핸들러 추가,
  handleChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  };
  handleButtonClick = () => {
    // 여기서부터 작업하기.
    this.setState({
      clicked: true,
      validated: this.state.password === "0000",
    });
    this.input1.focus();
  };

  render() {
    return (
      <>
        <div>
          <h2>1 리액트에서, ref 테스트 1</h2>
          <input
            type="text"
            value={this.state.password}
            onChange={this.handleChange}
            className={
              this.state.clicked
                ? this.state.validated
                  ? "success"
                  : "failure"
                : ""
            }
            placeholder="포커스 방법1"
            //방법1, 순서2, 적용, 콜백 함수 사용, 태그에 접근하기.
            ref={(ref) => {
              this.input1 = ref;
            }}
            // 방법2, 순서2, 적용
            // ref={this.input}
          />
          <input
            type="text"
            placeholder="포커스 방법2"
            // 방법2, 순서2, 적용
            ref={this.input2}
          />
          <button onClick={this.handleButtonClick}>체크</button>
          <button onClick={this.handleFocus1}>포커스1</button>
          <button onClick={this.handleFocus2}>포커스2</button>
        </div>
      </>
    );
  }
}

export default ValidationSample;

// Gemini 주석 추가 시작
// 이 파일은 ValidationSample.jsx로, React의 클래스형 컴포넌트입니다.
// ref를 사용하여 input 요소에 접근하고, 간단한 비밀번호 유효성 검사를 수행합니다.
//
// state:
// - password: 사용자가 입력한 비밀번호를 저장합니다.
// - clicked: "체크" 버튼 클릭 여부를 저장합니다.
// - validated: 비밀번호 유효성 검사 결과(password가 "0000"인지)를 저장합니다.
//
// ref 사용법:
// - input1 (콜백 함수 방식): `ref={(ref) => { this.input1 = ref; }}`를 통해 input DOM 요소를 직접 `this.input1`에 할당합니다.
// - input2 (React.createRef 방식): `React.createRef()`로 ref 객체를 생성하고, `ref={this.input2}`로 input 요소에 연결합니다. 접근 시에는 `this.input2.current`를 사용해야 합니다.
//
// 이벤트 핸들러:
// - handleChange: input의 내용이 변경될 때마다 `password` state를 업데이트합니다.
// - handleButtonClick: "체크" 버튼을 클릭하면 `clicked`를 true로, `validated`를 비밀번호 검사 결과로 업데이트하고, 첫 번째 input에 포커스를 줍니다.
// - handleFocus1, handleFocus2: 각 버튼 클릭 시 해당 ref를 사용하여 input에 포커스를 줍니다.
//
// 렌더링:
// - "체크" 버튼 클릭 후, `validated` 값에 따라 input의 className이 "success" 또는 "failure"로 변경되어 CSS 스타일이 다르게 적용됩니다.
// Gemini 주석 추가 끝