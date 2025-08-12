2025년 8월 12일

# ch8 함수형 컴포넌트 Hooks

- React 함수형 컴포넌트에서 상태 관리 및 사이드 이펙트 처리 등 다양한 기능을 사용할 수 있도록 해주는 Hooks의 기본 개념과 활용 방법을 다룹니다.
- `useState`, `useEffect`, `useReducer`, `useMemo`, `useCallback`, `useRef` 등 주요 Hooks와 커스텀 Hook 생성 방법을 학습합니다.

## App.jsx

- `ch08`에서 다루는 모든 React Hook 예제들을 종합하여 보여주는 메인 컴포넌트입니다.
- 각 Hook의 사용 예시를 보여주는 자식 컴포넌트들을 가져와 렌더링합니다.
- `useState`를 사용하여 `Info` 컴포넌트의 표시 여부를 토글하는 기능을 포함합니다.

## Counter.jsx

- **`useState` Hook**: 함수형 컴포넌트에서 가장 기본적인 상태 관리 Hook입니다.
  - `const [value, setValue] = useState(0);` 형태로 상태 변수(`value`)와 상태 업데이트 함수(`setValue`)를 선언하고 초기값(`0`)을 설정합니다.
  - 버튼 클릭 시 `setValue`를 통해 `value`를 증가/감소시키고, 상태가 변경되면 컴포넌트가 리렌더링됩니다.

## Info.jsx

- **`useState`와 `useEffect` Hook**: 상태 관리와 사이드 이펙트 처리를 함께 보여주는 예제입니다.
  - `useState`로 `name`과 `email` 상태를 관리합니다.
  - `useEffect`는 컴포넌트가 렌더링될 때마다 특정 작업을 수행하도록 설정할 수 있는 Hook입니다.
    - 의존성 배열(`deps`)에 따라 실행 시점이 달라집니다:
      - `useEffect(() => { ... });`: 의존성 배열 생략 시, 컴포넌트가 렌더링될 때마다 실행됩니다.
      - `useEffect(() => { ... }, []);`: 빈 배열 시, 컴포넌트가 마운트될 때(처음 나타날 때) 한 번만 실행됩니다.
      - `useEffect(() => { ... }, [name]);`: 특정 값(`name`) 변경 시에만 실행됩니다.
      - 클린업(cleanup) 함수를 반환하여 컴포넌트 언마운트 시 뒷정리 작업을 수행할 수 있습니다.

## CountUseReducer.jsx

- **`useReducer` Hook (기본 예제)**: `useState`의 대체 함수로, 복잡한 상태 관리 로직을 컴포넌트 밖으로 분리할 수 있게 해줍니다.
  - **`reducer` 함수**: 현재 상태와 `action` 객체를 받아 새로운 상태를 반환하는 순수 함수입니다.
  - `const [state, dispatch] = useReducer(reducer, { value: 0 });` 형태로 `reducer` 함수와 초기 상태를 전달하여 `state`와 `dispatch` 함수를 반환받습니다.
  - `dispatch` 함수에 `action` 객체(예: `{ type: 'INCREMENT' }`)를 전달하여 상태 업데이트를 요청합니다.

## InfoUseReducer.jsx

- **`useReducer` Hook (여러 input 관리)**: 여러 개의 input 상태를 하나의 `useReducer`로 효율적으로 관리하는 예제입니다.
  - `reducer` 함수가 `action.name`과 `action.value`를 사용하여 동적으로 상태를 업데이트합니다.
  - 하나의 `onChange` 핸들러로 여러 input의 상태를 관리할 수 있어 코드가 간결해집니다.

## Average.jsx

- **`useMemo` Hook**: 비용이 많이 드는 연산의 결과값을 메모이제이션(캐싱)하여 성능을 최적화하는 예제입니다.
  - `const avg = useMemo(() => getAverage(list), [list]);` 형태로 사용됩니다.
  - `list` 배열의 값이 변경될 때만 `getAverage` 함수를 다시 실행하고, 그렇지 않으면 이전에 계산된 값을 재사용합니다.

## AverageUseCallback.jsx

- **`useCallback` Hook**: 함수 자체를 메모이제이션하여 불필요한 함수 재생성을 방지하고 성능을 최적화하는 예제입니다.
  - `const onChange = useCallback((e) => { ... }, []);` (의존성 배열이 빈 경우, 최초 1회만 생성)
  - `const onInsert = useCallback((e) => { ... }, [number, list]);` (의존성 배열의 값이 변경될 때만 재생성)
  - 주로 자식 컴포넌트에 props로 함수를 전달할 때 불필요한 리렌더링을 막는 데 유용합니다.

## RefSample.jsx

- **`useRef` Hook (값 관리)**: 렌더링에 영향을 주지 않는 값을 관리할 때 사용되는 예제입니다.
  - `const id = useRef(1);` 형태로 `ref` 객체를 생성하고 `.current` 속성을 통해 값을 읽고 쓸 수 있습니다.
  - `ref.current` 값을 변경해도 컴포넌트가 리렌더링되지 않으며, 컴포넌트가 리렌더링되어도 `ref.current` 값은 유지됩니다.

## AverageUseRef.jsx

- **`useRef` Hook (DOM 접근)**: 특정 DOM 요소에 직접 접근하고 조작하는 방법을 보여주는 예제입니다.
  - `const inputEl = useRef(null);`로 `ref` 객체를 생성하고, `<input ref={inputEl} />`와 같이 DOM 요소에 연결합니다.
  - `inputEl.current.focus();`와 같이 `ref.current`를 통해 실제 DOM 요소에 접근하여 `focus()`와 같은 메서드를 호출할 수 있습니다.

## useInputs.jsx (Custom Hook)

- **커스텀 Hook 정의**: 여러 컴포넌트에서 반복적으로 사용되는 `useState`와 `onChange` 로직을 재사용 가능한 함수로 분리한 예제입니다.
  - `useReducer`를 내부적으로 사용하여 여러 input의 상태를 효율적으로 관리합니다.
  - `export default function useInputs(initialForm) { ... }` 형태로 정의됩니다.

## InfoCustomHookSample.jsx

- **커스텀 Hook 사용**: `useInputs` 커스텀 Hook을 실제 컴포넌트에서 사용하는 방법을 보여줍니다.
  - `const [state, onChange] = useInputs({ name: '', email: '' });` 형태로 커스텀 Hook을 호출하여 상태와 핸들러를 반환받습니다.
  - 이를 통해 컴포넌트의 로직을 간결하게 유지하고 재사용성을 높입니다.
