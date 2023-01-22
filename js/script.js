
$(function(){
  $("#_send").click(sendMessage);
  $("#messages").on("click","#Del_btn", function(){
      var self = this;
      del_msg(self);
  });
  $("#messages").on("click", "#Ed_btn", edit_msg);

});
var countDownDate = new Date("Nov 10, 2022 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "The Offer is Expired now";
  }
}, 1000);

var slideshows = document.querySelectorAll('[data-component="slideshow"]');
  
  // Apply to all slideshows that you define with the markup wrote
  slideshows.forEach(initSlideShow);

  function initSlideShow(slideshow) {

    var slides = document.querySelectorAll(`#${slideshow.id} [role="list"] .slide`); // Get an array of slides

    var index = 0, time = 2000;
    slides[index].classList.add('active');  
    
    setInterval( () => {
      slides[index].classList.remove('active');
      
      //Go over each slide incrementing the index
      index++;
      
      // If you go over all slides, restart the index to show the first slide and start again
      if (index === slides.length) index = 0; 
      
      slides[index].classList.add('active');

    }, time);
  }

  
function sendMessage() {
    

    var _First_Name = $("#floatingFName").val();
    var _Last_Name = $("#floatingLName").val();
    var _Email = $("#floatingEmail").val();
    var _Message_Body = $("#floatingTextarea2").val();
    var _Full_Name = _First_Name + " " + _Last_Name;

    var isempty = false;
    if(!_First_Name){
        $("#floatingFName").addClass("empty");
        isempty = true;
    }else{
        $("#floatingFName").removeClass("empty");
    }
    if(!_Last_Name){
        $("floatingLName").addClass("empty");
        isempty = true;
    }else{
        $("floatingLName").removeClass("empty");
    }
    if(!_Email){
        $("#floatingEmail").addClass("empty");
        isempty = true;
    }else{
        $("#floatingEmail").removeClass("empty");
    }
    if(!_Message_Body){
        $("#floatingTextarea2").addClass("empty");
        isempty = true;
    }else{
        $("#floatingTextarea2").removeClass("empty");
    }
    
    if(isempty){
        return;
    }
    
    $("#floatingFName").val("");
    $("#floatingLName").val("");
    $("#floatingEmail").val("");
    $("#floatingTextarea2").val("");
    
    var $div_1 = $("<div>");
    $($div_1).addClass("jname");
    $($div_1).append("Name: ");
    $($div_1).append(_Full_Name);

    var $div_2 = $("<div></div>");
    $($div_2).addClass("jmsg_body");
    $($div_2).append("Message: ");
    $($div_2).append(_Message_Body);

    var $div_3 = $("<div></div>");
    $($div_3).addClass("jemail");
    $($div_3).append("Email: ");
    $($div_3).append(_Email);

    var $btn_0 = $("<button></button>");
    $($btn_0).addClass("btn btn-danger btn-sm");
    $($btn_0).attr("type", "button");
    $($btn_0).attr("id", "Del_btn");
    $($btn_0).text("Delete");

    var $btn_1 = $("<button></button>");
    $($btn_1).addClass("btn btn-warning btn-sm");
    $($btn_1).attr("type", "button");
    $($btn_1).attr("id", "Ed_btn");
    $($btn_1).text("Edit");

    
    var $div_0 = $("<div></div>");
    $($div_0).addClass("message");
    $($div_0).append($div_1);
    $($div_0).append($div_2);
    $($div_0).append($div_3);

    var $div_m = $("<div></div>");
    $($div_m).addClass("outer_msg");
    $($div_m).append($div_0);
    $($div_m).append($btn_0);
    $($div_m).append($btn_1);


    
    $("#messages").append($div_m);
}

function del_msg(self){
    $(self).parent().remove();
}

function edit_msg(){
    var $parent_1 = $(this).parent();

    var $_div_0 = $($parent_1).children("div");

    // var $_div_1 = $($_div_0).children(".jname").get(0).innerHTML;   //// same as used below gives the innerhtml.
    var $_div_1 = $($_div_0).children(".jname").html();
    var $_div_2 = $($_div_0).children(".jmsg_body").html();
    var $_div_3 = $($_div_0).children(".jemail").html();
    var $f_name = $_div_1.split(" ");
    
    $("#floatingFName").val($f_name[0]);
    $("#floatingLName").val($f_name[1]);
    $("#floatingTextarea2").val($_div_2);
    $("#floatingEmail").val($_div_3);
    var self = this;    
    del_msg(self);

}