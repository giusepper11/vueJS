import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false;
Vue.filter('trataString', (frase) => {
    //  const arr = frase.split(' ');
    // 	//  const arrf = [];
    // 	//  arr.forEach((v,i)=>{
    // 	// 	 arrf.push(v);
    // 	// 	 arrf.push(`(${v.length})`)
    // 	//  });
    // 	// return arrf.join(' ')
    return frase.split(' ').map(f => {
        return `${f} (${f.length})`
    }).join(' ')
});

new Vue({
    render: h => h(App),
}).$mount('#app');
