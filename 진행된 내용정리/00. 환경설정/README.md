# 00 환경설정

## 진행순서
0. 진행된 내용정리 폴더 생성: 각 단계 별 진행된 내용 README.md로 정리
1. package.json 생성 : 프로젝트 정보 관리 파일 생성
2. tsconfig.json 생성: typescript 적용시 typescript에 대한 환경설정 정보모음
https://gist.github.com/SeonHyungJo/f93fd203f7dc5bb3657437a1cad29c48 참조하면 도움이 됨
3. 의존성 추가: 프로젝트에서 사용하는 라이브러리 추가(의존성 추가)
4. 실행스크립트를 package.json에 추가함
5. 환경변수 다루는 파일저장: .env
6. 디렉토리 구조 생성

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