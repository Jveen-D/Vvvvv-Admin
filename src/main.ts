import {createApp} from 'vue';
import router from "./router";
import App from './App.vue';
import 'normalize.css';
import {store} from '@/store/store';
// Layout
import 'ant-design-vue/lib/layout/style/index.css';
import Layout from 'ant-design-vue/lib/layout';
// Menu
import 'ant-design-vue/lib/menu/style/index.css';
import Menu from 'ant-design-vue/lib/menu';
createApp(App)
    .use(Layout)
    .use(Menu)
    .use(store)
    .use(router)
    .mount('#app');
