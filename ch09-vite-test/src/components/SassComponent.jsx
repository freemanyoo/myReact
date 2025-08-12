import React from 'react';
import '../styles/SassComponent.scss';

const SassComponent = () => {
  return (
    <div>
      <div className="SassComponent">
        <div className="box red" />
        <div className="box orange" />
        <div className="box yellow" />
        <div className="box green" />
        <div className="box blue" />
        <div className="box indigo" />
        <div className="box violet" />
      </div>
    </div>
  );
};

export default SassComponent;

// Gemini 주석 추가 시작
// 이 파일은 `SassComponent` 컴포넌트로, React에서 Sass(SCSS)를 사용하는 방법을 보여줍니다.
// Sass는 CSS 전처리기(preprocessor)로, CSS에는 없는 다양한 기능(변수, 믹스인, 중첩 등)을 제공하여
// CSS 코드를 더 효율적이고 구조적으로 작성할 수 있게 해줍니다.
//
// 1. `import '../styles/SassComponent.scss';`
//    - `.scss` 확장자를 가진 Sass 파일을 가져옵니다. 웹팩(Webpack)과 같은 빌드 도구가
//      이 Sass 파일을 일반 CSS로 컴파일하여 애플리케이션에 적용합니다.
//
// 2. `const SassComponent = () => { ... };`
//    - 함수형 컴포넌트 `SassComponent`를 정의합니다.
//
// 3. `<div className="SassComponent">`
//    - 이 `div`는 `SassComponent.scss` 파일에서 정의된 `.SassComponent` 클래스를 적용받습니다.
//    - Sass 파일 내에서 `.SassComponent` 클래스 안에 다른 스타일들이 중첩되어 정의될 수 있습니다.
//
// 4. `<div className="box red" />` 등
//    - 여러 개의 `div` 요소들이 `box` 클래스와 함께 각각 다른 색상 클래스(예: `red`, `orange`)를 가집니다.
//    - `SassComponent.scss` 파일에서는 `box` 클래스에 공통 스타일을 정의하고,
//      각 색상 클래스에 해당하는 스타일을 `@mixin`이나 `@extend`와 같은 Sass 기능을 사용하여 정의할 수 있습니다.
//
// Sass의 주요 장점:
// - **변수 사용:** 색상, 폰트 크기 등 반복되는 값을 변수로 정의하여 일관성을 유지하고 수정이 용이합니다.
// - **중첩(Nesting):** CSS 선택자를 중첩하여 작성할 수 있어 코드의 가독성을 높이고 반복을 줄입니다.
// - **믹스인(Mixin):** 재사용 가능한 스타일 블록을 정의하여 여러 곳에서 쉽게 포함시킬 수 있습니다.
// - **확장(Extend):** 다른 선택자의 스타일을 상속받아 코드를 간결하게 만듭니다.
// - **부분(Partial) 파일:** `_`로 시작하는 파일을 만들어 모듈화하고 `@import`로 가져와 사용할 수 있습니다.
// Gemini 주석 추가 끝