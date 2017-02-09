<template>
  <div class="appbarlength">
  <mu-appbar title="Chapter 1" class="red">
    <mu-icon-button icon='menu' slot="left" @click="closeSide()"/>
    <mu-icon-button icon='expand_more' slot="right"/>
    <mu-snackbar v-if="snackbar" message="爱的供养，再问自杀" action="关闭" @close="closeSnack"/>
  </mu-appbar>
    </div>
</template>

<script>
  import {bus} from '../bus'

  export default {
    data(){
      return {
        jack:"1",
        snackbar:false
      }
    },
    methods:{
      closeSide() {
        bus.$emit('side',1);
//        alert(2);
      },
      showSnack(){
        this.snackbar = true;
        var self = this;
        setTimeout(function () {
          self.snackbar = false;
        },2000)
      },
      closeSnack(){
        this.snackbar = false;
      }
    },
    created(){
      var self = this;
      bus.$on('showSnackbar',function (id) {
      if(id == 1){
        self.snackbar = true;
        setTimeout(()=> {self.snackbar = false;},2000)
      }
    })
    }
  }
</script>

<style scoped>
  .appbarlength{
    width: 100%;
    height: 50px;
  }
  .red{
    background-color: #f44336;
  }
</style>
