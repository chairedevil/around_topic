<template>
  <v-container fluid px-0 py-0 class="site-bg">
    <!-- main visual & heading -->
    <!-- ok! -->
    <v-layout column align-center class="banner">
      <v-flex class="mainvisual-heading">
        <h1 class="white--text text-center">あなただけの海外旅行を</h1>
        <p class="sub-title text-center">海外旅行で観光先に困ったとき、SNSから集めた大量のトレンド情報があなたを話題の観光スポットへ連れてってくれます。</p>
      </v-flex>
      <img src="../assets/landingPageImages/iphonex.png" alt="phone" />
    </v-layout>
    <!-- d point members -->
    <v-layout bg-white py-5 id="member-stores" class="member-stores">
      <v-flex class="text-center">
        <h1>dポイント加盟店</h1>
        <!-- <v-sheet class="mx-auto member-stores-wrapper">
          <v-slide-group multiple show-arrows>
            <v-slide-item v-for="item in items" :key="item">
              <img src="../assets/landingPageImages/member_store1.png" width="20%" />
            </v-slide-item>
          </v-slide-group>
        </v-sheet>-->
        <v-carousel
          light
          cycle
          height="200"
          hide-delimiters
          show-arrows-on-hover
          hide-controls
          class="members-wrap"
        >
          <v-carousel-item>
            <v-sheet height="100%" :color="transparent">
              <v-row class="fill-height" align="center" justify="center">
                <img src="../assets/landingPageImages/members1.png" />
              </v-row>
            </v-sheet>
          </v-carousel-item>
          <v-carousel-item>
            <v-sheet height="100%">
              <v-row class="fill-height" align="center" justify="center">
                <img src="../assets/landingPageImages/members2.png" />
              </v-row>
            </v-sheet>
          </v-carousel-item>
          <v-carousel-item>
            <v-sheet height="100%">
              <v-row class="fill-height" align="center" justify="center">
                <img src="../assets/landingPageImages/members3.png" />
              </v-row>
            </v-sheet>
          </v-carousel-item>
        </v-carousel>
        <p class="my-5">
          <a href="https://docomo-kaigai.com/kaigaidp/">加盟店の詳細はこちら</a>
        </p>
      </v-flex>
    </v-layout>
    <!-- features -->
    <v-layout py-5>
      <d-flex class="section-title">
        <div class="section-title">
          <small>FEATURES</small>
          <h3>特徴</h3>
        </div>
        <div class="row px-4">
          <div class="col-12 col-lg-4">
            <div class="card features">
              <div class="card-body">
                <div class="media">
                  <span class="ti-face-smile gradient-fill ti-3x mr-3"></span>
                  <div class="media-body">
                    <h4 class="card-title text-left">シンプル</h4>
                    <p class="card-text text-left">事前登録なしで、簡単に使用することができます。検索方法も直感的でわかりやすくなっています。</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-4">
            <div class="card features">
              <div class="card-body">
                <div class="media">
                  <span class="ti-money gradient-fill ti-3x mr-3"></span>
                  <div class="media-body">
                    <h4 class="card-title text-left">無料</h4>
                    <p
                      class="card-text text-left"
                    >初期費用も継続して使用していくのにも費用は一切かかりません。費用の心配なく使用し続けることができます。</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-4">
            <div class="card features">
              <div class="card-body">
                <div class="media">
                  <span class="ti-comments gradient-fill ti-3x mr-3"></span>
                  <div class="media-body">
                    <h4 class="card-title text-left">情報量</h4>
                    <p
                      class="card-text text-left"
                    >SNSから集めた大量の情報からトレンドを提供します。また忖度のないユーザーの生の声を聴くことができます。</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </d-flex>
    </v-layout>
    <!-- about this app -->
    <!-- <v-layout bg-white>
      <div class="container">
        <div class="row">
          <div class="col-lg-6 offset-lg-6">
            <div class="box-icon">
              <span class="ti-mobile gradient-fill ti-3x"></span>
            </div>
            <h2>Around Topicについて</h2>
            <p class="mb-4">Around Topicは、あなたの海外旅行を便利にするアプリです。</p>
            <a href="#function" class="btn btn-primary">Read more</a>
          </div>
        </div>
        <div class="perspective-phone">
          <img
            src="../assets/landingPageImages/perspective.png"
            alt="perspective phone"
            class="img-fluid"
          />
        </div>
      </div>
    </v-layout>-->
    <!-- function -->
    <v-layout py-5 bg-white>
      <div class="container-fluid">
        <div class="section-title">
          <small>FUNCTION</small>
          <h3>機能一覧</h3>
        </div>
        <!-- <ul class="nav nav-tabs nav-justified" role="tablist">
          <li class="nav-item">
            <a class="nav-link active" data-toggle="tab" href="#communication">位置検索</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-toggle="tab" href="#schedule">キーワード検索</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-toggle="tab" href="#messages">ユーザーの移動履歴</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-toggle="tab" href="#livechat">タイムライン</a>
          </li>
        </ul>-->
        <v-toolbar color="purple lighten-4" dark tabs>
          <v-tabs v-model="tab" color="purple lighten-4" grow>
            <v-tabs-slider color="pink lighten-3"></v-tabs-slider>
            <v-tab v-for="item in items" :key="item" class="font-weight-bold">{{ item.name }}</v-tab>
          </v-tabs>
        </v-toolbar>
        <v-tabs-items v-model="tab">
          <v-tab-item v-for="item in items" :key="item">
            <v-card flat>
              <v-card-text>
                <v-container grid-list-md text-xs-center>
                  <v-layout row wrap>
                    <v-flex lg3 class="text-center">
                      <v-img :src="item.src" width="150px" />
                    </v-flex>
                    <v-flex lg9 text-left>
                      <h1 class="item-title">{{ item.title }}</h1>
                      <p class="item-content">{{ item.content }}</p>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
      </div>
    </v-layout>
    <!-- review -->
    <v-layout py-5>
      <v-flex>
        <div class="section-title">
          <small>INTRODUCTION</small>
          <h3>お客様の声</h3>
        </div>
        <div class="testimonials-single">
          <img
            src="../assets/landingPageImages/client.png"
            alt="client"
            class="client-img"
            width="20%"
          />
          <blockquote class="blockquote">
            いつも海外旅行に行く際は、雑誌やネットで調べた有名な観光地に行っていましたが、同じようなな動きばかりで飽きていました。そんな時にAround
            Topicを使い現地の人の生の声を知ることができ、今までとは違った海外旅行をすることができました。旅行先で、空いた時間などに近くの観光地について簡単に調べることができるので、時間を有効に使うこともできました。
          </blockquote>
          <h5 class="mt-4 mb-2">浜一等兵</h5>
          <p class="text-primary">United States</p>
        </div>
      </v-flex>
    </v-layout>
    <!-- Q&A -->
    <v-layout bg-white>
      <div class="container">
        <div class="section-title">
          <small>FAQ</small>
          <h3>よくあるご質問</h3>
        </div>

        <div class="row pt-4">
          <div class="col-md-6">
            <h4 class="mb-3">どのようなサービスなのですか？</h4>
            <p
              class="light-font mb-5"
            >twitterから観光地やレストランなどに関する情報（ツイート）を取得することで、忖度のないユーザーの生の声を聴くことができ旅行のサポートをします。</p>
            <h4 class="mb-3">使うのに費用はかかりますか？</h4>
            <p class="light-font mb-5">当サービスを使用するのに、お金は一切かかりません。</p>
          </div>
          <div class="col-md-6">
            <h4 class="mb-3">使う際に何か登録する必要がありますか？</h4>
            <p
              class="light-font mb-5"
            >当サービスを使用するのに、ログインなど何か登録する必要は一切ございません。サイト上に行けば使用できますのでお気軽に使ってみてください。</p>
            <h4 class="mb-3">検索方法はどのようなものがありますか？</h4>
            <p class="light-font mb-5">ご自身の位置情報または場所のキーワードでの検索が可能です。</p>
          </div>
        </div>
      </div>
    </v-layout>
    <!--  -->
    <v-layout class="section bg-gradient" id="download">
      <div class="container">
        <div class="call-to-action">
          <div class="box-icon">
            <span class="ti-mobile gradient-fill ti-3x"></span>
          </div>
          <h2>Around Topicを使ってみよう！</h2>
          <p class="tagline">
            <a href="/map" class="btn btn-warning font-weight-bold">使ってみる</a>
          </p>
        </div>
      </div>
    </v-layout>
    <!-- support -->
    <v-layout class="light-bg py-5" id="contact">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 text-center text-lg-left">
            <p class="mb-2">
              <span class="ti-location-pin mr-2"></span> 1485 Pacific St, Brooklyn, NY 11216 USA
            </p>
            <div class="d-block d-sm-inline-block">
              <p class="mb-2">
                <span class="ti-email mr-2"></span>
                <a class="mr-4" href="mailto:support@mobileapp.com">support@mobileapp.com</a>
              </p>
            </div>
            <div class="d-block d-sm-inline-block">
              <p class="mb-0">
                <span class="ti-headphone-alt mr-2"></span>
                <a href="tel:51836362800">518-3636-2800</a>
              </p>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="social-icons">
              <a href="#">
                <span class="ti-facebook"></span>
              </a>
              <a href="#">
                <span class="ti-twitter-alt"></span>
              </a>
              <a href="#">
                <span class="ti-instagram"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </v-layout>
    <v-footer class="my-5 text-center">
      <!-- Copyright removal is not prohibited! -->
      <p class="mb-2">
        <small>COPYRIGHT © 2019. Around Topic</small>
      </p>

      <small>
        <a href="#" class="m-2">PRESS</a>
        <a href="#" class="m-2">TERMS</a>
        <a href="#" class="m-2">PRIVACY</a>
      </small>
    </v-footer>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      tab: null,
      items: [
        {
          src: require("../assets/landingPageImages/graphic.png"),
          name: "位置検索",
          title: "位置情報からレビューを簡単検索",
          content:
            "海外旅行で予定していた観光スポットを見終わってしまって時間が余ってしまったことはありませんか？そんなとき、AroundTopicの位置情報検索 を使えばもう大丈夫！ユーザの位置情報を利用し、ユーザ周辺の観光地レビューをSNSから取得してきます。マップに表示される検索結果は、他のユーザのアイコンが表示されるため、視覚的に注目が集まっている観光地を知ることができます。SNSから取得してくる情報は、最大7日間で投稿された情報なので、ほかのユーザの最新の声を知ることができます。是非、Around Topicで時間を有効活用して、自分だけの観光スポットを見つけてください。"
        },
        {
          src: require("../assets/landingPageImages/graphic.png"),
          name: "キーワード検索",
          title: "キーワードからレビューを簡単検索",
          content:
            "海外旅行で予定していた観光地に実際足を運んでみたら、退屈だったとことはありませんか？そんなとき、AroundTopicのキーワード検索を使えばもう大丈夫！キーワード検索には、大きく分けて２つの使い方があります。１つ目は、旅行前、観光プランを立てるとき気になる観光地を検索することで実際の忖度のない口コミを閲覧できます。２つ目は、旅行中、現地で気になったスポットの口コミを閲覧できます。是非、Around Topicで時間を有効活用して、自分だけの観光スポットを見つけてください。"
        },
        {
          src: require("../assets/landingPageImages/graphic.png"),
          name: "ユーザーの移動履歴",
          title: "移動履歴から観光地を決める",
          content:
            "観光地のみではなく、移動の最中も存分に楽しみたいとは思いませんか？そんな時は、Around Topicの移動履歴機能が役に立ちます。AroundTopicではほかのユーザが通った観光地の履歴が見れます。観光地までの道の迷ってしまったとき、時間に余裕があって少し寄り道をしながら観光地に向かいたいとき、観光地周辺の景色を堪能しながら移動したい時などに、とても役に立ちます。ただし、悪用厳禁！ほかのユーザのストーカーなどには決して使わないでくださいね。（笑）"
        },
        {
          src: require("../assets/landingPageImages/graphic.png"),
          name: "タイムライン",
          title: "タイムラインから観光地を探す",
          content:
            "気になる観光地の最新情報をいち早く知りたくは、ありませんか？そんな時はAround Topicにのタイムライン機能が役に立ちます。タイムライン機能では、検索結果を日付順にリスト化することができ、最新の情報をいち早く閲覧することができます。タイムラインで気になる情報を見つけて、その情報をMapで確認することもできます。お客様が旅行の楽しみや思い出を投稿するば他のユーザとの共有もできるので、旅行をすることがさらに楽しくなります。"
        }
      ]
    };
  }
};
</script>

