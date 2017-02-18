import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// ===================== Pages Components ======================
import Hello from './components/Hello'
import PageA from './components/PageA'
import Login from './components/Login'

// ==================== Router registration ====================
export default new Router({
  mode: 'history',
  routes: [
    { 
    	path: '/', 
    	component: Hello 
	},{ 
    	path: '/login', 
    	component : Login
	},{ 
    	path: '/article/:id', 
    	component : PageA
	},{ 
    	path: '*', 
    	redirect: '/'
	}
  ]
})
