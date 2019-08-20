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
        <v-sheet class="mx-auto" max-width="75%">
          <v-slide-group>
            <v-slide-item v-for="(item,i) in items" :key="i">
              <img src="../assets/landingPageImages/member_store1.png" width="20%" />
            </v-slide-item>
          </v-slide-group>
        </v-sheet>
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
    <v-layout bg-white>
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
    </v-layout>
    <!-- function -->
    <v-layout py-5>
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
      </div>
    </v-layout>
    <!-- Q&A -->
    <v-layout>
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
            <a href="#" class="btn btn-warning font-weight-bold">使ってみる</a>
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
        { src: "../assets/landingPageImages/member_store1.png" },
        { src: "../assets/landingPageImages/member_store2.png" },
        { src: "../assets/landingPageImages/member_store3.png" },
        { src: "../assets/landingPageImages/member_store4.png" },
        { src: "../assets/landingPageImages/member_store5.png" },
        { src: "../assets/landingPageImages/member_store6.png" },
        { src: "../assets/landingPageImages/member_store7.png" },
        { src: "../assets/landingPageImages/member_store8.png" },
        { src: "../assets/landingPageImages/member_store9.png" },
        { src: "../assets/landingPageImages/member_store10.png" },
        { src: "../assets/landingPageImages/member_store12.png" },
        { src: "../assets/landingPageImages/member_store13.png" },
        { src: "../assets/landingPageImages/member_store14.png" },
        { src: "../assets/landingPageImages/member_store15.png" },
        { src: "../assets/landingPageImages/member_store17.png" },
        { src: "../assets/landingPageImages/member_store18.png" },
        { src: "../assets/landingPageImages/member_store19.png" },
        { src: "../assets/landingPageImages/member_store20.png" },
        { src: "../assets/landingPageImages/member_store21.png" },
        { src: "../assets/landingPageImages/member_store22.png" }
      ],
      tabs: [
        {
          name: "位置検索",
          heading: "位置情報からレビューを簡単検索",
          content:
            "海外旅行で予定していた観光スポットを見終わってしまって時間が余ってしまったことはありませんか？そんなとき、『AroundTopicの位置情報検索』を使えばもう大丈夫！ユーザの位置情報を利用し、ユーザ周辺の観光地レビューをSNSから取得してきます。マップに表示される検索結果は、他のユーザのアイコンが表示されるため、視覚的に注目が集まっている観光地を知ることができます。SNSから取得してくる情報は、最大7日間で投稿された情報なので、ほかのユーザの最新の声を知ることができます。<br>是非、Around Topicで時間を有効活用して、自分だけの観光スポットを見つけてください。"
        },
        {
          name: "キーワード検索",
          heading: "キーワードからレビューを簡単検索",
          content:
            "海外旅行で予定していた観光地に実際足を運んでみたら、退屈だったとことはありませんか？そんなとき、『AroundTopicのキーワード検索』を使えばもう大丈夫！キーワード検索には大きく分けて２つの使い方があります。<br>１つ目は、旅行前、観光プランを立てるとき気になる観光地を検索することで実際の忖度のない口コミを閲覧できます。<br>２つ目は、旅行中、現地で気になったスポットの口コミを閲覧できます。<br>是非、Around Topicで時間を有効活用して、自分だけの観光スポットを見つけてください。"
        },
        {
          name: "ユーザーの移動履歴",
          heading: "移動履歴から観光地を決める",
          content:
            "観光地のみではなく、移動の最中も存分に楽しみたいとは思いませんか？そんな時は、Around Topicの移動履歴機能が役に立ちます。AroundTopicではほかのユーザが通った観光地の履歴が見れます。<br>観光地までの道の迷ってしまったとき、時間に余裕があって少し寄り道をしながら観光地に向かいたいとき、観光地周辺の景色を堪能しながら移動したい時などに、とても役に立ちます。<br>ただし、悪用厳禁！ほかのユーザのストーカーなどには決して使わないでくださいね。（笑）"
        },
        {
          name: "タイムライン",
          heading: "Live chat when you needed",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum, urna eu"
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
}
</style>