<style scoped>
.site-bg {
  background-color: #faf6fb;
}
.banner {
  background-image: linear-gradient(#25b7c0, #9aede4);
  padding-top: 100px;
}
.mainvisual-heading {
  width: 75%;
}
.mainvisual-heading > h1 {
  font-size: 5.5em;
}
.mainvisual-heading > p {
  font-size: 2em;
  color: #ffc535;
}
.members-wrap {
  height: 200px;
}
.members-wrap img {
  width: 50%;
}
.client-img {
  border-radius: 200px;
}
.item-title {
  color: #633991;
}
.item-content {
  color: #959094;
  letter-spacing: 0.1em;
  line-height: 1.5;
}
@media screen and (max-width: 980px) {
  .mainvisual-heading {
    width: 100%;
  }
  .mainvisual-heading > h1 {
    font-size: 3.5em;
  }
  .mainvisual-heading > p {
    font-size: 1.5em;
  }
  .members-wrap {
    height: 100px;
    box-shadow: none;
  }
  .members-wrap img {
    width: 90%;
  }
}
@media screen and (max-width: 600px) {
  .mainvisual-heading {
    width: 100%;
  }
  .mainvisual-heading > h1 {
    font-size: 2.5em;
  }
  .mainvisual-heading > p {
    font-size: 1.2em;
  }
  .members-wrap img {
    width: 100%;
  }
}
</style>
