<template>
  <div class="demo-badge-container">
    <mu-badge :content="num1" class="demo-icon-badge" circle secondary>
      <mu-icon value="notifications"/>
    </mu-badge>
    <mu-badge :content="count" circle secondary>
      <mu-icon-button icon="notifications" @click="add"/>
    </mu-badge>
    <timepicker></timepicker>
    <span>{{num3 | filter1}}</span>
  </div>

</template>
<script>
  import timepicker from 'components/TimePicker.vue';
  import store from './store'

  export default {
    data () {
      return {
        num1:'1',
        num2:'2',
        num3:'3'
      }
    },
    props:[''],
    methods:{
      add:function () {
        store.commit('increment')
      }
    },
    components:{
      timepicker
    },
    computed:{
      count(){
        return store.state.count;
      }
    },
    filters:{
      filter1:function (val) {
        if(val == 3){
          return val+'gg';
        }
        return val+'mm';
      }
    }
  }
</script>

<style>
  .demo-badge-container{
    padding-top: 24px;
  }
  .demo-icon-badge {
    padding: 12px;
    margin-right: 16px;
  }
</style>
