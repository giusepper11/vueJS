import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false;

Vue.directive('destaque', {
    bind(el, binding, vNode) {
        let atraso = 0;
        if (binding.modifiers['atrasar']) {
            atraso = 3000
        }
        setTimeout(() => {

            // el.style.backgroundColor = 'lightgreen';
            if (binding.arg === 'fundo') {
                el.style.backgroundColor = binding.value
            } else {
                el.style.color = binding.value
            }
        }, atraso);

    }
});

new Vue({
    render: h => h(App),
}).$mount('#app')
