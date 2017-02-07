<template>
  <div class="appbarlength">
  <mu-appbar title="Chapter 1" class="red">
    <mu-icon-button icon='menu' slot="left" @click="closeSide()"/>
    <mu-icon-button icon='expand_more' slot="right"/>
  </mu-appbar>
    </div>
</template>

<script>
  import {bus} from '../bus'

  export default {
    data(){
      return {
        jack:"1"
      }
    },
    methods:{
      closeSide() {
        bus.$emit('side',1);
//        alert(2);
      }
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
