import React, { useState, useMemo, useRef } from 'react';

// 화면을 그려주는 기능,
// 연산한다.(실제로 예를 무거운 동작을 한다. 예시로 단순 계산)
// 만약 결과가 같으면, 메모했던 내용을 재사용을 한다, 또 계산을 안한다.

// 평균을 구하는 메서드 정의
const getAverage = (numbers) => {
  console.log('평균값 계산 중입니다..');
  if (numbers.length === 0) return 0;
  // 0812_7-reduce  함수.txt 참고하기.
  const sum = numbers.reduce((acc, cur) => acc + cur, 0);
  return sum / numbers.length;
};

const AverageUseRef = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState('');

  // 접근 하고 싶은 요소 설정.
  // useRef, 순서1
  const inputEl = useRef(null);

  const onChange = (e) => {
    setNumber(e.target.value);
  };

  const onInsert = (e) => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber('');
    // useRef, 순서2
    // 숫자를 추가 후, 해당 커서가 계속 깜박(포커스) 되게 하기.
    // ref 를 이용해서, 직접 해다 input 태그의 포커스를 사용하기.
    inputEl.current.focus();
  };

  // 평균을 구할 때, useMemo 이용해보기.
  const avg = useMemo(() => getAverage(list), [list]);
  return (
    <div>
      {/*useRef, 순서3  접근하기 위한 요소를 설정. ref 설정. */}
      <input value={number} onChange={onChange} ref={inputEl} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        {/*<b>평균값: </b> {getAverage(list)}*/}
        <b>평균값: </b> {avg}
      </div>
    </div>
  );
};

export default AverageUseRef;

// Gemini 주석 추가 시작
// 이 파일은 `AverageUseRef` 컴포넌트로, `useRef` Hook을 사용하여
// 특정 DOM 요소에 직접 접근하고 조작하는 방법을 보여주는 예제입니다.
// `useRef`는 주로 두 가지 용도로 사용됩니다:
// 1. 렌더링에 영향을 주지 않는 값을 저장할 때 (이전 `RefSample.jsx` 예시)
// 2. DOM 요소에 직접 접근할 때 (현재 예시)
//
// 1. `const getAverage = (numbers) => { ... };`
//    - 숫자 배열의 평균을 계산하는 함수입니다. `useMemo`와 함께 사용되어 성능을 최적화합니다.
//
// 2. `const [list, setList] = useState([]);`
//    - 사용자가 입력한 숫자들을 담을 배열 `list`와, 이 배열을 업데이트할 `setList` 함수입니다.
//
// 3. `const [number, setNumber] = useState('');`
//    - 현재 input에 입력된 값을 관리하는 `number` 상태와, 이를 업데이트할 `setNumber` 함수입니다.
//
// 4. `const inputEl = useRef(null);`
//    - `useRef`를 호출하여 `ref` 객체를 생성합니다. 초기값은 `null`로 설정합니다.
//    - 이 `inputEl` `ref` 객체는 나중에 `<input>` DOM 요소에 연결될 것입니다.
//
// 5. `const onChange = (e) => { ... };`
//    - input의 값이 변경될 때마다 `number` 상태를 업데이트합니다.
//
// 6. `const onInsert = (e) => { ... };`
//    - `등록` 버튼을 클릭하면 실행되는 함수입니다.
//    - `list`에 새로운 숫자를 추가하고 `number` 상태를 초기화합니다.
//    - `inputEl.current.focus();`:
//      - **핵심 부분:** `inputEl.current`는 `ref`가 연결된 실제 DOM 요소(여기서는 `<input>` 태그)를 가리킵니다.
//      - `.focus()` 메서드를 호출하여 숫자를 추가한 후 input 필드에 자동으로 포커스를 맞춥니다.
//      - 이를 통해 사용자가 다음 숫자를 바로 입력할 수 있도록 사용자 경험을 향상시킵니다.
//
// 7. `const avg = useMemo(() => getAverage(list), [list]);`
//    - `useMemo`를 사용하여 `list`가 변경될 때만 평균값을 다시 계산합니다.
//
// 8. 렌더링 부분:
//    - `<input value={number} onChange={onChange} ref={inputEl} />`:
//      - `<input>` 태그에 `ref={inputEl}` 속성을 추가하여 `inputEl` `ref` 객체를 이 DOM 요소에 연결합니다.
//      - 이제 `inputEl.current`를 통해 이 `<input>` 요소에 직접 접근할 수 있습니다.
//
// `useRef`를 사용하면 React의 일반적인 데이터 흐름(props와 state)을 벗어나
// 직접적으로 DOM을 조작해야 할 때 유용하게 활용할 수 있습니다.
// Gemini 주석 추가 끝