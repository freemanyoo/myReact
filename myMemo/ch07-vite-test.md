2025년 8월 12일

# ch7 클래스 컴포넌트 생명주기

- React 클래스 컴포넌트의 생명주기(마운트, 업데이트, 언마운트)를 이해하고 활용하는 방법을 다룹니다.
- `componentDidMount`, `componentDidUpdate`, `componentWillUnmount`와 같은 생명주기 메서드를 통해 컴포넌트의 특정 시점에 작업을 수행하는 방법을 학습합니다.
- 에러 경계를 사용하여 컴포넌트 렌더링 중 발생하는 에러를 처리하는 방법을 소개합니다.

## App.jsx

- 메인 애플리케이션 컴포넌트입니다.
- **클래스형 컴포넌트**: `React.Component`를 상속받아 정의됩니다.
- **`state`**: `show` (boolean)와 `color` (string) 두 가지 상태를 관리합니다.
  - `show`: `LifeCycleSample` 컴포넌트의 마운트/언마운트를 제어합니다.
  - `color`: `LifeCycleSample` 컴포넌트에 props로 전달됩니다.
- **`handleUnmount` 메서드**: `show` 상태를 `false`로 변경하여 `LifeCycleSample` 컴포넌트를 언마운트(화면에서 제거)합니다.
- **렌더링**: `this.state.show`가 `true`일 때만 `ErrorBoundary`로 감싸진 `LifeCycleSample` 컴포넌트를 렌더링합니다.
  - `LifeCycleSample`에는 `color` prop과 `onRequestUnmount` (언마운트 요청 핸들러) prop이 전달됩니다.

## LifeCycleSample.jsx (클래스형 컴포넌트)

- 컴포넌트의 생명주기 메서드들을 직접 구현하여 각 시점의 동작을 확인하는 예제입니다.
- **`state`**: `number` (숫자)와 `color` (문자열)를 관리합니다.
- **`static getDerivedStateFromProps(nextProps, prevState)`**: 
  - props로 받아온 값을 state에 동기화할 때 사용됩니다.
  - 컴포넌트가 마운트될 때와 업데이트될 때 호출됩니다.
- **`componentDidMount()`**: 
  - 컴포넌트가 DOM에 마운트된 직후 호출됩니다.
  - 주로 외부 라이브러리 연동, 네트워크 요청 등 초기화 작업을 수행합니다.
- **`shouldComponentUpdate(nextProps, nextState)`**: 
  - 컴포넌트가 리렌더링될지 여부를 결정합니다.
  - `true`를 반환하면 리렌더링을 진행하고, `false`를 반환하면 리렌더링을 중단합니다.
  - 성능 최적화에 활용됩니다.
- **`getSnapshotBeforeUpdate(prevProps, prevState)`**: 
  - `render()` 메서드 호출 후, DOM에 변경사항이 반영되기 직전에 호출됩니다.
  - 스크롤 위치 유지와 같은 DOM 관련 정보를 스냅샷으로 찍어 반환합니다.
- **`componentDidUpdate(prevProps, prevState, snapshot)`**: 
  - 컴포넌트의 업데이트가 DOM에 반영된 직후 호출됩니다.
  - `getSnapshotBeforeUpdate`에서 반환된 `snapshot` 값을 세 번째 인자로 받습니다.
  - 주로 업데이트 후 DOM 조작이나 네트워크 요청을 수행합니다.
- **`componentWillUnmount()`**: 
  - 컴포넌트가 DOM에서 언마운트(제거)되기 직전에 호출됩니다.
  - 주로 타이머 제거, 네트워크 요청 취소, 구독 해제 등 뒷정리 작업을 수행합니다.
- **`render()`**: 
  - 컴포넌트의 UI를 렌더링합니다.
  - `style` 객체를 사용하여 `color` prop에 따라 배경색을 동적으로 변경합니다.

## ErrorBoundary.jsx (클래스형 컴포넌트)

- React 16부터 도입된 개념으로, 자식 컴포넌트 트리에서 발생하는 JavaScript 에러를 잡아내어
  애플리케이션이 전체적으로 죽는 것을 방지하고, 폴백(fallback) UI를 렌더링할 수 있게 해줍니다.
- **`static getDerivedStateFromError(error)`**: 
  - 자식 컴포넌트에서 에러가 발생했을 때 호출됩니다.
  - 에러 정보를 받아 `state`를 업데이트하여 다음 렌더링에서 폴백 UI를 보여줄 수 있도록 합니다.
- **`componentDidCatch(error, info)`**: 
  - 에러가 발생한 후 호출됩니다.
  - 에러 로깅 서비스에 에러 정보를 전송하는 등의 사이드 이펙트를 수행하기에 적합합니다.
- **렌더링**: `hasError` 상태가 `true`이면 폴백 UI를 렌더링하고, 그렇지 않으면 `this.props.children`을 렌더링합니다.
  - `this.props.children`은 `ErrorBoundary`로 감싸진 자식 컴포넌트들을 의미합니다.

