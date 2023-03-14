<template>
  <div class="item  ">
    <nav class="navbar w-100  navbar-expand-lg navbar-light ">
  <div class="container-fluid ">
    <h2>C<span id="bink"><i class="fas fa-virus"></i></span>VID19</h2>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse  navbar-collapse" id="navbarSupportedContent">
    <ul class="nav ps-5">
  <li class="nav-item  ">
    <a class="nav-link active" type="button" aria-current="page" id="f1" href="#Home"> Home</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="f2" href="#About">About Corona</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="f3" href="#Symptoms">Symptoms</a>
  </li>
  <li class="nav-item">
    <a class="nav-link " id="f4" href="#Prevention">Prevention</a>
  </li>
  <li class="nav-item">
    <a class="nav-link " id="f5" href="#Treatment">Treatment</a>
  </li>
  <li class="nav-item">
    <a class="nav-link " id="f6" href="#Qu">FAQ</a>
  </li>
  <li class="nav-item">
    <a class="nav-link " id="f7" href="#News">News</a>
  </li>
  <li class="nav-item">
    <a class="boo botton1 nav-link" id="f8" href="#Do&Don`t">Do & Don`t</a>
  </li>
</ul>
    
    </div>
  </div>
</nav> 
  
  </div>  

</template>

<style  scoped>

.navbar{
  background-color: white;
}
h2{
  padding-left: 10%;
  color: rgba(7, 7, 122, 0.986);
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
#bink{
  color: rgb(231, 31, 91);
}
.item{
  display: flex;
  position: fixed;
  width: 100%;
  z-index: 99999999999999999999999;
}
.nav-link:hover{
  color: blue;
  background-color: white;
}

.nav-link{
  color: rgb(104, 97, 97);
  font-size: 18px;
  font-weight: bold;
  display: flex;
  justify-content: end;
  transition: 2s ;

}

.blue{
  color: blue;
}

.boo {
  background-color: blue;
  color: white;
  border-radius: 20px;
  font-size: 17px;
  }

  @media screen and (max-width:991px) {
   .navbar-toggler{   
        margin-left: 10px;
}
.collapse{
    height: 64vh;
  }
   .container-fluid {
    background-color: white;
   }
    .item{
      justify-content: left;
    }
 .nav{
  width: 10vh;
  height: 30vh;
 }
  }
</style>
