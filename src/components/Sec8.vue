<template>
    <div class="sec8" id="Qu">
    <div class="container d-flex align-items-center  justify-content-center">
        <div class="row w-100 align-items-center  justify-content-center d-flex" >
         <div class="col-md-6 p-1 ">
      <div class="box4">
          <div class="list ">
              <div id="g1"  class="bm shadow  py-3"> <RouterLink class="bt3" to="/">Coronavirus Disease 2019 Basics</RouterLink><i class="fas fa-arrow-right  flex-column"></i> </div>
                  <div   id="g2" class="bm   shadow py-3"><RouterLink class="bt3" to="/about1">How it Spreads</RouterLink><i class="fas fa-arrow-right ms-4"></i> </div>
                  <div id="g3" class="bm  shadow py-3"><RouterLink class="bt3" to="/about2">How to protect Yourself</RouterLink><i class="fas fa-arrow-right ms-"></i></div>
                   <div id="g4" class="bm  shadow py-3"><RouterLink class="bt3" to="/about3">Symbtoms & Testing</RouterLink> <i class="fas fa-arrow-right"></i></div>
                  <div id="g5" class="bm  shadow py-3"><RouterLink class="bt3" to="/about4">Outbreak in Your Communty</RouterLink><i class="fas fa-arrow-right"></i></div>
                   <div id="g6" class="bm  shadow py-3"><RouterLink class="bt3" to="/about5">Myth-Bursters of Coronavirus</RouterLink><i class="fas fa-arrow-right"></i></div>
          </div>
       </div>
  </div>
    <div class="col-md-6 text-center p-1 d-flex">
          <div class="box5 ">
            <RouterView />
                 </div>
    </div>
    </div>
    </div>
</div>
</template>

<style  scoped>
.c{
   border: 2px solid blue;
}
a{
  text-decoration: none;
}
.sec8{
   width: 100%;
   height: auto;
   background-position: center;
   background-repeat: no-repeat;
   background-size: cover;
   padding-top: 4.5%;
}
.container{
   display: flex;
   width: 100%;
}
.box5{
   width: 500px;
   height:auto;
}
.box4{
   width: 100%;
   height: auto;   

   display: flex;
   align-items: center;
}

.list{
  width: 70%;
  height: 80%;
  position: relative;
}
.fas{
  color: rgba(15, 15, 197, 0.986);
padding-right: 10px;
padding-top: 10px;
}
.bt3{ 
  padding-left: 10px;
 width: 400px;
 color: rgba(15, 15, 197, 0.986);
 font-size: 20px;
}
.bm{
  display: flex;
   columns: 10 ;
}
</style>
