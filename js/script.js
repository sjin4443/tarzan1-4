$(document).ready(function(){

    $(document).on("mousemove", function (event) {
        console.log(event.pageX);
    
        $(".land-1").css("background-position-x", event.pageX / 2 - 400)
        $(".land-2").css("background-position-x", event.pageX / 5 - 400)
        $(".land-3").css("background-position-x", event.pageX / 8 - 400)
        $(".land-4").css("background-position-x", event.pageX / 10 - 400)
    })

    $(".land-4").click(function(){
        $(".land-4").hide();
    })
})
