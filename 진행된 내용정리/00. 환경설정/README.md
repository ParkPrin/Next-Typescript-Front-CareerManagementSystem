# 00 환경설정

## 진행순서
0. 진행된 내용정리 폴더 생성: 각 단계 별 진행된 내용 README.md로 정리
1. package.json 생성 : 프로젝트 정보 관리 파일 생성
2. tsconfig.json 생성: typescript 적용시 typescript에 대한 환경설정 정보모음
https://gist.github.com/SeonHyungJo/f93fd203f7dc5bb3657437a1cad29c48 참조하면 도움이 됨
3. 의존성 추가: 프로젝트에서 사용하는 라이브러리 추가(의존성 추가)
4. 실행스크립트를 package.json에 추가함
5. 프로젝트 구조 생성
6. ESLint, Prettier 설정
7. 오류관련 의존성 처리
8. API 관련 의존성 처리

### 명령어 모음
```
1. package.json 생성
$ yarn init

2. tsconfig.json 생성
$ touch tsconfig.json

해당 내용은 아래와 같음
{
    "compilerOptions": {  // 컴파일 옵션
        "allowJs": true,    //js 파일 포함여부
        "alwaysStrict": true,   // 항상 엄격한 규칙적용 여부
        "esModuleInterop": true,    // import default를 사용 가능하게 설정
        "forceConsistentCasingInFileNames": true,   동일 파일에 대해 일관되지 않은 참조 허용하지 않음
        "isolatedModules": true,    // 각 파일을 별도의 모듈로 변환
        "jsx": "preserve",      // jsx
        "lib": ["dom", "es2017"],
        "module": "esnext",     // 모듈 설정
        "moduleResolution": "node",     // 모듈 (검색)해석 방식 설정
        "noEmit": true,     // 출력을 표시하지 않음
        "noFallthroughCasesInSwitch": true,
        "noUnusedLocals": true,
        "noUnusedParameters": true,
        "resolveJsonModule": true,
        "skipLibCheck": true,
        "strict": true,
        "target": "esnext"
    },
    "exclude": ["node_modules"],
    "include": ["**/*.ts", "**/*.tsx"]
}  

3. 의존성 추가
$ yarn add next react react-dom @types/node @types/react @types/react-dom typescript
// 개발환경에서만 구동하는 의존성
$ yarn add typescript -D

4. 실행스크립트 추가
"scripts": {
    "dev": "next",
    "build": "next build",
    "start": "next start",
    "type-check": "tsc"
  }
```

## 프로젝트 구조

```
/root
    / components - 각 페이지를 이루는 컴포넌트
    / layouts     - 페이지 layout의 모음
    / pages      - 각 페이지
    / utils      - dummydata, API에서 사용할 공통데이터 모음
    / interfaces - typescript에서 사용하는 데이터 타입 정의된 형식 모음
    / 진행된 내용정리  - 각 단계 별 진행된 내용 README.md로 정리

.env : 개발시 프로젝트 내부에서 사용하는 시스템 변수 모음

package.json : 프로젝트 메타 정보, 스크립트 정보 및 의존성 관리
README.md : 프로젝트 메뉴얼 정보
tsconfig.json : typescript 사용에 대한 규칙정의 

```

## 개발환경별 실행 명령어

```
1) 개발서버 환경
$ next dev
OR
$ yarn run dev

2) 운영 환경
$ next build
then 
$ next start

3) 스테이징 환경
$ next build
OR
$ yarn run build
```

## ESLint, Prettier 설정

[참조페이지: [Next.js] 프로젝트 기초 세팅하기 - ESLint, Prettier 는 필수!](https://velog.io/@mayinjanuary/Next.js-%EC%84%B8%ED%8C%85%ED%95%98%EA%B8%B0-ESLint-Prettier-%EC%84%A4%EC%A0%95)

eslint-plugin-import : ES6 의 import/export syntax 체크, 파일 경로나 import 이름을 잘못 입력하는지 여부를 체크해주는 lint 플러그인<br>
eslint-plugin-jsx-a11y : 리액트 element 의 접근성 이슈를 짚어 lint 해주는 플러그인. 예를 들자면 interactive 하지 않은 엘리먼트에 click 핸들러가 달려 있다.<br>
eslint-plugin-react : 리액트 규칙들을 추가해주는 플러그인<br>
eslint-plugin-import : 리액트 hooks 규칙들을 추가해 주는 플러그인<br>

```
yarn add -D eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks
```

eslint-config-prettier : ESLint의 formatting 관련 설정 중 Prettier와 충돌하는 부분을 비활성화 Prettier 에서 문법 관련된 ESlint 규칙을 사용하지 않게 되기 때문에 ESLint 는 자바스크립트 문법을 담당하고, 코드 스타일 정리는 Prettier 가 담당<br>
eslint-plugin-prettier : 원하는 형식의 formatting 을 설정<br>

```
yarn add -D babel-eslint eslint-plugin-babel 
```

babel-eslint : Babel 이 서포트해주는 코드에 ESLint 를 적용할 수 있도록. 한마디로, ES6 이상의 자바스크립트, flow type 등의 feature 를 지원. ESLint 만 깔 경우, ES6 / JSX / 객체 rest, spread 까지의 문법만 지원<br>
eslint-plugin-babel : 더 많은, 실험중인 feature 까지 지원해주는 플러그인. babel-eslint 를 보완<br>

```
yarn add -D babel-eslint eslint-plugin-babel 
```

.eslintrc.json

```
{
  "env": {
    "browser": true,
    "es6": true,
    "node": true
  },
  "parser": "babel-eslint",
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "airbnb",
    "plugin:prettier/recommended"
  ],
  "settings": {
    "react": {
      "version": "detect"
    }
  },
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "plugins": ["react", "react-hooks", "prettier"],
  "rules": {
    "react/react-in-jsx-scope": 0,
    "react/prefer-stateless-function": 0,
    "react/jsx-filename-extension": 0,
    "react/jsx-one-expression-per-line": 0,
    "no-nested-ternary": 0
  }
}
```

"env" : 활성화하고싶은 환경을 설정. 현재 브라우저, node, es6 환경이 활성화되어 있다.<br>
"parser" : parser 를 설정. 설정하지 않을 경우 Espree가 기본 parser 로 설정. 보통 Espree, Babel-ESLint, @typescript-eslint/parser 을 사용함 (참고)<br>
"extends" : extension 파트. 이 extension 파트에 Prettier 를 꼭 추가해야 Prettier 를 사용할 수 있다. Airbnb 설정을 사용하기로 했으니 Airbnb 도 추가함.<br>
"rules" : 필요한 설정, 필요없는 설정을 관리하는 파트 1은 사용, 0은 사용하지 않음. ESLint 를 사용하다 별로 필요는 없는데 영 성가시게 하는 ESLint 에러가 있다면 0 으로 설정해 비활성화함. 2~4번째 줄은 eslint-config-prettier 을 위한 설정임<br>


## 오류관련 의존성 처리

1, mage Optimization 오류 처리

```
yarn add sharp
```

## API 관련 의존성 처리

```
yarn add cookie
```