// トップページへスクロール

$(function(){
let pageTop = $('#page_top');
pageTop.hide();
$(window).scroll(function () {
        if ($(this).scrollTop() > 80) {
            pageTop.fadeIn(300);
        } else {
            pageTop.fadeOut(300);
        }
    });
    pageTop.click(function () {
        $('body, html').animate({ scrollTop: 0 }, 500);
        return false;
    });
});

// ページ内遷移スクロール(スムーススクロール)

jQuery('a[href^="#"]').click(function() {
    // 移動速度を指定（ミリ秒）
    let speed = 300;
    // hrefで指定されたidを取得
    let id = jQuery(this).attr("href");
    // idの値が#のみだったらターゲットをhtmlタグにしてトップへ戻るようにする
    let target = jQuery("#" == id ? "html" : id);
    // ページのトップを基準にターゲットの位置を取得
    let position = jQuery(target).offset().top;
    // ターゲットの位置までspeedの速度で移動
    jQuery("html, body").animate(
        {
        scrollTop: position
        },
        speed
    );
    return false;
});

// ドロワーメニュー(レスポンシブ時)
jQuery(document).ready(function() {
    jQuery('.drawer').drawer();
});


    //ドロワー（開くボタン）
jQuery(function() {
    jQuery('.menu-btn').on('click', function () {
        jQuery('.drawer-nav').toggleClass('active');
    });

    // ドロワー（閉じるボタン）
    jQuery('.close-btn').on('click', function () {
        jQuery('.drawer-nav').toggleClass('active');
    });

    jQuery('.close').on('click', function () {
        jQuery('.drawer-nav').toggleClass('active');
    });
});

