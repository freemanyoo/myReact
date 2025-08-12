import React, { useState, useMemo } from 'react';

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

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState('');

  const onChange = (e) => {
    setNumber(e.target.value);
  };

  const onInsert = (e) => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber('');
  };

  // 추가 부분, useMemo 사용하기.
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
        {/* 변경전 단순 호출 */}
        {/*<b>평균값: </b> {getAverage(list)}*/}
        {/* 변경 후, useMemo를 이용해서, 특정 조건에서만 연산하기. */}
        <b>평균값: </b> {avg}
      </div>
    </div>
  );
};

export default Average;

// Gemini 주석 추가 시작
// 이 파일은 `Average` 컴포넌트로, `useMemo` Hook을 사용하여 성능을 최적화하는 예제입니다.
//
// `useMemo`는 "memoization"(메모이제이션)의 줄임말로, 비용이 많이 드는(오래 걸리는) 연산의 결과값을
// 캐싱(기억)해두고, 필요할 때 재사용하는 기술입니다. 이를 통해 불필요한 연산을 줄일 수 있습니다.
//
// 1. `const getAverage = (numbers) => { ... };`
//    - 숫자 배열의 평균을 계산하는 함수입니다. 이 함수는 실행될 때마다 콘솔에 메시지를 출력하여
//      언제 호출되는지 쉽게 확인할 수 있습니다. (비용이 많이 드는 연산을 시뮬레이션)
//
// 2. `const [list, setList] = useState([]);`
//    - 사용자가 입력한 숫자들을 담을 배열 `list`와, 이 배열을 업데이트할 `setList` 함수입니다.
//
// 3. `const [number, setNumber] = useState('');`
//    - 현재 input에 입력된 값을 관리하는 `number` 상태와, 이를 업데이트할 `setNumber` 함수입니다.
//
// 4. `const onChange = (e) => { ... };`
//    - input의 값이 변경될 때마다 `number` 상태를 업데이트합니다.
//    - **중요:** `onChange`가 호출되어 `setNumber`로 상태를 업데이트하면 컴포넌트가 리렌더링됩니다.
//
// 5. `const onInsert = (e) => { ... };`
//    - `등록` 버튼을 클릭하면 현재 `number`를 `list` 배열에 추가하고, input을 비웁니다.
//
// 6. `const avg = useMemo(() => getAverage(list), [list]);`
//    - `useMemo` Hook의 핵심 부분입니다.
//    - 첫 번째 인자: `() => getAverage(list)`는 값을 계산하는 함수입니다.
//    - 두 번째 인자: `[list]`는 의존성 배열(dependency array)입니다.
//    - `useMemo`는 의존성 배열의 값(`list`)이 변경되었을 때만 첫 번째 인자로 전달된 함수를 실행합니다.
//    - 만약 `list`가 변경되지 않았다면 (예: `number` 값만 바뀌어 리렌더링될 때), 이전에 계산해둔 결과값(`avg`)을
//      그대로 재사용하고 `getAverage` 함수는 호출하지 않습니다.
//    - 따라서, 콘솔에 "평균값 계산 중입니다.." 메시지는 `등록` 버튼을 눌러 `list`가 실제로 변경될 때만 나타납니다.
//
// 7. 렌더링 부분:
//    - `<b>평균값: </b> {avg}`: `useMemo`를 통해 계산되거나 재사용된 평균값을 화면에 표시합니다.
// Gemini 주석 추가 끝