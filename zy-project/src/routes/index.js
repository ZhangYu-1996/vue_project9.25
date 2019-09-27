import Cart from "pages/Cart/Cart.vue"
import Classify from "pages/Classify/Classify.vue"
import Home from "pages/Home/Home.vue"
import Personage from "pages/Personage/Personage.vue"
import Recognition from "pages/Recognition/Recognition.vue"

export default [
  {path:"/Cart",component:Cart},
  {path:"/Classify",component:Classify},
  {path:"/Home",component:Home},
  {path:"/Personage",component:Personage},
  {path:"/Recognition",component:Recognition},
  {path:"/",redirect:"/Home"},
]
