import { createApp } from 'vue';

import App from './App.vue';
import router from './router';

router.beforeEach(function(to, from, next) {
  console.log('Global beforeEach')
  console.log(to, from)
  next()
})

const app = createApp(App)

app.use(router);
app.mount('#app');
