<template>
   <div class="sec1" id="Home">
      <div class="container d-flex align-items-center  justify-content-center">
          <div class="row w-100 align-items-center  justify-content-center d-flex" >
      <div class="col-md-6 text-center p-1 d-flex">
           <div class="box1 pt-5">
            <div class="items d-flex   ">
            <h1 >CORONA</h1>
            <div class="item1">
              <span class="c1">COVID19</span><br>
                <span class="c2">VIRUS</span>
            </div>
            </div>
            <div class="items mt-4 w-100  d-flex">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque iure
                 veniam dicta accusantium ratione excepturi quisquam molestias harum maiores esse!</p>
              </div>
              <div class="items mt-4 w-100  ">
                    <a class="bt1 botton1 text-decoration-none" href="#steps">How To Protect <i class="fas fa-star-half-stroke"></i></a>
                    <a class="bt2 botton1 text-decoration-none " href="#About">About COVID-19 <i class="fas fa-arrow-right"></i></a>
                </div>
                <div class="items mt-4 w-100  ">
                  <div class=" pe-4   ">
                    <span class="">WORLDWIDE</span><br>
                      <span class="cc">8,949,468</span>
                  </div><div class=" pe-4   ">
                    <span class="">DEATHS</span><br>
                      <span class="cc">109,433</span>
                  </div><div class="  pe-4  ">
                    <span class="">RECOVERD</span><br>
                      <span class="cc">3,738,465</span>
                  </div>
                  </div>
                  <div class=" mt-4 w-100  d-flex">
                    <p>Lorem ipsum dolor sit amet consectetur </p>
                    </div>
           </div>
      </div>
      <div class="col-md-6   p-1 ">
        <div class="box2  "></div>
    </div>
      </div>
      </div>
  </div>
</template>

<style scoped>
.sec1{
    width: 100%;
    height: 100vh;
    background-image: url(../assets/imgs/shape-a.png);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    padding-top: 4.5%;
}
.container{
    display: flex;
    width: 100%;
}
.box1{
    width: 100%;
    height:auto;
}
.box2{
    width: 100%;
    height: 80vh;
    display: flex;
    background-image: url(../assets/imgs/header-a.png);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

}
.items{
display: flex;
justify-content: center;
}
.item1{
justify-content: center;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
h1{
    font-size: 70px;
    color: rgba(7, 7, 122, 0.986);
}
.c1{
    color: red;
    font-size: 28px;
}
.c2{
    color: rgba(7, 7, 122, 0.986);
    font-size: 40px;
}
.bt1{ 
    background-color: blue;
  color: white;
  height: 30px;
  width: 200px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  border-radius: 20px;
}
.bt2{
    background-color: white;
    color: blue;
  height: 30px;
  width: 200px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
.cc{
    font-size: 30px;
    color: rgba(7, 7, 122, 0.986);
}
.router-link-active {
    text-decoration: dotted;
}

@media screen and (max-width:991px) {
    .sec1{  height: auto;}
  }
</style>
