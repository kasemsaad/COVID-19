import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
createApp(App).use(router).mount("#app");
let scrolpoinyer=document.getElementById("scrolpoinyer")
      
scrolpoinyer.addEventListener('click',function(){
   window.scrollTo(0,0)
})      
let x=document.getElementById("Home")
let z=x.offsetTop
window.addEventListener('scroll',function(){
   let scrolwindow=window.scrollY
   if(scrolwindow>z){
      scrolpoinyer.classList.remove('d-none')

            }
            else{
               scrolpoinyer.classList.add('d-none')

            }
})
let v1=document.getElementById("g1")
let v2=document.getElementById("g2")
let v3=document.getElementById("g3")
let v4=document.getElementById("g4")
let v5=document.getElementById("g5")
let v6=document.getElementById("g6")
v1.addEventListener('click',function(){
    v1.classList.add('c')
      v2.classList.remove('c')
      v3.classList.remove('c')
      v4.classList.remove('c')
      v5.classList.remove('c')
      v6.classList.remove('c')
})  
v2.addEventListener('click',function(){
   v2.classList.add('c')
     v1.classList.remove('c')
     v3.classList.remove('c')
     v4.classList.remove('c')
     v5.classList.remove('c')
     v6.classList.remove('c')
}) 
v3.addEventListener('click',function(){
   v3.classList.add('c')
     v2.classList.remove('c')
     v1.classList.remove('c')
     v4.classList.remove('c')
     v5.classList.remove('c')
     v6.classList.remove('c')
})  
v4.addEventListener('click',function(){
   v4.classList.add('c')
     v2.classList.remove('c')
     v3.classList.remove('c')
     v6.classList.remove('c')
     v1.classList.remove('c')
     v5.classList.remove('c')
})  
v5.addEventListener('click',function(){
   v5.classList.add('c')
     v1.classList.remove('c')
     v2.classList.remove('c')
     v3.classList.remove('c')
     v4.classList.remove('c')
     v6.classList.remove('c')
})  
v6.addEventListener('click',function(){
   v6.classList.add('c')
     v1.classList.remove('c')
     v2.classList.remove('c')
     v3.classList.remove('c')
     v4.classList.remove('c')
     v5.classList.remove('c')
})   


