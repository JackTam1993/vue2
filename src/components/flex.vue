<template>
  <div>
    <mu-flexbox>
      <mu-flexbox-item class="flex-demo">
        <mu-card>
          <mu-card-header title="阿炳">
            <mu-avatar :src="myron" slot="avatar"/>
          </mu-card-header>
          <mu-card-text>
            散落在指尖的阳光，我试着轻轻抓住光影的踪迹，它却在眉宇间投下一片淡淡的阴影。
          </mu-card-text>
          <mu-card-actions>
            <mu-raised-button label="赞" icon="favorite"/>
            <mu-raised-button label="评论" icon="chat"/>
          </mu-card-actions>
        </mu-card>
      </mu-flexbox-item>
      <mu-flexbox-item class="flex-demo">
        2
      </mu-flexbox-item>
      <mu-flexbox-item class="flex-demo">
        3
      </mu-flexbox-item>
    </mu-flexbox>
    <mu-flexbox class="mt8">
      <mu-flexbox-item class="flex-demo">
        4
      </mu-flexbox-item>
      <mu-flexbox-item class="flex-demo">
        5
      </mu-flexbox-item>
    </mu-flexbox>
    <mu-flexbox class="mt8">
      <mu-flexbox-item order="0" class="flex-demo">
        6
      </mu-flexbox-item>
      <mu-flexbox-item order="2" span="200" class="flex-demo">
        7
      </mu-flexbox-item>
      <mu-flexbox-item order="1" class="flex-demo">
        8
      </mu-flexbox-item>
    </mu-flexbox>
    <mu-flexbox class="mt8" orient="vertical">
      <mu-flexbox-item order="0" class="flex-demo">
        9
      </mu-flexbox-item>
      <mu-flexbox-item order="2" class="flex-demo">
        10
      </mu-flexbox-item>
      <mu-flexbox-item order="1" class="flex-demo">
        11
      </mu-flexbox-item>
    </mu-flexbox>
  </div>
</template>

<style lang="css">
  .mt8 {
    margin-top: 8px;
  }
  .flex-demo {
    /*height: 32px;*/
    background-color: #e0e0e0;
    text-align: center;
    line-height: 32px;
  }
</style>

<script>
  import img from '../../static/img/maple.jpg'
  import myron from '../../static/img/icon.jpg'

  export default {
    data(){
      return {
        img,
        myron
      }
    }
  }
</script>
