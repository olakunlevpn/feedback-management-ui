$(document).ready(function(){

  $("#search-icon").on('click',function(){
    $("#search-input").toggle().removeClass("d-none");
    $("#search-input").addClass("mt-3")
    $("#logo").toggle();
    $("#nav-sign-in").toggle();
    $(".icon-column").hide();
})




$("#closeSearch").on('click',function(){
$("#logo").show();

$("#search-input").removeClass("mt-3")
$("#search-input").hide()
$(".icon-column").show();
})




    $(".show-comment").click(function(event){
  $(this).parent().next().toggle();
    })

$('.comment-btn').click(function(event){
    event.preventDefault();
    $(this).parent().next().toggle();
})

$(".textarea-comment").on('click',function(event){
    
event.preventDefault();



})




$('.follow-button').click(function(event){

event.preventDefault();

$(this).css("backgroundColor","#ff8c00")




})



$('.add-comment-btn').click(function(event){

$("#comment-area").toggle();


//$("#comment-section").append("<div class='row mt-3'><div class='list-group-item'><div class='d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-1'><small class='opacity-50 text-nowrap fw-light'><span class='rounded-circle fw-bolder initial'>MM</span><span class='p-2 fw-bolder'> Brianne Reinhardt.</span><small> 11 Month ago</small></small><div class='btn-toolbar mb-2 mb-md-0'><div class='me-2'><button class='btn btn-light'><i class='bi bi-flag'></i> 0</button></div><button class='btn btn-light'><i class='bi bi-flag'></i> 0</button></div></div><p class='fw-dark ms-5 h6 mb-2'>"+comm+"</p><div class='d-grid gap-2 mt-3 d-md-block'><button class='btn btn-light show-comment'  type='button'><i class='bi bi-chat-left'></i> <small class='text-dark'>82</small></button><button class='btn btn-light' type='button'><i class='bi bi-star'></i><small class='text-dark'></small></button><button class='btn btn-light' type='button'><i class='bi bi-share'></i><small class='text-dark'></small></button><button class='btn btn-light' type='button'><i class='bi bi-flag'></i><small class='text-dark'></small></button></div><div class='row mt-3' style='display:none'><div class='form-floating'><textarea class='form-control' placeholder='Leave a comment here' id='floatingTextarea2' style='height: 100px;'></textarea<label for='floatingTextarea2'>Comments</label></div><div class='d-grid gap-2 d-md-flex justify-content-md-end mt-3'><button class='btn btn-primary me-md-2'  type='button'>Comment</button></div></div></div></div>")







});

/* global bootstrap: false
(function () {
  'use strict'
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  tooltipTriggerList.forEach(function (tooltipTriggerEl) {
    new bootstrap.Tooltip(tooltipTriggerEl)
  })
})()

 */
});

