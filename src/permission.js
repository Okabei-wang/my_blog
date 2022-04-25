import router from './router'
import store from './store/index'

router.beforeEach((to, from, next) => {
    return next()
})