import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// Gemini 주석 추가 시작
// 이 파일은 `main.jsx`로, React 애플리케이션의 진입점(Entry Point) 역할을 합니다.
// 여기서 React 컴포넌트 트리가 시작되고, HTML 문서의 특정 DOM 요소에 렌더링됩니다.
//
// 1. `import { StrictMode } from 'react'`
//    - `StrictMode`는 React 애플리케이션 내에서 잠재적인 문제를 식별하기 위한 도구입니다.
//    - 개발 모드에서만 작동하며, 프로덕션 빌드에는 영향을 미치지 않습니다.
//    - 자손 컴포넌트 내의 특정 경고 및 추가 검사를 활성화합니다.
//
// 2. `import { createRoot } from 'react-dom/client'`
//    - React 18부터 도입된 새로운 Root API의 `createRoot` 함수를 가져옵니다.
//    - 이 함수는 React 애플리케이션을 렌더링하기 위한 새로운 루트를 생성하는 데 사용됩니다.
//
// 3. `import './index.css'`
//    - 전역 스타일을 정의하는 `index.css` 파일을 가져옵니다. 이 파일의 스타일은 애플리케이션 전체에 적용됩니다.
//
// 4. `import App from './App.jsx'`
//    - 애플리케이션의 최상위 컴포넌트인 `App.jsx` 파일을 가져옵니다.
//    - `App` 컴포넌트는 다른 모든 컴포넌트들을 포함하는 부모 컴포넌트 역할을 합니다.
//
// 5. `createRoot(document.getElementById('root')).render(...)`
//    - `document.getElementById('root')`: HTML 문서에서 `id`가 `root`인 DOM 요소를 찾습니다.
//      일반적으로 `public/index.html` 파일에 `<div id="root"></div>`와 같은 형태로 존재합니다.
//    - `createRoot(...)`: 찾은 DOM 요소를 React 애플리케이션의 루트로 설정합니다.
//    - `.render(...)`: React 요소를 이 루트 안에 렌더링합니다.
//      - `<StrictMode>`: `App` 컴포넌트를 `StrictMode`로 감싸서 개발 중 잠재적인 문제를 감지하도록 합니다.
//      - `<App />`: 애플리케이션의 최상위 컴포넌트인 `App`을 렌더링합니다.
//
// 이 `main.jsx` 파일은 React 애플리케이션이 브라우저에 어떻게 로드되고 시작되는지를 정의하는 핵심 파일입니다.
// Gemini 주석 추가 끝