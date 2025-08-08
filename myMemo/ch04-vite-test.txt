250807

EventPractice 자식컴포넌트 호출

onChange: 데이터가 변경이 되었을 경우

constructor()는 클래스로부터 객체를 만들 때 필요한 초기 설정 작업을 수행하는 곳입니다.

# App.jsx

-   메인 애플리케이션 컴포넌트
-   `EventPractice` (클래스형) 및 `EventPractice_Function` (함수형) 자식 컴포넌트 렌더링
-   다양한 컴포넌트 유형의 이벤트 핸들링 예제 통합

# EventPractice_Function.jsx (함수형 컴포넌트)

-   `useState` Hook을 이용한 상태 관리
    -   여러 입력 필드 상태를 하나의 객체로 관리 (`useState`에 객체 전달)
    -   `const [form, setForm] = useState({ username: "", message: "" });`
-   이벤트 핸들러 (`onChange`)
    -   `e.target.name`을 활용하여 여러 입력 필드 상태를 동적으로 업데이트
    -   Spread 연산자 (`...form`)를 사용하여 기존 상태를 복사하고 특정 필드만 업데이트
-   키보드 이벤트 (`onKeyPress`)
    -   `e.key === "Enter"`를 통해 Enter 키 입력 감지 및 특정 함수 호출
-   `onClick` 이벤트: `alert` 메시지 표시 및 입력 필드 초기화

# EventPractice.jsx (클래스형 컴포넌트)

-   `state` 객체를 이용한 상태 관리
    -   `state = { username: "", message: "" };`
-   `constructor` 및 `this` 바인딩
    -   이벤트 핸들러 (`handleChange`, `handleClick`)에서 `this` 컨텍스트 유지를 위해 `bind(this)` 사용
-   이벤트 핸들러 (`handleChange`)
    -   `e.target.name`을 활용하여 여러 입력 필드 상태를 동적으로 업데이트
-   키보드 이벤트 (`handleKeyPress`)
    -   `e.key === "Enter"`를 통해 Enter 키 입력 감지 및 특정 함수 호출
-   `onClick` 이벤트: `alert` 메시지 표시 및 입력 필드 초기화

# joinForm.jsx