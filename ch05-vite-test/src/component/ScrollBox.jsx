import React, { Component } from "react";

class ScrollBox extends Component {
  // 맨밑으로 이동하는 이벤트 핸들러 ,
  // 준비물 )
  // 1) scrollHeight, : 안쪽 박스 높이 : 650px
  // 2) clientHeight, : 바깥쪽 박스 높이 : 300px
  // 3) scrollTop : 실제 스크롤의 위치, 상단, :0, 맨 하단: 350

  // ref 순서2, 함수 생성, 스크롤 맨밑으로
  scrollToBottom = () => {
    const { scrollHeight, clientHeight } = this.box;
    this.box.scrollTop = scrollHeight - clientHeight;
  };

  scrollToTop = () => {
    // 맨 위로 스크롤하는 경우, scrollTop을 0으로만 설정하면 되므로
    // scrollHeight와 clientHeight 값은 필요하지 않습니다.
    // const { scrollHeight, clientHeight } = this.box;
    this.box.scrollTop = 0;
  };

  scrollToMiddle = () => {
    const { scrollHeight, clientHeight } = this.box;
    this.box.scrollTop = (scrollHeight - clientHeight) / 2;
  };

  render() {
    // out 영역
    const style = {
      border: "1px solid black",
      height: "300px",
      width: "300px",
      overflow: "auto",
      position: "relative",
    };

    // inside 영역
    const innerStyle = {
      width: "100%",
      height: "650px",
      background: "linear-gradient(white,black)",
    };
    return (
      <>
        <h2>2 스크롤을 이용한 ref로 접근하기 </h2>
        <div
          style={style}
          // ref 순서1,
          // 설정하기, 요소를 선택하기.
          // this.box -> 여기 div 태그를 가리킴
          ref={(ref) => {
            this.box = ref;
          }}
        >
          <div style={innerStyle}></div>
        </div>
      </>
    );
  }
}

export default ScrollBox;

// Gemini 주석 추가 시작
// 이 파일은 ScrollBox.jsx로, React의 클래스형 컴포넌트입니다.
// ref를 사용하여 DOM 요소에 직접 접근하고 제어하는 방법을 보여줍니다.
//
// render() 함수:
// - 스크롤 가능한 외부 div와 크기가 더 큰 내부 div를 렌더링합니다.
// - 외부 div에 `ref={(ref) => { this.box = ref; }}`를 설정하여, 해당 DOM 요소를 `this.box`에 할당합니다.
//   이를 통해 컴포넌트의 다른 메서드에서 이 DOM 요소에 접근할 수 있습니다.
//
// scrollToBottom, scrollToTop, scrollToMiddle 함수:
// - `this.box` (ref로 참조된 DOM 요소)의 `scrollTop` 속성을 변경하여 스크롤 위치를 제어합니다.
// - `scrollHeight` (콘텐츠의 총 높이)와 `clientHeight` (보여지는 영역의 높이)를 사용하여 스크롤 위치를 계산합니다.
// - 이 함수들은 부모 컴포넌트에서 ref를 통해 호출될 수 있습니다. (예: `this.scrollBox.scrollToBottom()`)
// Gemini 주석 추가 끝