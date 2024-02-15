# jay_eat_cake

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

# 툴 체인 및 설치 옵션
## vue install
```sh
vue create jay_eat_cake
```
```sh
Vue CLI v5.0.8
? Please pick a preset: Manually select features
? Check the features needed for your project: (Press <space> to select, <a> 
to toggle all, <i> to invert selection, and <enter> to proceed)
 ( ) Babel
 ( ) TypeScript
 (*) Progressive Web App (PWA) Support
 (*) Router
 ( ) Vuex
 ( ) CSS Pre-processors
 ( ) Linter / Formatter
 ( ) Unit Testing
 ( ) E2E Testing

Vue CLI v5.0.8
? Please pick a preset: Manually select features
? Check the features needed for your project: PWA, Router
? Choose a version of Vue.js that you want to start the project with (User arrow keys)
>3.x
2.x

Vue CLI v5.0.8
? Please pick a preset: Manually select features
? Check the features needed for your project: PWA, Router
? Choose a version of Vue.js that you want to start the project with 3.x    
? Use history mode for router? (Requires proper server setup for index fallback in production) 
  (Y/n) y
? Where do you prefer placing config for Babel, ESLint, etc.? 
In dedicated config files
> Inpackage.json
? Save this as a preset for future projects? 
  (y/N) n
```

```sh
cd jay_eat_cake
```

### Compile and Hot-Reload for Development
```sh
npm run dev
```
or
```sh
npm run serve
```

## Firebase install
```sh
npm install -g firebase-tools
```

## Project Setup
```sh
npm install
```

## Firebase install
```sh
npm install -g firebase-tools
```

## PWA : Installing vite-plugin-pwa
```sh
npm install -D vite-plugin-pwa
```

### Compile and Minify for Production
```sh
npm run build
firebase deploy
```
# 설치한 모듈
## vue.js fontawesome install
vue에서 fontawesome을 사용하기 위한 기본 라이브러리 설치
(맨 아래 라이브러리의 경우 설치된 vue 버전에 따라 2 또는 3 선택)
```sh
npm i --save @fortawesome/fontawesome-svg-core
npm i --save @fortawesome/free-solid-svg-icons
npm i --save @fortawesome/free-regular-svg-icons
npm i --save @fortawesome/free-brands-svg-icons
npm i --save @fortawesome/vue-fontawesome@latest-3
```
## src/assets/common.js 추가 작성 내용
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;500;600&family=Nunito:wght@200;500;600&display=swap');<br>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css');<br>
@import url('https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css');<br>

## src/main.js fontawesome 추가 작성 내용(기존 내용 포함)
import './assets/common.css'
import './registerServiceWorker'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import specific icons */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import './registerServiceWorker'

/* add icons to the library */
library.add(fas, fab, far)

const app = createApp(App)

/* add font awesome icon component */
app.component('font-awesome-icon', FontAwesomeIcon)

app.use(router)

app.mount('#app')

## index.html 작성된 코드 안에 Bootstrap js 내용 추가
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <link rel="icon" href="/favicon.ico">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>JAY EAT CAKE</title>
  <link rel="apple-touch-icon" href="/src/assets/icons/favicon.ico" sizes="192x192">
  <link rel="mask-icon" href="/src/assets/logo.svg" color="#FFFFFF">
</head>

<body>
  <div id="app"></div>
  <script type="module" src="/src/main.js"></script>
  <script type="text/javascript"
    src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>


