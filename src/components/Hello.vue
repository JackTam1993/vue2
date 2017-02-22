<template>
  <div>
    <mu-float-button icon="add" class="demo-float-button"/>
    <mu-float-button icon="add" mini class="demo-float-button"/>
    <mu-float-button icon="add" secondary class="demo-float-button"/>
    <mu-float-button icon="add" secondary mini class="demo-float-button"/>
    <mu-float-button icon="star" disabled class="demo-float-button"/>
    <mu-float-button icon="star" disabled mini class="demo-float-button"/>
    <div class="bottom">
    <mu-text-field hintText="提示文字" v-model="send"/>
      <mu-raised-button label="发送" @click="sendmsg()"/>
    </div>
  </div>
</template>

<script>
  var socket = io.connect('http://localhost:8888');
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      send:''
    }
  },
  methods:{
    sendmsg() {
      var self = this;
      console.log(this.send);
      socket.emit('myother', { my: self.send });
    }
  },
  created(){

  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .bottom{
    bottom: 3% !important;
  }
</style>
