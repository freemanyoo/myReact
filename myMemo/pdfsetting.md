#리액트 #깃주소
깃주소 : https://github.com/lsy3709/React-WorkSpace-k6-0806

수업 자료 링크
1 https://gamma.app/docs/y3wdulkrqxh9dom
2 0-리액트 개발 환경 설정 가이드
https://gamma.app/docs/u776hqn2hm1imj3
3 0-JavaScript 배열 메서드 마스터하기
https://gamma.app/docs/5b4vaqihaeronv3
4 1자바스크립트와 리액트
https://gamma.app/docs/idsy8p3fbzlsi5d
5 2 JSX 이해하기
https://gamma.app/docs/780r22dgw9o77be
6 3 리액트 컴포넌트 기초
https://gamma.app/docs/satyu29ojofuh4z
7 4 리액트 이벤트 핸들링
https://gamma.app/docs/bw74j6fih8hevx0
8 5 DOM에 이름 달기: ref 사용법
https://gamma.app/docs/4p7czz4jbs9biv2
9 6 리액트에서 컴포넌트 반복하기
https://gamma.app/docs/bsmo17oyd5i9o4o
10 7 컴포넌트의 라이프사이클 메서드
https://gamma.app/docs/x872sx87kyu9uuz
11 8 리액트 - Hooks 핵심 요약
https://gamma.app/docs/f067imafgjuv4v1

8 리액트 - Hooks 핵심 요약
리액트 v16.8에서 도입된 Hooks는 함수 컴포넌트에서도 state와 생명주기 기능을 사용할 수 있게 해주는 혁신적인 기능입니다. 클래스형 컴포넌트 없이도 대부분의 기능을 구현할 수 있어 코드의 간결성과 재사용성을 크게 향상시켰습니다.
gamma.app
12 9 리액트 컴포넌트 스타일링 핵심 요약
https://gamma.app/docs/hzw3563tm0i3o1z
13 10 리액트 일정 관리 웹 애플리케이션 만들기
https://gamma.app/docs/0wr1gw67tvzdvu9
14 11 리액트 컴포넌트 성능 최적화 핵심 요약
https://gamma.app/docs/wcljvnu2s8jo8wa

11 리액트 컴포넌트 성능 최적화 핵심 요약
리액트 애플리케이션에서 불필요한 리렌더링은 성능 저하의 주요 원인입니다. 2,500개 항목 중 1개만 수정해도 모든 컴포넌트가 리렌더링되는 문제를 해결하여 렌더링 시간을 271ms에서 4.6ms로 단축할 수 있습니다.
gamma.app
15 12 immer로 더 쉽게 불변성 유지하기
https://gamma.app/docs/zemao5whnk9gipn
16 13 리액트 라우터로 SPA 개발하기
https://gamma.app/docs/jji45zcqdrscvxh
17 14 React로 뉴스 뷰어 만들기
https://gamma.app/docs/lltn274e4w95gf1
18 5 React Context API 완벽 가이드
https://gamma.app/docs/g1b799sme71inkk


기본 환경 설정
vscode 용
yarn create vite 프로젝트명 --template react
yarn create vite hello-react2 --template react

1
포맷팅 설정.
방법1)
Prettier-Code formatter: 코드 스타일 자동 정리 도구.
f1-> format -> Prettier 확인
방법2)
해당 리액트 프로젝트 폴더에 들어가서 -> 파일명: .prettierrc , 생성.
예시)설정
{
"singleQuote":true, // 작은 따옴표 사용
"semi": true, // 문장 끝에 ; 세미콜론을 항상 붙임
"useTabs": false, // 들여쓰기 탭 대신, 스페이스 사용.
"tabWidth":2, // 들여쓰기, 기본 4칸, 2칸씩
"trailingComma":"all", // 마지막 요소에 항상 콤마 붙이기.
"printWidth" :80 // 한줄 최대 길이 80자로 제한. , 자동 줄바꿈 처리.
}

2
저장시 자동 정렬
기본설정 -> 설정 ->format on save 체크

3
기본 설정이고,
- 경로 인식, 자동 완성, 기능
루트디렉토리
jsconfig.json
{
"compilerOptions" : {
"target":"es6"
}
}

초반에 설정이 어려우면, 밑에 방법 생략해도 괜찮음, 그냥 넘어가도 됨. 
방법2: 우리는 이설정하기. )
vite + React ,

파일명 : vite.config.js
// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // Vue 등 다른 프레임워크는 바꿔주세요
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
plugins: [react()],
resolve: {
alias: {
'@': path.resolve(__dirname, 'src'), // @는 src/ 폴더로 연결
},
},
});

파일명 : jsconfig.json
// jsconfig.json
{
"compilerOptions": {
"baseUrl": ".",
"paths": {
"@/*": ["src/*"]
}
},
"exclude": ["node_modules", "dist"]
}