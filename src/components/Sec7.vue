<template>
   
    <div class="sec7" id="Do&Don`t">
       <div class="container d-flex align-items-center  justify-content-center">
           <div class="row w-100 align-items-center  justify-content-center d-flex" >
       <div class="col-md-6 text-center p-1 d-flex">
            <div class="box1 pt-5 align-items-center  justify-content-center d-flex">
                <div class="row w-100 d-flex flex-column  justify-content-center " >
  <div class="col-md-4  px-1 ">
    <div class="contan1 ">
      
      <div class="textbok pb-4 align-items-center justify-content-end d-flex">
        <h5 class="pe-4 ">Avoid Close Contact </h5> <div class="cir"><div class="imge1"><div class="x"><i class="ex fas fa-circle-xmark"></i></div></div></div>
  </div>
  </div>
  </div>
  <div class="col-md-4  px-1 ">
    <div class="contan1 ">
      
      <div class="textbok pb-4 align-items-center justify-content-end d-flex">
        <h5 class="pe-4 ">Don't Touch Face</h5> <div class="cir"><div class="imge2"><div class="x"><i class="ex fas fa-circle-xmark"></i></div></div></div>
  </div>
  </div>
  </div>
  <div class="col-md-4  px-1 ">
    <div class="contan1 ">
      
      <div class="textbok pb-4 align-items-center justify-content-end d-flex">
        <h5 class="pe-4 ">Social DIstancing </h5> <div class="cir"><div class="imge3"><div class="x"><i class="ex fas fa-circle-xmark"></i></div></div></div>
  </div>
  </div>
  </div>
  </div>
            </div>
       </div>
       <div class="col-md-6 p-1   ">
         <div class="box2 pt-5 align-items-end  justify-content-end d-flex  ">
            <div class="row w-100 d-flex flex-column align-items-center " >
  <div class="col-md-4  px-1   ">
    <div class="contan1  ">
      <div class="textbok pb-4 align-items-center  d-flex">
        <div class="cirr">
            <div class="imge11"><div class="xx"><i class="ex fas fa-circle-check"></i></div></div></div><h5 class="ps-4 ">Wash Your Hands </h5> 
  </div>
  </div>
  </div>
  <div class="col-md-4  px-1 ">
    <div class="contan1 ">
      
      <div class="textbok pb-4 align-items-center  d-flex">
    <div class="cirr"><div class="imge22"><div class="xx"><i class="ex fas fa-circle-check"></i></div></div></div><h5 class="ps-4 ">Drink Much Water</h5> 
  </div>
  </div>
  </div>
  <div class="col-md-4  px-1 ">
    <div class="contan1 ">
      
      <div class="textbok pb-4 align-items-center  d-flex">
       <div class="cirr"><div class="imge33"><div class="xx"><i class="ex fas fa-circle-check"></i></div></div></div><h5 class="ps-4 ">Use Face Mask</h5> 
  </div>
  </div>
  </div>
  </div>
     </div>
       </div>
    </div>
       </div>
   </div>
 </template>
 
 <style scoped>
 h5{
    color: blue;
 }
 .sec7{
     width: 100%;
     height: auto;
     background-image: url(../assets/imgs/shape-a.p);
     background-position: center;
     background-repeat: no-repeat;
     background-size: cover;
     padding-top: 4.5%;
 
 }
 .container{
     display: flex;
     width: 100%;
     background-image: url(../assets/imgs/protect.png);
     background-repeat: no-repeat;
     background-size: 40%;
     background-position: center;

 }
 .x{
    border-radius: 50%;
    height: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
 }
 .xx{
    border-radius: 50%;
    height: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
 }
 .cir{
    border-radius: 50%;
    width: 5rem;
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgb(231, 77, 77);
    background-color:  rgb(231, 77, 77);

 }
 .cirr{
    border-radius: 50%;
    width: 5rem;
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgb(8, 216, 19);
    background-color:  rgb(8, 216, 19);

 }
 .imge1, .imge2, .imge3 {
  background-position: center;
background-repeat: no-repeat;
background-size: cover;
border-radius: 50%;
width: 4.5rem;
height: 4.5rem;
display: flex;
background-color: white;
 }
 .imge1{
background-image: url(../assets/imgs/donts-a.png);
}
.imge2{
background-image: url(../assets/imgs/donts-b.png);
}
.imge3{
background-image: url(../assets/imgs/donts-c.png);
}
.imge11,.imge22,.imge33{
  background-position: center;
background-repeat: no-repeat;
background-size: cover;
border-radius: 50%;
width: 4.5rem;
height: 4.5rem;
display: flex;
background-color: white;
}
.imge11{
background-image: url(../assets/imgs/dos-a.png);
}
.imge22{
background-image: url(../assets/imgs/dos-b.png);
}
.imge33{
background-image: url(../assets/imgs/dos-c.png);
}
 .box1, .box2{
     width: 100%;
     height:auto;
 }
 .textbok{
    width: 300px;
    display: flex;
 }
 
 @media screen and (max-width:991px) {
     .sec1{  height: auto;}
   }
 </style>
 