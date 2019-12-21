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
    var that = this
    $(".app_content>div").each(function (index , item) {
        if ($(that).index() == index) {
            var cur_src = $(that).find("img").attr("src")
            $(that).find("img").attr("src" , cur_src.replace(".png" , "_a.png"))
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