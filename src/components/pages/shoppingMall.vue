<template>
  <div>
    <div class="seach-bar">
       <van-row>
         <van-col span="3">
           <img :src="locationIcon" alt="" width="80%" class="location-icon" />
         </van-col>
         <van-col span="16">
           <input type="text" class="seach-input" />
           </van-col>
         <van-col span="5">
           <van-button size="mini">查找</van-button>
         </van-col>
       </van-row>
    </div>
   <!-- swiper area -->
   <div class="swiper-area">
     <van-swipe :autoplay="1000">
       <van-swipe-item v-for="(banner,index) in bannerPicArray" :key="index">
         <img v-lazy="banner.imageUrl" width="100%">
       </van-swipe-item>
     </van-swipe>
   </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "shopping Mall",
      locationIcon:require('../../assets/images/location.png'),
      bannerPicArray:[
                {imageUrl:'http://7xjyw1.com1.z0.glb.clouddn.com/simleVueDemoPic001.jpg'},
                {imageUrl:'http://7xjyw1.com1.z0.glb.clouddn.com/simleVueDemoPic002.jpg'},
                {imageUrl:'http://7xjyw1.com1.z0.glb.clouddn.com/simleVueDemoPic003.jpg'},
      ]
    };
  }
};
</script>

<style scoped>
.seach-bar{
  height: 2.2rem;
  background-color: #e5017d;
  line-height: 2.2rem;
  overflow: hidden;
}
.seach-input{
  width: 100%;
  height: 1.3rem;
  border-top: 0px;
  border-left:0;
  border-right: 0;
  border-bottom: 1px solid #fff !important;
  
  background-color: #e5017d;
  color: #fff;
}
.location-icon{
  margin-top: 0.2rem;
  margin-left: 0.3rem;
}
.swiper-area{
  clear: both;
  max-height: 15rem;
  overflow: hidden;

}
</style>