import { createApp } from 'vue';
import App from './app.vue';
import SmallCat from '@small-cat-ui/components';
const app = createApp(App);
app.use(SmallCat);
app.mount('#app');
