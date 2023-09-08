/* スマホ版ハンバーガーメニュー */
const btn = document.querySelector('.menu-btn');
const nav = document.querySelector('.sp-main-nav');
btn.addEventListener('click', () => {
    nav.classList.toggle('open-menu');
})

$(".menu-btn").click(function () {
    $(this).toggleClass('active');
});

/* 途中で消えるヘッダー */
var beforePos = 0; //スクロールの値の比較用の設定

//スクロール途中でヘッダーが消え、上にスクロールすると復活する設定を関数にまとめる
function ScrollAnime(){
    var elemTop = $('#hero').offset().top;
    var scroll = $(window).scrollTop();
    //ヘッダーの出し入れをする
    if(scroll == beforePos){
        //IE11対策で処理を入れない
    }else if(elemTop > scroll || 0 > scroll - beforePos){
        //ヘッダーが上から出現する
        $('#header').removeClass('UpMove'); //#headerにUpMoveというクラス名を除き
        $('#header').addClass('DownMove');//#headerにDownMoveのクラス名を追加
    }else {
        //ヘッダーが上に消える
        $('#header').removeClass('DownMove');//#headerにDownMoveというクラス名を除き
        $('#header').addClass('UpMove');//#headerにUpMoveのクラス名を追加
    }
    beforePos = scroll;//現在のスクロール値を比較用のbeforePosに格納
}

//画面をスクロールしたら動かしたい場合の記述
$(window).scroll(function () {
    ScrollAnime(); //スクロール途中でヘッダーがきえ、上にスクロールすると復活する関数を呼ぶ
});

//ページが読み込まれたらすぐに動かしたい場合の記述
/*
$(window).on('load', function () {
    ScrollAnime(); //スクロール途中でヘッダーがきえ、上にスクロールすると復活する関数を呼ぶ
});
*/

/* 注目のプロジェクトスライダー */
$('.slider01').slick({
    autoplay: true,//自動的に動き出すか。初期値はfalse。
    infinite: true,//スライドをループさせるかどうか。初期値はtrue。
    autoplaySpeed:5000, //表示時間
    slidesToShow: 1,//スライドを画面に1枚見せる
    slidesToScroll: 1,//1回のスクロールで1枚の写真を移動して見せる
    prevArrow: '<div class="slick-prev slick-prev-blue"></div>',//矢印部分PreviewのHTMLを変更
    nextArrow: '<div class="slick-next slick-next-blue"></div>',//矢印部分NextのHTMLを変更
    dots: false,//下部ドットナビゲーションの表示
    responsive: [
        {
        breakpoint: 1240,//モニターの横幅が1240px以下の見せ方
        settings: {
            slidesToShow: 1,//スライドを画面に3枚見せる
            slidesToScroll: 1,//1回のスクロールで2枚の写真を移動して見せる
        }
    }
]
});

/* プロジェクト一覧スライダー */
$('.slider02').slick({
    autoplay: true,//自動的に動き出すか。初期値はfalse。
    infinite: true,//スライドをループさせるかどうか。初期値はtrue。
    slidesToShow: 4,//スライドを画面に4枚見せる
    slidesToScroll: 1,//1回のスクロールで1枚の写真を移動して見せる
    prevArrow: '<div class="slick-prev slick-prev-white"></div>',//矢印部分PreviewのHTMLを変更
    nextArrow: '<div class="slick-next slick-next-white"></div>',//矢印部分NextのHTMLを変更
    dots: false,//下部ドットナビゲーションの表示
    responsive: [
        {
        breakpoint: 1300,//モニターの横幅が1240px以下の見せ方
        settings: {
            slidesToShow: 3,//スライドを画面に3枚見せる
            slidesToScroll: 1,//1回のスクロールで2枚の写真を移動して見せる
        }
    },
    {
        breakpoint: 930,//モニターの横幅が930px以下の見せ方
        settings: {
            slidesToShow: 2,//スライドを画面に2枚見せる
            slidesToScroll: 1,//1回のスクロールで1枚の写真を移動して見せる
        }
    },  
    {
        breakpoint: 600,//モニターの横幅が600px以下の見せ方
        settings: {
            slidesToShow: 1,//スライドを画面に1枚見せる
            slidesToScroll: 1,//1回のスクロールで1枚の写真を移動して見せる
        }
    }
]
});

//上部画像の設定
$('.gallery').slick({
	infinite: false, //スライドをループさせるかどうか。初期値はtrue。
	fade: true, //フェードの有効化
	arrows: false,//左右の矢印なし
	asNavFor: '.choice-btn', //連動させるサムネイルのクラス名
    slidesToShow: 1,
    slidesToScroll: 1,
});

//選択画像の設定
$('.choice-btn').slick({
	infinite: false, //スライドをループさせるかどうか。初期値はtrue。
    arrows: false,
	focusOnSelect: true, //フォーカスの有効化
	asNavFor: '.gallery', //連動させるスライドショーのクラス名
    autoplay: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
        {
        breakpoint: 387,
        settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
        }
    }
]
});
