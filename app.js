$(function(){
    $("#_send").click(sendMessage);
    $("#messages").on("click","#Del_btn", function(){
        var self = this;
        del_msg(self);
    });
    $("#messages").on("click", "#Ed_btn", edit_msg);

});
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
    $($div_0).append($div_4);

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