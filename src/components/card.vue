<template>
  <mu-card>
    <mu-card-header title="阿炳" subTitle="You may say I'm a dreamer,but I'm not the only one.">
      <mu-avatar :src="myron" slot="avatar"/>
    </mu-card-header>
    <mu-card-media title="Image Title" subTitle="Image Sub Title">
      <img :src="img" />
    </mu-card-media>
    <mu-card-title title="Content Title" subTitle="Content Title"/>
    <mu-card-text>
      散落在指尖的阳光，我试着轻轻抓住光影的踪迹，它却在眉宇间投下一片淡淡的阴影。
      调皮的阳光掀动了四月的心帘，温暖如约的歌声渐起。
      似乎在诉说着，我也可以在漆黑的角落里，找到阴影背后的阳光，
      找到阳光与阴影奏出和谐的旋律。我要用一颗敏感赤诚的心迎接每一缕滑过指尖的阳光！
    </mu-card-text>
    <mu-card-actions>
      <mu-raised-button label="赞" icon="favorite"/>
      <mu-raised-button label="评论" icon="chat"/>
    </mu-card-actions>
  </mu-card>
</template>

<script>
  import img from '../../static/img/maple.jpg'
  import myron from '../../static/img/icon.jpg'
  export default {
    name:'card',
    data () {
      return {
        img,
        myron
      }
    }
  }
</script>
