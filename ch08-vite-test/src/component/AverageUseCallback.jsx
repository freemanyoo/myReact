import React, { useState, useMemo, useCallback } from 'react';

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

const AverageUseCallback = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState('');

  // 변경1, useCallback 이용해서, 함수를 기억해서 재사용하자.
  // 전
  // const onChange = (e) => {
  //   setNumber(e.target.value);
  // };
  // 후
  const onChange = useCallback((e) => {
    setNumber(e.target.value);
    console.log('onChange : useCallback ');
  }, []);

  // 변경 전
  // const onInsert = (e) => {
  //   const nextList = list.concat(parseInt(number));
  //   setList(nextList);
  //   setNumber('');
  // };
  // 후
  const onInsert = useCallback(
    (e) => {
      const nextList = list.concat(parseInt(number));
      setList(nextList);
      setNumber('');
      console.log('onInsert : useCallback ');
    },
    [number, list],
  );

  // 평균을 구할 때, useMemo 이용해보기.
  const avg = useMemo(() => getAverage(list), [list]);
  return (
    <div>
      <input value={number} onChange={onChange} />
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

export default AverageUseCallback;

// Gemini 주석 추가 시작
// 이 파일은 `AverageUseCallback` 컴포넌트로, `useCallback` Hook을 사용하여 함수를 재사용함으로써 성능을 최적화하는 예제입니다.
//
// `useCallback`은 `useMemo`와 유사하지만, 값 대신 **함수** 자체를 메모이제이션(기억)합니다.
// 컴포넌트가 리렌더링될 때마다 함수가 새로 생성되는 것을 방지하여 자식 컴포넌트에 props로 함수를 전달할 때
// 불필요한 리렌더링을 막아줍니다.
//
// 1. `const getAverage = (numbers) => { ... };`
//    - 숫자 배열의 평균을 계산하는 함수입니다. `console.log`를 통해 함수가 언제 호출되는지 확인할 수 있습니다.
//
// 2. `const [list, setList] = useState([]);`
//    - 사용자가 입력한 숫자들을 담을 배열 `list`와, 이 배열을 업데이트할 `setList` 함수입니다.
//
// 3. `const [number, setNumber] = useState('');`
//    - 현재 input에 입력된 값을 관리하는 `number` 상태와, 이를 업데이트할 `setNumber` 함수입니다.
//
// 4. `const onChange = useCallback((e) => { ... }, []);`
//    - `useCallback`으로 `onChange` 함수를 감쌌습니다.
//    - 두 번째 인자인 의존성 배열 `[]`이 비어있으므로, 이 함수는 컴포넌트가 최초 렌더링될 때 단 한 번만 생성됩니다.
//    - input의 값이 바뀔 때마다 `number` 상태만 변경되고, `onChange` 함수 자체는 새로 생성되지 않습니다.
//
// 5. `const onInsert = useCallback((e) => { ... }, [number, list]);`
//    - `useCallback`으로 `onInsert` 함수를 감쌌습니다.
//    - 의존성 배열에 `[number, list]`가 포함되어 있으므로, `number` 또는 `list` 상태가 변경될 때만 `onInsert` 함수가 새로 생성됩니다.
//    - 이렇게 함으로써 `onInsert` 함수는 최신 `number`와 `list` 상태를 참조할 수 있습니다.
//
// 6. `const avg = useMemo(() => getAverage(list), [list]);`
//    - `useMemo`를 사용하여 `list`가 변경될 때만 `getAverage` 함수를 호출하여 평균값을 다시 계산합니다.
//    - `onChange` 이벤트로 인해 컴포넌트가 리렌더링되어도, `list`가 바뀌지 않았다면 `getAverage`는 호출되지 않고 이전에 계산된 `avg` 값을 재사용합니다.
//
// 이처럼 `useCallback`은 함수 생성을, `useMemo`는 값 계산을 최적화하여 불필요한 작업을 줄이고 성능을 향상시키는 데 사용됩니다.
// Gemini 주석 추가 끝