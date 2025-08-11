import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <App />
  // </StrictMode>,
);

// Gemini 주석 추가 시작
// 이 파일은 main.jsx로, React 애플리케이션의 진입점입니다.
// createRoot를 사용하여 React 18의 새로운 루트 API를 사용합니다.
// App 컴포넌트를 렌더링하여 애플리케이션을 시작합니다.
// StrictMode는 잠재적인 문제를 알아내기 위한 도구로, 현재는 주석 처리되어 있습니다.
// Gemini 주석 추가 끝