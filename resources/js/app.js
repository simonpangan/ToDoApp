

require('./bootstrap');


window.Vue = require('vue').default;


Vue.component('example-component', require('./components/HomeComponent.vue').default);


//VUE-ROUTER
import router from './Router';
// V-FORM
import { Form, HasError, AlertError } from 'vform'
window.Form = Form;
Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)


const app = new Vue({
    el: '#app',
    router,
});


