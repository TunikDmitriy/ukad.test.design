function setContentHeight(element, height){
    $(element).height(height);
}
function setLineHeight(element, height){
    $(element).css('lineHeight', height);
}

$(document).ready(function() {
    setContentHeight(document.querySelector('#content-1'), document.documentElement.clientHeight);
    setLineHeight(document.querySelector('#content-1 .vertical-middle-out'), document.documentElement.clientHeight - 200 + 'px');
});
$(window).on("orientationchange, resize", function() {
    setContentHeight(document.querySelector('#content-1'), document.documentElement.clientHeight);
    setLineHeight(document.querySelector('#content-1 .vertical-middle-out'), document.documentElement.clientHeight - 200 + 'px');
});