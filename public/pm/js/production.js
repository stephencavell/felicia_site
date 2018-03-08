//This will be production.js

$(document).ready(function() {
    
    //advertising images hiding/showing
    function hide_adv_imgs() {
        $("#advertising").css("display", "none");
    }

    function show_adv_imgs() {
        $("#advertising").css("display", "inline");
    }
    //editorial images hiding/showing
    function hide_edt_imgs() {
        $("#editorial").css("display", "none");
    }

    function show_edt_imgs() {
        $("#editorial").css("display", "inline");
    }
    
    //contact info hiding/showing
    function hide_contact() {
        $("#contact_info").css("display", "none");
    }

    function show_contact() {
        $("#contact_info").css("display", "inline");
    }
    
    //click handlers for buttons
    $("#adv_button").click(function() {
        hide_edt_imgs();
        hide_contact();
        show_adv_imgs();
        
        $("#adv_button").css("text-decoration", "underline");
        $("#edt_button").css("text-decoration", "none");
        $("#cont_button").css("text-decoration", "none");
        $("#show_all").css("text-decoration", "none");
        
        //show project management title
        $("#pm_title").css("display", "block");
    });
    
    $("#edt_button").click(function() {
        hide_adv_imgs();
        hide_contact();
        show_edt_imgs();
        
        $("#adv_button").css("text-decoration", "none");
        $("#edt_button").css("text-decoration", "underline");
        $("#cont_button").css("text-decoration", "none");
        $("#show_all").css("text-decoration", "none");
        
        //show project management title
        $("#pm_title").css("display", "block");
    });
    
    $("#cont_button").click(function() {
        hide_edt_imgs();
        hide_adv_imgs();
        show_contact();
        
        $("#adv_button").css("text-decoration", "none");
        $("#edt_button").css("text-decoration", "none");
        $("#cont_button").css("text-decoration", "underline");
        $("#show_all").css("text-decoration", "none");
        
        //hide project management title
        $("#pm_title").css("display", "none");
    });
    
    $("#show_all").click(function() {
        show_edt_imgs();
        show_adv_imgs();
        show_contact();
        
        $("#adv_button").css("text-decoration", "none");
        $("#edt_button").css("text-decoration", "none");
        $("#cont_button").css("text-decoration", "none");
        $("#show_all").css("text-decoration", "underline");
        
        //show project management title
        $("#pm_title").css("display", "block");
    });
});

