import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';

// Vuetifyのインポート
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

// Vuetifyのインスタンスを作成
const vuetify = createVuetify({
  components,
  directives,
});

createApp(App)
  .use(createPinia())
  .use(router)
  .use(vuetify)
  .mount('#app');