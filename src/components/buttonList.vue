<template>
  <div id="drawer">
    <mu-drawer left :open="open" @close="toggle()" width="20%">
      <mu-appbar title="NodeJS" class="red-title"/>
      <mu-snackbar v-if="snackbar" message="爱的供养，再问自杀" action="关闭"/>
      <mu-list>
        <mu-list-item title="Menu Item 1" href="#/app"/>
        <mu-list-item title="Menu Item 2" href="#/hello"/>
        <mu-list-item title="Menu Item 3" href="#/card"/>
        <mu-list-item title="Menu Item 1" href="#/table"/>
        <mu-list-item title="Menu Item 2" href="#/hello"/>
        <mu-list-item title="Menu Item 3" @click="showSnack()"/>
        <mu-list-item title="Menu Item 1" href="#/app"/>
        <mu-list-item title="Menu Item 2" href="#/hello"/>
        <mu-list-item title="Menu Item 3" @click="closeSide()"/>
        <mu-list-item title="Menu Item 1" href="#/app"/>
        <mu-list-item title="Menu Item 2" href="#/hello"/>
        <mu-list-item title="Menu Item 3" @click="closeSide()"/>
        <mu-list-item title="Menu Item 1" href="#/app"/>
        <mu-list-item title="Menu Item 2" href="#/hello"/>
        <mu-list-item title="Menu Item 3" @click="closeSide()"/>
        <mu-list-item title="Menu Item 1" href="#/app"/>
        <mu-list-item title="Menu Item 2" href="#/hello"/>
        <mu-list-item title="Menu Item 3" @click="closeSide()"/>
        <mu-list-item @click.native="open = false" title="Close"/>
      </mu-list>
    </mu-drawer>
  </div>
</template>

  <style lang="css" scoped>
    .demo-menu {
      display: inline-block;
      margin: 16px 32px 16px 0;
    }
    #drawer{
      width: 100%;
    }
    .red-title{
      background-color: #f44336;
    }
  </style>

<script>
  import {bus} from '../bus'

  export default {
    data () {
      return {
        open: true,
      snackbar:false
      }
    },
    methods: {
      toggle () {
        this.open = !this.open
      },
      showSnack(){
        this.snackbar = true;
        var self = this;
        setTimeout(function () {
          self.snackbar = false;
        },2000)
      }
    },
    mounted(){
      var self = this;
      bus.$on('side',function (id) {
        if(id == 1){
          self.open = !self.open;
        }
      })
    }
  }
</script>
