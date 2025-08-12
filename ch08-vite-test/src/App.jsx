import './App.css';
import Counter from './component/Counter.jsx';
import Info from './component/Info.jsx';
import { useState } from 'react';
import CountUseReducer from './component/CountUseReducer.jsx';
import InfoUseReducer from './component/InfoUseReducer.jsx';
import Average from './component/Average.jsx';
import AverageUseCallback from './component/AverageUseCallback.jsx';
import RefSample from './component/RefSample.jsx';
import AverageUseRef from './component/AverageUseRef.jsx';
import InfoCustomHookSample from './component/InfoCustomHookSample.jsx';

function App() {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <div>
        <h1 className="react"> ch08 함수형 컴포넌트 hooks</h1>
      </div>
      <div>
        <h2>
          1 useState , Counter 자식 컴포넌트 호출 또는 그리기 또는 렌더링{' '}
        </h2>
        <Counter />

        <button onClick={() => setVisible(!visible)}>
          {visible ? '숨기기' : '보이기'}
        </button>
        <h2>
          2 useState - useEffect, Info자식 컴포넌트 호출 또는 그리기 또는
          렌더링{' '}
        </h2>
        {visible && <Info />}

        <h2>3 useReducer , CounteUseReducer , 상태 관리 hook 사용해보기,</h2>
        <CountUseReducer />

        <h2>3-2 useReducer , InfoUseReducer , 상태 관리 hook 사용해보기,</h2>
        <InfoUseReducer />

        <h2>
          4 useMemo , Average , 무거운 연산의 결과값을 기억해서 재사용해보자.,
        </h2>
        <Average />

        <h2>5 useCallback , Average , 함수를 기억해서 재사용해보자.,</h2>
        <AverageUseCallback />

        <h2>
          6 useRef , AverageUseRef ,특정 돔(태그) 직접 접근, 추가 후 포커스 확인
        </h2>
        <AverageUseRef />

        <h2>7 useRef , RefSample ,리렌더링에 영향을 받지 않는 값으로 사용됨</h2>
        <RefSample />

        <h2>
          8 customHook , UseInputs ,반복 되는 useState 와 onChange 분리해서,
          재사용하기.{' '}
        </h2>
        <InfoCustomHookSample />
      </div>
    </>
  );
}

export default App;

// Gemini 주석 추가 시작
// 이 App.jsx 파일은 ch08에서 다루는 모든 React Hook 예제들을 종합하여 보여주는 메인 컴포넌트입니다.
// 각 Hook의 사용 예시를 보여주는 자식 컴포넌트들을 가져와(import) 렌더링합니다.
//
// 1. `useState`: `Counter` 컴포넌트와 `Info` 컴포넌트의 표시 여부(visible)를 관리합니다.
//    - `Counter`: 가장 기본적인 `useState` 사용법을 보여줍니다.
//    - `visible` 상태와 `setVisible` 함수를 통해 '보이기'/'숨기기' 버튼 클릭 시 `Info` 컴포넌트를 토글합니다.
//
// 2. `useEffect`: `Info` 컴포넌트 내에서 사용되며, 컴포넌트가 렌더링되거나 업데이트될 때 특정 작업을 수행합니다.
//
// 3. `useReducer`: `CountUseReducer`와 `InfoUseReducer` 컴포넌트에서 복잡한 상태 로직을 관리하기 위해 사용됩니다.
//    - `CountUseReducer`: 간단한 카운터 예제를 `useReducer`로 구현합니다.
//    - `InfoUseReducer`: 여러 개의 input 상태를 `useReducer`로 관리합니다.
//
// 4. `useMemo`: `Average` 컴포넌트에서 사용되며, 비용이 큰 연산의 결과값을 캐싱하여 성능을 최적화합니다.
//
// 5. `useCallback`: `AverageUseCallback` 컴포넌트에서 사용되며, 함수를 메모이제이션하여 불필요한 리렌더링을 방지합니다.
//
// 6. `useRef`:
//    - `AverageUseRef`: 특정 DOM 요소(input)에 직접 접근하여 포커스를 맞추는 예제입니다.
//    - `RefSample`: 리렌더링을 유발하지 않는 변수를 관리하기 위해 사용됩니다.
//
// 7. `Custom Hook`: `InfoCustomHookSample` 컴포넌트에서 `useInputs`라는 커스텀 Hook을 사용하여
//    여러 input의 상태 관리 로직을 재사용 가능한 함수로 분리합니다.
// Gemini 주석 추가 끝