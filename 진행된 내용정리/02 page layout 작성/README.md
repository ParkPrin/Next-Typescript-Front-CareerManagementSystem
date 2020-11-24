# 02 page layout 설정

## 진행순서
1. layout 생성
2. material ui drawers를 이용한 layout 작업
3. 메뉴에 대한 dummyData를 주입시켜서 메뉴리스트 그리는 기능 구현


## layout 생성
1. 아래 경로에 PageLayout을 만듬
```
/layouts/PageLayout.tsx
```


## material ui drawers를 이용한 layout 작업
아래 URL을 참조함

https://material-ui.com/components/drawers/


## 메뉴리스트 그리는 기능 구현
기존 하드코딩으로 되어 있는 부분을 dummydata를 주입시켜서 
메뉴를 그리는 기능으로 변환함

```
dummydata 위치: utils/menu-sample-data.ts
dummydata 데이터타입 정의: interfaces/menulist/index.ts
```

## 데스크탑과 디바이스에 따른 레이아웃의 변화
데스크탑과 디바이스(테블릿PC, 스마트폰)에 따라서 레이아웃은 
달라져야 한다. 크롬의 디바이스모드로 데스크탑 레이아웃을 보면
형식이 맞지 않음을 알 수 있었다

적용한 조치
1) 디바이스 일때의 변수를 얻는다. - [참조한 내용](https://medium.com/100-articles-marathon/getting-device-type-in-next-js-e8c3534ca421)
2) 디바이스 변수에 따른 CSS 처리 및 조건부 렌더링을
 통하여 디바이스에 맞는 레이아웃으로 재구성한다
 
 