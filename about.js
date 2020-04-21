$("#bars").click(function(){
  $(this).fadeOut(200, function(){
    $("#close").fadeIn();
    $("#close").css({
      "float": "right",
      "margin": "12px",
      "position": "relative",
      "top": "5px",
      "left": "5px"
    })
    $("nav ul").css({
      "display": "block",
      "padding": "0"
    });
    $("body").css("backgroundColor", "#eaf6fc");
    $("nav div").css({
      "display": "block",
    })
    $("nav ul li").css({
      "display": "block"
    });
    $("#container").css("display", "none")
  })
})
$("#close").click(function(){
  $(this).fadeOut(200, function(){
    $("#bars").fadeIn();
    $("nav ul").css({
      "display": "none",

    });
    $("nav").css("height", "62px")
    $("nav div").css({
      "display": "flex",
     })
    $("nav ul li").css({
      "display": "inline"
    });
    $("#container").css("display", "grid")
  })
})
