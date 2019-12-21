// 内容区域的高度
var screen_h = window.screen.height
var screen_w = window.screen.width

$(".app_content").css({
    "height": screen_h - $(".app_tabbar").outerHeight() + "px"
})