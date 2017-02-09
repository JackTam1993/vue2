<template>
  <div class="demo-grid">
    <mu-row gutter>
      <mu-col width="100" tablet="50" desktop="33">
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
      </mu-col>
      <mu-col width="100" tablet="50" desktop="33">col-100<br/>tablet-50<br/>desktop-33</mu-col>
    </mu-row>
    <mu-row gutter>
      <mu-col width="50" tablet="30" desktop="25">col-50<br/>tablet-30<br/>desktop-25</mu-col>
      <mu-col width="50" tablet="30" desktop="25">col-50<br/>tablet-30<br/>desktop-25</mu-col>
      <mu-col width="50" tablet="20" desktop="25">col-50<br/>tablet-20<br/>desktop-25</mu-col>
      <mu-col width="50" tablet="20" desktop="25">col-50<br/>tablet-20<br/>desktop-25</mu-col>
    </mu-row>
    <mu-row gutter>
      <mu-col width="100" tablet="40" desktop="15">col-100<br/>tablet-40<br/>desktop-15</mu-col>
      <mu-col width="50" tablet="60" desktop="15">col-50<br/>tablet-60<br/>desktop-15</mu-col>
      <mu-col width="50" tablet="60" desktop="35">col-50<br/>tablet-60<br/>desktop-35</mu-col>
      <mu-col width="100" tablet="33" desktop="35">col-100<br/>tablet-33<br/>desktop-35</mu-col>
    </mu-row>
  </div>
</template>

<style lang="css">
  .demo-grid div[class*="col-"] {
    background: #fff;
    text-align: center;
    color: #000;
    border: 1px solid #ddd;
    padding: 8px;
    margin-bottom: 8px;
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
