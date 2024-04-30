
jQuery.fn.highlight = function(pat) {
function innerHighlight(node, pat) {
var skip = 0;
if (node.nodeType == 3) {
var pos = node.data.toUpperCase().indexOf(pat);
pos -= (node.data.substr(0, pos).toUpperCase().length - node.data.substr(0, pos).length);
if (pos >= 0) {
var spannode = document.createElement('span');
spannode.className = 'highlight';
var middlebit = node.splitText(pos);
var endbit = middlebit.splitText(pat.length);
var middleclone = middlebit.cloneNode(true);
spannode.appendChild(middleclone);
middlebit.parentNode.replaceChild(spannode, middlebit);
skip = 1;
}
}
else if (node.nodeType == 1 && node.childNodes && !/(script|style)/i.test(node.tagName)) {
for (var i = 0; i < node.childNodes.length; ++i) {
i += innerHighlight(node.childNodes[i], pat);
}
}
return skip;
}
return this.length && pat && pat.length ? this.each(function() {
innerHighlight(this, pat.toUpperCase());
}) : this;
};


jQuery.fn.removeHighlight = function() {
return this.find("span.highlight").each(function() {
this.parentNode.firstChild.nodeName;
with (this.parentNode) {
replaceChild(this.firstChild, this);
normalize();
}
}).end();
};

// Highlight & 最初の文字へスクロール


function doHighlight() {
var word = $("#word").val()
.replace(/^\s+|\s+$/g, "")
.replace(/\s+/g, " ")
.split(" ");
for (i in word) {
if (word[i] != "") {
$("#target").removeHighlight();
$("#target").highlight(word[i]);
var ypos = $(".highlight").offset().top;
window.scrollTo({
left: 0,
top: ypos,
behavior: "smooth"
});
}
}
}


$(window).scroll(function () {
    const TargetPos = 300;
    const ScrollPos = $(window).scrollTop();
    if( ScrollPos >= TargetPos) {
      $("#onlineshop-topbutton").fadeIn();
    }
    else {
      $("#onlineshop-topbutton").fadeOut();
    };
  
  });

  $("#drawer_toggle").click(function(){
    $(this).toggleClass("open");
    $("#global_nav").toggleClass("sp_open");
  });


  function textSplit(target) {
    target.children().andSelf().contents().each(function() {
      if (this.nodeType == 3) {
        $(this).replaceWith($(this).text().replace(/(\w)/g, "<span>$&</span>"));
      }
    });
  }
  


$(function () {
  $(".section-box.item").slick({
      centerMode: false, 
      centerPadding: false,
      slidesToShow: 5,
      autoplay: true,
      autoplaySpeed: 1000,
      dots: true,
      arrows: false,
     //  adaptiveHeight:true,
      prevArrow: '<div class="slick-prev item"></div>',
      nextArrow: '<div class="slick-next item"></div>',
  });
})
