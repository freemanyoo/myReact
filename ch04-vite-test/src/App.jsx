import "./App.css";
import EventPractice from "./component/EventPractice";
import EventPractice_Function from "./component/EventPractice_Function";
import JoinForm from "./component/JoinForm";

function App() {
  return (
    <>
      <h1>ch4 이벤트 핸들링</h1>
      <h2>1 EventPractice, 클래스형 컴포넌트 자식 컴포넌트 호출하기</h2>
      <EventPractice />
      <h2>2 EventPractice_Function, 함수형 컴포넌트 자식 컴포넌트 호출하기</h2>
      <EventPractice_Function />
      <h2>3 회원 가입 형식으로 연습 해보기, 복습 </h2>
      <JoinForm />
    </>
  );
}

export default App;

// Gemini 주석 추가 시작
// 이 파일은 ch4 이벤트 핸들링 예제를 위한 메인 애플리케이션 컴포넌트입니다.
//
// 주요 기능:
// 1.  **EventPractice 컴포넌트 렌더링:**
//     - `EventPractice` 자식 컴포넌트를 불러와 화면에 표시합니다.
//     - 이를 통해 클래스형 컴포넌트의 이벤트 처리 방식을 학습합니다.
// 2.  **EventPractice_Function 컴포넌트 렌더링:**
//     - `EventPractice_Function` 자식 컴포넌트를 불러와 화면에 표시합니다.
//     - 이를 통해 함수형 컴포넌트의 이벤트 처리 방식을 학습하고 클래스형과 비교합니다.
//
// App.jsx는 React 애플리케이션의 진입점 역할을 하며,
// 다른 하위 컴포넌트들을 조합하여 전체 UI를 구성합니다.
// Gemini 주석 추가 끝
