# 00 환경설정

## 진행순서
1. package.json 생성 : 프로젝트 정보 관리 파일 생성
2. tsconfig.json 생성: typescript 적용시 typescript에 대한 환경설정 정보모음
https://gist.github.com/SeonHyungJo/f93fd203f7dc5bb3657437a1cad29c48 참조하면 도움이 됨
3. 의존성 추가: 프로젝트에서 사용하는 라이브러리 추가(의존성 추가)
4. 실행스크립트를 package.json에 추가함
5. 환경변수 다루는 파일저장: .env
6. pages 폴더 추가 : 도메인 단위의 페이지 모음
7. componenets 폴더 추가: 페이지의 구성요소인 컴포넌트 모음
8. interface 폴더 추가: 도메인 정의함
9. utils: 공통 로직, dummydata 모음
10. ./pages/index.tsx 생성 

## 명령어 모음
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
$ yarn add next react react-dom @types/node  @types/react @types/react-dom typescript

4. 실행스크립트 추가
"scripts": {
    "dev": "next",
    "build": "next build",
    "start": "next start",
    "type-check": "tsc"
  }
5. 

```