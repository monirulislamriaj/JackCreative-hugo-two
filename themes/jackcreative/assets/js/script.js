$(document).ready(function(){"use strict";$(".video-button").on("click",function(){var e='<iframe allowfullscreen src="'+$(this).attr("data-video")+'"></iframe>';$(this).replaceWith(e)}),AOS.init(),$(window).on("scroll",function(){100<=$(window).scrollTop()?$("#navigationBar").addClass("sticky-nav"):$("#navigationBar").removeClass("sticky-nav")}),TweenMax.fromTo(".switch",2,{opacity:1},{opacity:.3,repeat:-1,yoyo:!0,ease:Power2.easeInOut}),TweenMax.fromTo(".switch-two",2,{y:0},{y:10,repeat:-1,yoyo:!0,ease:Power2.easeInOut}),TweenMax.fromTo(".switch-three",2,{x:0},{x:10,repeat:-1,yoyo:!0,ease:Power2.easeInOut});$(".feedback-slider").on("init",function(e){const o=this;setTimeout(function(){var e=$(".slick-dots > li > button",o);$.each(e,function(e,o){var t=$(this).attr("aria-controls"),t=$("#"+t).data("dot-img");$(this).html('<img src="'+t+'" alt="" />')})},100)}).slick({slidesToShow:1,slidesToScroll:1,dots:!0,arrows:!1,adaptiveHeight:!0,autoplay:!0,autoplay:!0,fade:!0,centerMode:!0,centerPadding:"0px",focusOnSelect:!0,responsive:[{breakpoint:992,settings:{slidesToShow:1,slidesToScroll:1,dots:!1,centerMode:!1,autoplay:!0,infinite:!1}},{breakpoint:768,settings:{slidesToShow:1,slidesToScroll:1,dots:!1,autoplay:!0,infinite:!1}}]});$(function(){$("body").on("click touchstart",".next-more",function(e){e.preventDefault(),$(".lode-next:hidden").slice(0,4).slideDown(),0==$(".lode-next:hidden").length&&$(".next-more").css("display","none")})}),$(function(){$("body").on("click touchstart",".load-more",function(e){e.preventDefault(),$(".next-blog:hidden").slice(0,3).slideDown(),0==$(".next-blog:hidden").length&&$(".load-more").css("display","none")})}),$(".counter").counterUp({})});