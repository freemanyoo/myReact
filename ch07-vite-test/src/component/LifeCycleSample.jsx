import React, { Component } from "react";

class LifeCycleSample extends Component {
  state = {
    number: 0,
    color: null,
  };
  myRef = null; // ref 설정

  constructor(props) {
    super(props);
    console.log("마운트 - 순서1 constructor 생성자 초기화");
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log(
      "마운트 - 순서2 또는 업데이트 - 순서1 getDerivedStateFromProps"
    );
    if (nextProps.color !== prevState.color) {
      return { color: nextProps.color };
    }
    return null;
  }

  componentDidMount() {
    console.log("마운트 - 4 componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("업데이트 - 순서2 shouldComponentUpdate", nextProps, nextState);
    return nextState.number % 10 !== 4;
  }

  componentWillUnmount() {
    console.log("언마운트 소멸 단계 componentWillUnmount");
  }

  // 이벤트 핸들러 추가해서, state 값을 변경시, 업데이트 발생함.
  // 참고로 업데이트 발생 조건 4가지 1)Props 전달 2) State 변경 3) 부모 컴포넌트가 리 렌더링 4) 강제로 호출시
  // -> P, S , 부 , 강 부름 -> 다시, 리 렌더링 함. (업데이트 )
  handleClick = () => {
    this.setState({
      number: this.state.number + 1,
    });
  };
  // 수동으로 언마운트 호출 테스트
  handleUnmountClick = () => {
    if (this.props.onRequestUnmount) {
      this.props.onRequestUnmount();
    }
  };

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("업데이트 - 순서4 getSnapshotBeforeUpdate");
    if (prevProps.color !== this.props.color) {
      return this.myRef.style.color;
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("업데이트 - 순서5 componentDidUpdate", prevProps, prevState);
    if (snapshot) {
      console.log("업데이트 되기 전의 색상 : ", snapshot);
    }
  }

  render() {
    console.log("마운트 - 3 또는 업데이트 - 순서3 render");
    const style = {
      color: this.props.color,
    };
    return (
      <>
        <div>
          {/* 없는 값에 접근해서, 임의로 오류 발생시키기 */}
          {/* {this.props.missing.value} */}
          <h1 style={style} ref={(ref) => (this.myRef = ref)}>
            this.state.number : {this.state.number}
          </h1>
          <p>this.state.color : {this.state.color}</p>
          <button onClick={this.handleClick}>더하기</button>
          <button onClick={this.handleUnmountClick}>언마운트(내부요청)</button>
        </div>
      </>
    );
  }
}

export default LifeCycleSample;

// Gemini 주석 추가 시작
// 이 파일은 LifeCycleSample.jsx로, React의 클래스형 컴포넌트입니다.
// 컴포넌트의 생명주기(Life Cycle) 메서드들을 보여주는 예제입니다.
// state는 number와 color 값을 가집니다.
// constructor: 컴포넌트가 생성될 때 호출되는 생성자입니다.
// getDerivedStateFromProps: props로 받아온 값을 state에 동기화시키는 역할을 합니다.
// componentDidMount: 컴포넌트가 마운트된 직후, 즉 트리에 삽입된 직후에 호출됩니다.
// shouldComponentUpdate: props 또는 state가 변경되었을 때, 리렌더링을 할지 말지 결정하는 메서드입니다.
// componentWillUnmount: 컴포넌트가 마운트 해제되어 제거되기 직전에 호출됩니다.
// handleClick: 버튼 클릭 시 state의 number 값을 1 증가시킵니다.
// handleUnmountClick: 부모 컴포넌트로부터 받은 onRequestUnmount 함수를 호출하여 컴포넌트를 언마운트합니다.
// getSnapshotBeforeUpdate: render에서 만들어진 결과물이 브라우저에 실제로 반영되기 직전에 호출됩니다.
// componentDidUpdate: 리렌더링을 마친 후 실행됩니다.
// render: 컴포넌트의 UI를 렌더링합니다.
// Gemini 주석 추가 끝