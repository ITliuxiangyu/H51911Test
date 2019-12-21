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

    var dian_index = $(this).index()

    $(".tabbar_item").each(function (index , item)   {
        if (dian_index == index) {
            var cur_src = $(item).find("img").attr("src")
            if (cur_src.indexOf("_a") == -1) {
                $(item).find("img").attr("src" ,cur_src.replace(".png" , "_a.png"))
            }
        } else {
            var cur_src = $(item).find("img").attr("src")
            $(item).find("img").attr("src" ,cur_src.replace("_a" , ""))
    
        }
    })

    
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

// 轮播图的高度
$(".lunbo_img").css({
    "height": $(".lunbo_img").width() * 194 / 345 + "px"
})


window.onresize = function () {
    console.log("999")
    window.location.reload()
}