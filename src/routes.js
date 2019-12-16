// importo los componentes
import Home from './components/Home.vue';
import Blog from './components/Blog.vue';
import About from './components/About.vue';
import Contact from './components/Contact.vue';




export const routes = [
{ path: '', component: Home },
{ path: '/blog', component: Blog },
{ path: '/about', component: About },
{ path: '/contact', component: Contact }
]