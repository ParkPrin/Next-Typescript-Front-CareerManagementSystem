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

