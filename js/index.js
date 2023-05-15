$(document).ready(function(){
    $("#search-icon").on('click',function(){
        $("#search-input").toggle().removeClass("d-none");
        $("#search-input").addClass("mt-3")
        $("#logo").toggle();
        $("#nav-sign-in").toggle();
        $(".icon-column").hide();

    })




 
   $("#closeSearch").on('click',function(){
    $("#search-input").removeClass("mt-3")
    $("#logo").show();
    $("#search-input").hide()
    $(".icon-column").show();
   })


    $("#login-link").click(function(){
        $("#sign-up-modal").hide();
        $("#login-modal").show();
    })

    $("#sign-up-link").click(function(){
        $("#sign-up-modal").show();
        $("#login-modal").hide();
        $("#exampleModalLabel").text("Sign Up")

    })


    $("#forgot-password").click(function(){
        $("#recover-password").show();
        $("#login-modal").hide();
        $("#exampleModalLabel").text("Forgot Password?")
    })

})



/* global bootstrap: false 
(function () {
    'use strict'
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    tooltipTriggerList.forEach(function (tooltipTriggerEl) {
      new bootstrap.Tooltip(tooltipTriggerEl)
    })
  })()*/