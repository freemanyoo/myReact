import React from 'react';
import styled, { css } from 'styled-components';
// 장점, 따로  css, scss 파일없이, 해당 컴포넌트 내부에서, 한번에 작업을 같이 할수 있다.

const Box = styled.div`
  //부모로부터 전달 받은 props로 이용하기.
  background: ${(props) => props.color || 'red'};
  padding: 1rem;
  display: flex;
`;

const Button = styled.button`
  background: white;
  color: black;
  border-radius: 4px;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  font-size: 1rem;
  font-weight: 600;

  /* &:hover로 hover 상태 스타일 지정 */
  &:hover {
    background: rgba(255, 255, 255, 0.9);
  }

  /* inverted 값이 true일 때 특정 스타일 */
  ${(props) =>
    props.inverted &&
    css`
      background: none;
      border: 2px solid white;
      color: white;

      &:hover {
        background: white;
        color: black;
      }
    `}

  /* Button 사이에 마진 추가 */
  & + button {
    margin-left: 1rem;
  }
`;

const StyledComponent = () => {
  return (
    <Box>
      <Button>Hello</Button>
      <Button inverted={true}>오늘 점심 뭐 먹지?</Button>
    </Box>
  );
};

export default StyledComponent;

// Gemini 주석 추가 시작
// 이 파일은 `StyledComponent` 컴포넌트로, `styled-components` 라이브러리를 사용하여
// 컴포넌트 기반의 스타일링을 구현하는 예제입니다.
// `styled-components`는 CSS-in-JS 라이브러리로, JavaScript 코드 내에서 CSS를 작성할 수 있게 해줍니다.
//
// 1. `import styled, { css } from 'styled-components';`
//    - `styled`: 스타일이 적용된 컴포넌트를 생성하는 데 사용되는 기본 함수입니다.
//    - `css`: 여러 스타일 규칙을 그룹화하거나 조건부 스타일링을 적용할 때 사용되는 헬퍼 함수입니다.
//
// 2. `const Box = styled.div`
//    - `styled.div`는 `div` 태그에 스타일을 적용한 새로운 React 컴포넌트 `Box`를 생성합니다.
//    - 백틱(`` ` ``) 안에 일반 CSS 문법으로 스타일을 작성합니다.
//    - `background: ${(props) => props.color || 'red'};`:
//      - `styled-components`는 props를 사용하여 동적인 스타일링을 할 수 있습니다.
//      - `Box` 컴포넌트에 `color` prop이 전달되면 해당 색상을 배경색으로 사용하고, 없으면 기본값으로 `red`를 사용합니다.
//
// 3. `const Button = styled.button`
//    - `styled.button`은 `button` 태그에 스타일을 적용한 새로운 React 컴포넌트 `Button`을 생성합니다.
//    - `&:hover`: CSS 가상 클래스 선택자를 사용하여 마우스 오버 시의 스타일을 정의합니다.
//    - `${(props) => props.inverted && css`...`}`:
//      - `inverted` prop이 `true`일 때만 `css` 헬퍼 함수 내의 스타일 규칙을 적용합니다.
//      - 이는 조건부 스타일링을 구현하는 강력한 방법입니다.
//    - `& + button`: CSS 인접 형제 선택자를 사용하여 `Button` 컴포넌트 바로 뒤에 오는 다른 `Button` 컴포넌트에 스타일을 적용합니다.
//      - 여기서는 버튼들 사이에 왼쪽 마진을 추가하여 간격을 줍니다.
//
// 4. `const StyledComponent = () => { ... };`
//    - 이 함수형 컴포넌트 내에서 위에서 정의한 `Box`와 `Button` 컴포넌트를 사용합니다.
//    - `<Box>`: `Box` 컴포넌트를 렌더링합니다.
//    - `<Button>Hello</Button>`: 기본 스타일의 버튼을 렌더링합니다.
//    - `<Button inverted={true}>오늘 점심 뭐 먹지?</Button>`: `inverted` prop을 `true`로 전달하여
//      반전된 스타일(배경 없음, 흰색 테두리, 흰색 글자)이 적용된 버튼을 렌더링합니다.
//
// `styled-components`의 장점:
// - **컴포넌트 기반 스타일링:** 스타일이 특정 컴포넌트에 캡슐화되어 다른 컴포넌트에 영향을 주지 않습니다.
// - **동적 스타일링:** JavaScript props를 사용하여 쉽게 동적인 스타일을 적용할 수 있습니다.
// - **자동 벤더 프리픽싱:** 브라우저 호환성을 위해 자동으로 벤더 프리픽스(예: `-webkit-`)를 추가해줍니다.
// - **유지보수성:** 스타일과 컴포넌트 로직이 함께 있어 코드의 응집도가 높아집니다.
// Gemini 주석 추가 끝