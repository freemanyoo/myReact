import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    // state의 초깃값 설정
    this.state = {
      number: 0,
      fixedNumber: 0,
    };
  }
  render() {
    const { number, fixedNumber } = this.state;
    return (
      <>
        <div>
          <h1>{number}</h1>
          <h2>고정 값 : {fixedNumber}</h2>
        </div>
        <button
          onClick={() => {
            // 기존,
            // this.setState({ number: number + 1 });
            // this.setState({ number: this.state.number + 1 });
            // 변경
            // this.setState(콜백함수1, 콜백함수2)
            this.setState(
              (prevState) => {
                return {
                  number: prevState.number + 1,
                };
              }, // 콜백함수1
              () => {
                console.log(
                  "setState 가 동작 후, 추가 동작하는 함수 정의 해보기. "
                );
              } // 콜백함수2
            );
            // 한번 더 작성하기.
            this.setState((prevState) => ({
              number: prevState.number + 1,
            }));
          }}
        >
          +1
        </button>
        <button
          onClick={() => {
            // 기존
            // this.setState({ number: number - 1 });
            // 변경
            // 한번 더 작성하기.
            this.setState((prevState) => ({
              number: prevState.number - 1,
            }));
            // 한번 더 작성하기.
            this.setState((prevState) => ({
              number: prevState.number - 1,
            }));
          }}
        >
          -1
        </button>
      </>
    );
  }
}

export default Counter;

// Gemini 주석 추가 시작
// 이 파일은 Counter.jsx로, React의 클래스형 컴포넌트입니다.
// 컴포넌트 내부에 `state`를 사용하여 컴포넌트의 상태를 관리합니다.
// `state` 객체는 `number`와 `fixedNumber` 두 가지 속성을 가집니다.
// `constructor`에서 `state`의 초깃값(`number: 0`, `fixedNumber: 0`)을 설정합니다.
// `render` 메서드에서는 현재 `state`의 `number`와 `fixedNumber` 값을 화면에 표시합니다.
// `+1` 버튼의 `onClick` 이벤트는 `setState` 메서드를 호출하여 `number` 값을 증가시킵니다.
// 여기서 `setState`에 함수형 업데이트를 사용하고 있습니다. `(prevState) => { ... }` 형태는 이전 상태(prevState)를 인자로 받아 새로운 상태를 반환합니다.
// 이는 비동기적으로 상태가 업데이트될 때 발생할 수 있는 문제를 방지하고, 항상 최신 상태를 기반으로 업데이트를 수행하도록 보장합니다.
// 또한, `setState`의 두 번째 인자로 콜백 함수를 전달하여 상태 업데이트가 완료된 후 특정 작업을 수행할 수 있습니다 (예: `console.log`).
// `+1` 버튼의 경우, 두 번의 `setState` 호출이 연속으로 발생하고 있습니다. React의 `setState`는 비동기적으로 동작할 수 있으므로, 여러 번 호출해도 즉시 모든 업데이트가 반영되지 않을 수 있습니다.
// `-1` 버튼의 `onClick` 이벤트도 두 번의 `setState` 호출을 통해 `number` 값을 감소시킵니다.
// `fixedNumber`는 `state`에 정의되어 있지만, 현재 코드에서는 `setState`를 통해 값을 변경하는 로직이 없으므로 항상 초기값인 `0`으로 고정되어 표시됩니다.
// Gemini 주석 추가 끝
