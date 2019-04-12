<template>
  <div id="container">
    <img src="../assets/panda.png" class="logo" @click="change">
    <h1>{{name}}</h1>
    <ul>
      <li v-for="item in list" v-on:click="item.hidden = !item.hidden">
        <img :src="item.img">
        <p v-show="item.hidden">{{item.text}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "container",
  props: ["name"],
  data() {
    return {
      list: [
        {
          img:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554985203686&di=ff60fa29d2a2d0e9a76989323e91cf92&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01b6575c909dcba801208f8bfbe91d.png%401280w_1l_2o_100sh.png",
          text: "你如果认识从前的我，也许你会原谅现在的我。",
          hidden: false
        },
        {
          img:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554985203686&di=73d19d43b23b63743a127d17848870fb&imgtype=0&src=http%3A%2F%2Fphoto.16pic.com%2F00%2F36%2F81%2F16pic_3681406_b.jpg",
          text:
            "于千万人之中遇见你所要遇见的人，于千万年之中，时间的无涯的荒野里，没有早一步，也没有晚一步，刚巧赶上了，那也没有别的话可说，惟有轻轻地问一声：“噢，你也在这里吗？”",
          hidden: false
        },
        {
          img:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554985203685&di=8c8e4d5047177698e1526f506b5312c1&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0171445788aa6e0000012e7eaa29df.jpg%40900w_1l_2o_100sh.jpg",
          text:
            "也许每一个男子全都有过这样的两个女人，至少两个。 娶了红玫瑰，久而久之，红的变了墙上的一抹蚊子血，白的还是“床前明月光”； 娶了白玫瑰，白的便是衣服上的一粒饭粘子，红的却是心口上的一颗朱砂痣。",
          hidden: false
        },
        {
          img:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554985203685&di=7d5bc3f1b4870847bb7a35516d63e464&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201602%2F05%2F20160205164649_WTLGC.jpeg",
          text: "人总是在接近幸福时倍感幸福，在幸福进行时却患得患失。 ",
          hidden: false
        },
        {
          img:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554985203684&di=9f123da8fd12aa96f08d274ac9027abe&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201212%2F04%2F20121204104700_nsHWA.jpeg",
          text:
            "见了他，她变得很低很低，低到尘埃里。但她心里是欢喜的，从尘埃里开出花来。",
          hidden: false
        },
        {
          img:
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1866627099,1136543393&fm=11&gp=0.jpg",
          text:
            "我要你知道,在这个世界上总有一个人是等着你的,不管在什么时候,不管在什么地方,反正你知道,总有这么个人。",
          hidden: false
        },
        {
          img:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554985203686&di=3be2e79049cc2429561b01d693487db8&imgtype=0&src=http%3A%2F%2Fpic1.16pic.com%2F00%2F34%2F81%2F16pic_3481740_b.jpg",
          text: "笑，全世界便与你同声笑，哭，你便独自哭。",
          hidden: false
        },
        {
          img:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554985203686&di=56d29cfbaa5327280da501cd8c7a3141&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201512%2F03%2F20151203115748_utFch.jpeg",
          text:
            "说好永远的，不知怎么就散了。最后自己想来想去，竟然也搞不清楚当初是什么原因把彼此分开的。然后，你忽然醒悟，感情原来是这么脆弱的。经得起风雨，却经不起平凡......",
          hidden: false
        },
        {
          img:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554985203686&di=f8116041c8a8401de7f26753a03f74af&imgtype=0&src=http%3A%2F%2Fimg02.tooopen.com%2Fproducts%2F20150523%2Ftooopen_42272263.jpg",
          text:
            "说好永远的，不知怎么就散了。最后自己想来想去，竟然也搞不清楚当初是什么原因把彼此分开的。然后，你忽然醒悟，感情原来是这么脆弱的。经得起风雨，却经不起平凡......",
          hidden: false
        },
        {
          img:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554985203684&di=cc3634461253c42ffd79102de61379ed&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01ea00554200c10000019ae9b5ba34.jpg",
          text: "孤独的人有他们自己的泥沼。",
          hidden: false
        },
        {
          img:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554985203684&di=561e56f28d7812b59d5f25aebea186dc&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201608%2F07%2F20160807123051_4XQvj.thumb.700_0.jpeg",
          text: "既然抄袭是最隆重的赞美。",
          hidden: false
        },
        {
          img:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554985203684&di=0ac4a718e27a911765fb87e52fd9596b&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F15%2F28%2F73%2F28g58PICYsJ_1024.jpg",
          text:
            "时代的车轰轰地往前开，我们坐在车上，经过的也许不过是几条熟悉的街衢，可在漫天的火光中也自惊心动魄。可惜我们只顾忙着在一瞥即逝的店铺橱窗里，找寻我们自己的影子——我们只看见自己的脸苍白渺小，我们的自私与空虚，我们恬不知耻的愚蠢。谁都一样，我们每个人都是孤独的。",
          hidden: false
        },
        {
          img:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554985203683&di=02c0194c38488466ac90214ea5f61a60&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F36bb3fc1227f63c1fd8642e9391e02fc307b285f36230-ZOT221_fw658",
          text: "生命是一袭华美的袍，爬满了蚤子。",
          hidden: false
        },
        {
          img:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554985203815&di=d956ac015fc20697547caa09296e68d1&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F17%2F70%2F84%2F98h58PICk6g_1024.jpg",
          text:
            "不管你的条件有多差 总会有个人在爱你。不管你的条件有多好 也总有个人不爱你。",
          hidden: false
        },
        {
          img:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554985203815&di=b24da875922bb04f7e6dae9b52be27b3&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fblog%2F201403%2F17%2F20140317152150_3v3Zi.jpeg",
          text: "生在这世上，没有一样感情不是千疮百孔的。",
          hidden: false
        }
      ]
    };
  },
  methods: {
    change() {
      this.$emit("value", "Welcome to my world");
    }
  }
};
</script>

<style scoped>
#container {
  width: 60%;
  margin: 0 auto;
}
.logo {
  margin: 8% auto 0 auto;
}
h1 {
  text-align: center;
}
ul {
  column-gap: 10px;
  column-count: 5;
  margin: 0 auto;
  margin-top: 25%;
}
li {
  color: #999;
  font-size: 18px;
  background: #cccccc38;
  margin-bottom: 1vh;
  break-inside: avoid;
}
li img {
  display: block;
  width: 100%;
}
li p {
  margin: 0;
  padding: 10%;
  text-indent: 2em;
}
</style>

