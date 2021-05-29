<template>
  <div class="row"> <!--wrapper -->
    <div class="left-col col-md-6">
      <img src="../assets/img/logo.png" class="logo" />
      <div class="content">
        <h1>Add  plants to your living space</h1>
        <p>Plants are an inexpensive means to accessorizing your space and adding color and texture</p>
        <button>LEARN MORE</button>
      </div>
    </div>

    <div class="right-col col-md-6">
      <div class="slider">
        <img :src="slideimages[this.number]" id="Slide"/>
      </div>
      <div class="slider-content">
        <h2>When can I find ideas for small rooms?</h2>
        <hr/>
        <p>They can absorb pollutants and remove harnfull gasses from the air. 
           <br>No home should be without these wonderfull greens!
           <br>Designing small rooms comes width a completely different challenge.
        </p>

        <div class="controller">
          <img src="../assets/img/back.png" @click="BackBtn"/>
          <div class="line"></div>
          <img src="../assets/img/next.png"  @click="NextBtn" />
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data(){
    return{
      number:0,

      slideimages:[
        require("../assets/img/pic-1.jpg"),
        require("../assets/img/pic-2.jpg"),
        require("../assets/img/pic-3.jpg"),
        require("../assets/img/pic-4.jpg"),
      ]
    }
  },
 
  methods:{
     NextBtn() {
      if(this.number < 4){ 
        this.number++;     
      }
      // for loop action
      if(this.number == 4){ 
        this.number = 0
      }      
    },

    BackBtn() {
      if(this.number <=3 ){
        this.number-=1;
      }
      // for loop action
      if(this.number ==-1 ){
        this.number = 3;
      }      
    }
  }
  
}

</script>
<style lang="scss" scoped>
.row{
  height: 100vh;
}

.left-col{
  height: 100vh;
}

.right-col{
  height: 100vh;
  background: #52a460;
  padding: 0;
}

.logo{
  display: block;
  width: 80px;
  margin-top: 30px;
  margin-left: 60px;
}

.content{
  max-width: 500px;
  position: absolute;
  top: 50%;
  left: 60px;
  margin-right: 20px;
  transform: translateY(-50%);

  h1{
    color: #05a35f;
    font-size: 60px;
    line-height: 70px;
    margin: 25px 0;
  }

  p{
    color: #777;
    font-size: 17px;
    line-height: 28px;
    margin-bottom: 50px;
  }
}

button{
  width: 200px;
  border: none;
  background: #05a35f;
  box-shadow: 0px 10px 10px; 
  box-shadow: 0px 10px 10px 1px rgba(219,219,219,0.5);
  padding: 25px 0;
  color: #fff;
  outline: none;
  font-size: 12px;
  cursor: pointer;
}

.slider{
  width: 100%;
  height: 60%;
  display: flex;
  img{
    width: 101%;
  }
}

.slider-content{
  width: 100%;
  height: 40%;
  background: #05a35f;
  padding-top: 30px;
  padding-left: 30px;
  box-sizing: border-box;

  h2{
    font-size: 26px;
    font-weight: 100;
    color: #fff;
  }
  p{
    color: #bfffdd;
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 20px;
  }
}

hr{
  border: none;
  width: 270px;
  height: 1px;
  background: #b5e3cf;
  margin: 20px 0 30px;
}

.controller{
  width: 120px;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img{
    width: 45px;
    cursor: pointer;
  }

}
.line{
  width: 30px;
  height: 30px;
  margin: 20px;
  border: 1px solid #b5e3cf;
}

@media only screen and (max-width: 800px){

  .logo{
    display: block;
    width: 80px;
    margin-top: 30px;
    margin-left: 120px;
  }

  .content{
    position: relative;
    top: 40%;
    transform: translateY(-50%);
    margin: 0 auto;

    
  }
  
  .left-col{
  }
  .right-col{
  }
  .content{
    left: 0;
    padding: 20px;
    text-align: center;
    
    h1{
      font-size: 34px;
      line-height: 38px;
    }
  }
}

.slider{
  height: auto;
}

.slider-content{
  padding-right: 30px;

}

</style>