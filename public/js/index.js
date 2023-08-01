$(document).ready(function(){
    
    // Route buttons

    let routeHeading = $("h1").html();
    if(routeHeading === "Work"){
        $("a:eq(1)").addClass("btn-selected");
    } else {
        $("a:eq(0)").addClass("btn-selected");
    }

    // Input field height based on heading height

    let headingDiv = $(".heading").css("height");
    
    $(".new-item").css("height",headingDiv);
    console.log(headingDiv === $(".new-item").css("height"));

    // Work route - override item border radius

    if($(".item").length === 1){
        $(".item").css("border-radius","8px");
    }

    // Button click animation

    $("button").click(function(){
        $("button").addClass("click-glow");
    });
});