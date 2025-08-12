2025년 8월 12일

# ch9 React 스타일링

- React 애플리케이션에서 다양한 CSS 스타일링 기법을 적용하는 방법을 학습합니다.
- Sass(SCSS), CSS Modules, Styled Components와 같은 주요 스타일링 도구들의 특징과 사용법을 이해합니다.

## App.jsx

- `ch09`에서 다루는 React 스타일링 기법들을 종합하여 보여주는 메인 컴포넌트입니다.
- Sass, CSS Module, Styled Components로 구현된 자식 컴포넌트들을 가져와 렌더링합니다.

## SassComponent.jsx

- **Sass(SCSS) 사용**: CSS 전처리기인 Sass를 React 컴포넌트에서 사용하는 방법을 보여줍니다.
  - `import '../styles/SassComponent.scss';`와 같이 `.scss` 파일을 가져와 사용합니다.
  - Sass는 변수, 중첩, 믹스인 등 CSS에는 없는 다양한 기능을 제공하여 스타일 코드를 효율적으로 작성할 수 있게 합니다.

## CSSModule.jsx

- **CSS Modules 사용**: CSS 클래스 이름이 전역적으로 충돌하는 것을 방지하는 방법을 보여줍니다.
  - `import styles from '../styles/CSSModule.module.css';`와 같이 `.module.css` 파일을 가져옵니다.
  - 가져온 `styles` 객체를 통해 `className={styles.wrapper}`와 같이 고유하게 해싱된 클래스 이름을 적용합니다.
  - 이를 통해 컴포넌트별 스타일을 캡슐화하고 클래스명 충돌을 방지합니다.

## CSSModule.module.css

- **CSS Modules 파일 구조**: `CSSModule.jsx`에서 사용되는 CSS Module 파일입니다.
  - `.module.css` 확장자를 사용하여 클래스 이름이 자동으로 고유해지도록 합니다.
  - `.wrapper`, `.inverted`와 같은 클래스들이 정의되어 있으며, JavaScript에서 `styles.wrapper` 형태로 참조됩니다.
  - `:global` 키워드를 사용하여 CSS Module 내에서도 전역적으로 적용되는 스타일을 정의할 수 있습니다.

## StyledComponent.jsx

- **Styled Components 사용**: JavaScript 코드 내에서 CSS를 작성하는 CSS-in-JS 라이브러리 사용법을 보여줍니다.
  - `import styled, { css } from 'styled-components';`를 통해 `styled`와 `css` 헬퍼를 가져옵니다.
  - `const Box = styled.div`와 같이 태그에 스타일을 적용한 새로운 React 컴포넌트를 생성합니다.
  - props를 사용하여 `background: ${(props) => props.color || 'red'};`와 같이 동적인 스타일링을 구현할 수 있습니다.
  - `&:hover`, `& + button`과 같은 CSS 선택자를 사용하여 복잡한 스타일 규칙을 적용합니다.

## App.css

- `ch09-vite-test` 프로젝트의 전역적인 기본 스타일을 정의하는 일반 CSS 파일입니다.
- 주로 `#root` 요소나 `.react` 클래스와 같이 애플리케이션 전반에 걸쳐 적용되는 공통 스타일을 포함합니다.

## index.css

- Vite로 생성된 React 프로젝트의 전역적인 기본 스타일을 정의하는 파일입니다.
- `:root` 변수, 링크(`a`), `body`, `h1`, `button` 등 HTML 요소의 기본 스타일을 설정하여 일관된 디자인을 제공합니다.
- `@media (prefers-color-scheme: light)`와 같은 미디어 쿼리를 사용하여 사용자 시스템의 색상 스키마에 따른 스타일을 정의할 수 있습니다.
