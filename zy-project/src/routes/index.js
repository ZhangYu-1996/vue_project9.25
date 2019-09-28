import Cart from "pages/Cart/Cart.vue"
import Classify from "pages/Classify/Classify.vue"
import Home from "pages/Home/Home.vue"
import Personage from "pages/Personage/Personage.vue"
import Recognition from "pages/Recognition/Recognition.vue"
import Login from "pages/Login/Login.vue"

export default [
  {path:"/Cart",component:Cart,meta:{showFooter:true}},
  {path:"/Classify",component:Classify,meta:{showFooter:true}},
  {path:"/Home",component:Home,meta:{showFooter:true}},
  {path:"/Personage",component:Personage},
  {path:"/Login",component:Login},
  {path:"/Recognition",component:Recognition,meta:{showFooter:true}},
  {path:"/",redirect:"/Home"},
]
