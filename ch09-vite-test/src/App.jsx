import './App.css';
import SassComponent from './components/SassComponent.jsx';
import CSSModule from './components/CSSModule.jsx';
import StyledComponent from './components/StyledComponent.jsx';

function App() {
  return (
    <>
      <h1 className="react">ch09 리액트의 스타일링 </h1>
      <h2>sass 문법을 통한 확장된 css 문법 1 </h2>
      <SassComponent />

      <h2>CSSMoudle 문법을 이용한 중복되지않는 클래스명 사용하기. </h2>
      <CSSModule />

      <h3>
        StyledComponent 문법을 이용한 따로 css, scss 파일없이 컴포넌트 자체에서
        css 구현 가능.{' '}
      </h3>
      <StyledComponent />
    </>
  );
}

export default App;

// Gemini 주석 추가 시작
// 이 파일은 `App` 컴포넌트로, `ch09`에서 다루는 React 스타일링 기법들을 종합하여 보여주는 메인 컴포넌트입니다.
// 다양한 스타일링 방식(Sass, CSS Module, Styled Components)으로 구현된 자식 컴포넌트들을 가져와(import) 렌더링합니다.
//
// 1. `import './App.css';`
//    - 전역적으로 적용되는 일반 CSS 파일을 가져옵니다. 이 파일은 주로 전체 앱의 기본 스타일이나 공통 스타일을 정의하는 데 사용됩니다.
//
// 2. `import SassComponent from './components/SassComponent.jsx';`
//    - Sass(Syntactically Awesome Style Sheets)는 CSS 전처리기 중 하나로, CSS의 기능을 확장하여
//      변수, 믹스인(mixin), 중첩(nesting) 등의 기능을 제공합니다. `SassComponent`는 Sass를 사용한 스타일링 예시를 보여줍니다.
//
// 3. `import CSSModule from './components/CSSModule.jsx';`
//    - CSS Module은 CSS 클래스 이름이 전역적으로 충돌하는 것을 방지하기 위해 사용됩니다.
//      각 컴포넌트의 CSS 클래스 이름을 고유하게 만들어 로컬 스코프(local scope)를 가집니다.
//      `CSSModule` 컴포넌트는 CSS Module을 사용한 스타일링 예시를 보여줍니다.
//
// 4. `import StyledComponent from './components/StyledComponent.jsx';`
//    - Styled Components는 CSS-in-JS 라이브러리로, JavaScript 코드 내에서 CSS를 작성할 수 있게 해줍니다.
//      이를 통해 컴포넌트와 스타일을 함께 관리하며, 동적인 스타일링이 용이합니다.
//      `StyledComponent`는 Styled Components를 사용한 스타일링 예시를 보여줍니다.
//
// 5. 렌더링 부분:
//    - 각 `h2` 또는 `h3` 태그는 해당 스타일링 기법에 대한 설명을 제공합니다.
//    - 각 스타일링 기법으로 구현된 자식 컴포넌트(`SassComponent`, `CSSModule`, `StyledComponent`)를 렌더링하여
//      각각의 스타일이 어떻게 적용되는지 시각적으로 확인할 수 있습니다.
//
// 이 `App` 컴포넌트는 React 애플리케이션에서 다양한 CSS 스타일링 기법을 적용하는 방법을 학습하는 데 유용합니다.
// Gemini 주석 추가 끝