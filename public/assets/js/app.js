$(document).ready(function(){

    $(".selector-dd li:first-child").on("click", function(){
        $(".selector-dd li.item").toggle();
    });

});