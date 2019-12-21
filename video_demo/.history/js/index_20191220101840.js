// 内容区域的高度
var screen_h = window.screen.height
var screen_w = window.screen.width

$(".app_content").css({
    "height": screen_h - $(".app_tabbar").outerHeight() + "px"
})

// 底部导航上的图片
var one_img = $(".tabbar_item div img")
one_img.css({
    "height": one_img.width() + "px"
})

// 底部到行上的点击事件
$(".tabbar_item").click(function () {

    var cur_src = $(this).find("img").attr("scr")
    $(this).find("img").attr("scr" ,cur_src.replace(".png" , "_a.png"))
    var that = this
    $(".app_content>div").each(function (index , item) {
        if ($(that).index() == index) {
            $(item).css({
                "display": "block"
            })
        } else {
            $(item).css({
                "display": "none"
            })
        }
    })
})