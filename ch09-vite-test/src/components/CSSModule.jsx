import React from 'react';
import styles from '../styles/CSSModule.module.css';

const CssModule = () => {
  return (
    <div>
      <div className={`${styles.wrapper} ${styles.inverted}`}>
        <span className="something">Hello CSSModule~~~,</span> 클래스명을
        중복되지 않게 사용해 주는 도구.
      </div>
    </div>
  );
};

export default CssModule;

// Gemini 주석 추가 시작
// 이 파일은 `CSSModule` 컴포넌트로, React에서 CSS Module을 사용하는 방법을 보여줍니다.
// CSS Module은 CSS 클래스 이름이 전역적으로 충돌하는 것을 방지하여
// 각 컴포넌트의 스타일을 독립적으로 관리할 수 있게 해줍니다.
//
// 1. `import styles from '../styles/CSSModule.module.css';`
//    - `.module.css` 확장자를 사용하여 CSS Module 파일을 가져옵니다.
//    - 이 파일을 가져오면 `styles`라는 JavaScript 객체를 얻게 됩니다.
//    - 이 객체는 CSS 파일에 정의된 모든 클래스 이름들을 키로 가지고, 고유하게 해싱된 클래스 이름들을 값으로 가집니다.
//      (예: `styles.wrapper`는 `CSSModule_wrapper__abc12`와 같은 고유한 문자열이 됩니다.)
//
// 2. `const CssModule = () => { ... };`
//    - 함수형 컴포넌트 `CssModule`을 정의합니다.
//
// 3. `<div className={`${styles.wrapper} ${styles.inverted}`}>`
//    - `className` 속성에 `styles` 객체의 속성을 사용하여 CSS 클래스를 적용합니다.
//    - `styles.wrapper`: `CSSModule.module.css` 파일에 정의된 `wrapper` 클래스를 가져와 적용합니다.
//    - `styles.inverted`: `CSSModule.module.css` 파일에 정의된 `inverted` 클래스를 가져와 적용합니다.
//    - 백틱(`` ` ``)과 `${}` 문법을 사용하여 여러 클래스를 동적으로 조합할 수 있습니다.
//
// 4. `<span className="something">Hello CSSModule~~~,</span>`
//    - `something` 클래스는 일반 CSS 클래스입니다. CSS Module을 통해 가져오지 않았으므로
//      이 클래스 이름은 전역적으로 사용될 수 있으며, 다른 컴포넌트의 동일한 클래스 이름과 충돌할 수 있습니다.
//      이는 CSS Module이 아닌 일반 CSS의 특징을 보여줍니다.
//
// CSS Module의 장점:
// - **클래스명 충돌 방지:** 모든 클래스 이름이 고유하게 해싱되므로, 다른 컴포넌트의 스타일과 충돌할 염려가 없습니다.
// - **모듈성:** 각 컴포넌트의 스타일이 해당 컴포넌트에만 영향을 미치므로, 스타일의 재사용 및 관리가 용이합니다.
// - **명시적인 의존성:** 어떤 CSS 파일이 어떤 컴포넌트에서 사용되는지 명확하게 알 수 있습니다.
// Gemini 주석 추가 끝