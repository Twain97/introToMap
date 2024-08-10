import { createRouter, createWebHashHistory } from 'vue-router'
import landingPage from '@/Pages/landingPage.vue'
import { auth } from '@/firebase/firebase'
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landingPage',
      component: landingPage
    },
    {
      path: '/home',
      name: 'home',
      meta: {requiresAuth : true},
      component: () => import('@/Pages/Home.vue')
    },
    {
      path:'/load',
      name:"load",
      component:()=>import('@/views/Loading.vue')
    }
  ]
})

auth.onAuthStateChanged((user)=>{
  if(!user){
    return router.push('/')
   }
  

  router.beforeEach(async(to)=>{
    
    if(to.path == '/' && auth.currentUser){
      return router.push(router.currentRoute)
    }
    if(to.path == '/Home' && !auth.currentUser){
      return router.push('/')
    }
  })
})
export default router
