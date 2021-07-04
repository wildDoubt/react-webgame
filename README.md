# react-webgame
인프런 [웹 게임을 만들며 배우는 React][lecture]를 참고하여 만들었습니다. 

## 기본 환경 설정

### npm 초기화

1. `npm init`

2. `npm i react react-dom`

3. `npm i -D webpack webpack-cli`

4. `webpack.config.js` 파일 생성

5. `client.jsx` 파일 생성: 스크립트로 불러오지 않고 모듈 형태로 가져옴

6. 지원할 브라우저 설정은 [Browerslist][browserslist]에서 확인가능

7. 웹팩 핫 리로딩

- `npm i react-refresh @pmmmwh/react-refresh-webpack-plugin -D`
- `npm i - D webpack-dev-server`
    ```json
    "scripts": {
        "dev": "webpack serve --env development"
    },
    ```
    이렇게 변경
```json
  "dependencies": {
    "react": "^17.0.2",
    "react-dom": "^17.0.2"
  },
  "devDependencies": {
    "babel-loader": "^8.2.2",
    "@babel/core": "^7.14.6",
    "@babel/preset-env": "^7.14.7",
    "@babel/preset-react": "^7.14.5",
    "webpack": "^5.41.0",
    "webpack-cli": "^4.7.2"
  }
```

- dependencies: 실제 서비스할 때 사용하는 라이브러리
- devDependencies: 개발할 때만 필요한 라이브러리

### babel & webpack 설정

`npm i -D @babel/core @babel/preset-env @babel/preset-react`

`npm i babel-loader`

- babel/core: 바벨 핵심
- babel/preset-env: 환경에 맞게 알아서 맞춰줌
- babel/preset-react: jsx를 바꿔주는 거
- babel-loader: babel이랑 webpack이랑 연결

[browserslist]: https://github.com/browserslist/browserslist
[lecture]: https://www.inflearn.com/course/web-game-react
