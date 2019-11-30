import Vue from 'vue'
import axios from 'axios'

// Comentando para criar instancia individual do axios
// axios.defaults.baseURL = 'https://curso-vue-e6bbc.firebaseio.com/';
// axios.defaults.headers.common['Authorization'] = 'asdvd';
// axios.defaults.headers.get['Accepts'] = 'application/json';

Vue.use(
    {
        install(Vue) {
            Vue.prototype.$http = axios.create({
                baseURL: 'https://curso-vue-e6bbc.firebaseio.com/',
                headers: {

                    Authorization: 'asdasdasdasd'

                }
            });
            Vue.prototype.$http.interceptors.request.use(config => {
                console.log(config.method);
                // if (config.method === 'post') {
                //     config.method = 'put'
                // }
                return config
            }, error => Promise.reject(error));

            Vue.prototype.$http.interceptors.response.use(res => {
                // const array = [];
                // for (let chave in res.data) {
                //     array.push({id: chave, ...res.data[chave]})
                // }
                // res.data = array;
                return res
            }, error => Promise.reject(error))
        }
    }
)