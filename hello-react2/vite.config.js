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
//  1. 필요한 모듈(라이브러리) 가져오기

//    1 import { defineConfig } from 'vite';
//    2 import react from '@vitejs/plugin-react';
//    3 import path from 'path';
//    4 import { fileURLToPath } from 'url';

//    * `defineConfig`: Vite 설정을 만들 때 사용하는 헬퍼 함수입니다. 코드 에디터에서 자동 완성 기능을 제공하여 오타를 줄이고 설정을 더 쉽게 작성할 수 있도록 도와줍니다.
//    * `react`: Vite가 React 코드를 이해하고 처리할 수 있도록 해주는 공식 플러그인입니다. JSX 문법 변환, 빠른 새로고침(HMR) 등의 핵심 기능을 담당합니다.
//    * `path`: Node.js에 기본으로 내장된 모듈로, 파일이나 폴더 경로를 다룰 때 사용되는 다양한 함수를 제공합니다. (예: 경로 합치기, 절대 경로 만들기 등)
//    * `fileURLToPath`: URL 형식을 파일 시스템 경로 형식으로 변환해주는 함수입니다. ES 모듈 환경에서 현재 파일의 경로를 얻기 위해 필요합니다.

//   2. 현재 파일의 절대 경로 계산하기

//    1 const __filename = fileURLToPath(import.meta.url);
//    2 const __dirname = path.dirname(__filename);

//   이 부분은 경로 별칭을 설정하기 위한 준비 단계입니다.

//    * `import.meta.url`: 현재 모듈(이 경우 vite.config.js 파일)의 URL 주소를 알려줍니다. (예: file:///C:/.../hello-react2/vite.config.js)
//    * `fileURLToPath(...)`: 위 URL 주소를 윈도우나 맥/리눅스에서 사용하는 일반적인 파일 경로로 바꿔줍니다. (예: C:\...\hello-react2\vite.config.js)
//    * `path.dirname(...)`: 파일의 전체 경로에서 파일 이름을 제외한 폴더 경로만 추출합니다. 결과적으로 __dirname 변수에는 이 프로젝트의 최상위 폴더(루트 디렉토리)의 절대 경로가
//      저장됩니다.

//   3. Vite 설정 내보내기

//    1 export default defineConfig({ ... });

//    * export default: 이 파일의 기본 내보내기(export)를 설정합니다. Vite는 실행될 때 이 defineConfig가 감싸고 있는 설정 객체를 찾아서 읽어들입니다.

//   4. 플러그인 설정

//    1 plugins: [react()],

//    * Vite가 사용할 추가 기능(플러그인)들을 배열 형태로 등록하는 곳입니다.
//    * react(): 여기에 React 플러그인을 추가함으로써, Vite는 이 프로젝트가 React로 만들어졌다는 것을 인지하고 React에 필요한 모든 처리를 자동으로 수행합니다.

//   5. 경로 해석(resolve) 설정

//    1 resolve: { ... }

//    * Vite가 import 구문 등에서 모듈(파일)의 경로를 어떻게 찾을지를 상세하게 설정하는 부분입니다.

//   6. 경로 별칭(alias) 설정

//    1 alias: {
//    2   '@': path.resolve(__dirname, 'src'),
//    3 },

//    * alias: 긴 경로를 짧은 별명으로 줄여서 사용할 수 있게 해주는 기능입니다.
//    * '@': ... : @ 라는 별칭을 설정하겠다는 의미입니다.
//    * path.resolve(__dirname, 'src'): @ 별칭이 어떤 실제 경로를 가리킬지를 정합니다.
//        * __dirname (프로젝트 루트 폴더)와 'src'를 합쳐서 src 폴더의 절대 경로를 만듭니다.
//        * 결과적으로, 프로젝트의 다른 파일에서 import Component from '@/components/MyComponent' 와 같이 코드를 작성하면, Vite는 이것을 import Component from 
//          '/절대경로/to/project/src/components/MyComponent' 와 같이 해석하여 올바른 파일을 찾아냅니다.

//   ---

//   요약

//   이 vite.config.js 파일은 Vite 빌드 도구에게 다음과 같은 지시를 내리는 설정 파일입니다.

//    1. React 프로젝트이므로 React 플러그인을 사용하여 코드를 처리해 주세요.
//    2. 코드에서 @/ 라는 경로를 만나면, 그것은 프로젝트 최상위 폴더의 `src` 폴더를 의미하는 것이니 그곳에서 파일을 찾아주세요.

//   이를 통해 개발자는 복잡한 상대 경로(../../components/MyComponent) 대신 깔끔한 절대 경로 별칭(@/components/MyComponent)을 사용하여 코드의 가독성과 유지보수성을 높일 수 있습니다. 