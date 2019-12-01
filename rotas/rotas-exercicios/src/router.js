import Vue from 'vue'
import Router from 'vue-router'
import Inicio from "./components/Inicio";
// import UsuarioLista from "./components/usuario/UsuarioLista";
// import UsuarioDetalhe from "./components/usuario/UsuarioDetalhe";
// import UsuarioEditar from "./components/usuario/UsuarioEditar";
import Menu from "./components/template/Menu";
import MenuAlt from "./components/template/MenuAlt";
// import Usuario from "./components/usuario/Usuario";

Vue.use(Router);

const UsuarioLista = () => import(/*webpackChunkName:"usuario"*/'./components/usuario/UsuarioLista');
const UsuarioDetalhe = () => import(/*webpackChunkName:"usuario"*/'./components/usuario/UsuarioDetalhe');
const Usuario = () => import(/*webpackChunkName:"usuario"*/'./components/usuario/Usuario');
const UsuarioEditar = () => import(/*webpackChunkName:"usuario"*/'./components/usuario/UsuarioEditar');

const router = new Router({
    mode: 'history',
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        }
        if (to.hash) {
            return {selector: to.hash}
        }
        return {x: 0, y: 0}
    },
    routes: [
        // {path: '/', component: Inicio, name: 'inicio'},
        {
            path: '/', components: {default: Inicio, menu: Menu}, name: 'inicio'
        },
        {
            // path: '/usuario', component: Usuario, props: true, children: [
            path: '/usuario', components: {
                default: Usuario,
                menu: MenuAlt,
                menuInferior: MenuAlt,
            }, props: true, children: [
                {path: '', component: UsuarioLista},
                {
                    path: ':id', component: UsuarioDetalhe, props: true, beforeEnter: (to, from, next) => {//navegacao local
                        console.log('antes de entrar na rota usuario detalhe');
                        next()
                    }
                },
                {path: ':id/editar', component: UsuarioEditar, props: true, name: 'editarUsuario'},
            ]
        },
        {path: '/redirecionar', redirect: '/usuario'},
        {path: '*', redirect: '/'},
    ]
})

//forma global
router.beforeEach((to, from, next) => {
    console.log('antes das rotas -> global');
    next()
    // if (to.path !== '/usuario') {
    //     next('/usuario')
    // } else {
    //     next()
    // }
});
export default router