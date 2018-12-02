import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Home from './components/home.vue'
import About from './components/about.vue'
import Room from './components/room.vue'
import err from './components/error.vue'
import Book from './components/book.vue'

import tools from './components/books/tools.vue'
import edu from './components/books/edu.vue'
import internet from './components/books/internet.vue'

export default new VueRouter({
    mode: 'hash',
    routes: [
        {
            path: '/home',
            component: Home
        },
        {
            path: '/about',
            // component: About
            components:{
                default:About,
                left:Home
            }
        }, {
            name: 'room',
            path: '/room/:id?',
            component: Room
        }, {
            path: '/err',
            component: err
        }, {
            path: '*',
            redirect(to) {
                console.log(to)
                if (to.path == '/') {
                    return '/home'
                } else {
                    return { path: '/err' }
                }
            }
        },{
            path:'/book',
            component: Book,
            children: [
                {
                    name:'tools',
                    path:'tools',
                    component:tools,
                }, {
                    name:'edu',
                    path:'edu',
                    component:edu,
                }, {
                    name:'internet',
                    path:'internet',
                    component:internet,
                }
            ]
        }

    ],
    linkActiveClass:'active',
    linkExactActiveClass:'exact'
})