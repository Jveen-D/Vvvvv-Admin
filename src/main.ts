import {createApp} from 'vue';
import router from "./router";
import App from './App.vue';
import 'normalize.css';
import {store} from '@/store/store';
// layout
import 'ant-design-vue/lib/layout/style/index.css';
import layout from 'ant-design-vue/lib/layout';
// menu
import 'ant-design-vue/lib/menu/style/index.css';
import menu from 'ant-design-vue/lib/menu';
// upload
import 'ant-design-vue/lib/upload/style/index.css';
import upload from 'ant-design-vue/lib/upload';
// Message
import 'ant-design-vue/lib/message/style/index.css';
import message from 'ant-design-vue/lib/message';
const app = createApp(App);
app.use(layout)
    .use(menu)
    .use(upload)
    .use(store)
    .use(router)
    .mount('#app');
app.config.globalProperties.$message = message;
