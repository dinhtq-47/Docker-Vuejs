import login from '../pages/admin/login'
import register from '../pages/admin/register'
import dashboard from '../pages/admin/dashboard'
import categori from '../pages/admin/categories/index'
import admin from '../pages/admin/index'

const routes = [
    
    
            {
                path: '/login', name: 'login', component: login
            },

            {
                path: '/register', name: 'register', component: register
            },

            {
                path: '/dashboard', name: 'dashboard', component: dashboard,

                children: [
                {
                    path: 'categori', name: 'categori', component: categori,
                }
                ]

                
            },

            {
                path: '/admin', name: 'admin', component: admin,  
            },

    
]

export default routes