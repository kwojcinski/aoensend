var rotation = 0;

$( document ).ready(function() {
    $(".imgCard").remove();
    randomCards(3, "klejnoty", 1, 7);
    randomCards(2, "artefakty", 1, 6);
    randomCards(4, "zaklecia", 1, 14);
    setTimeout(() => { 
        $(".imgCard").removeClass('fade')
    }, 100);
});


function randomCards(limit, type, from, to){
    var unique_random_numbers = [];
    while (unique_random_numbers.length < limit) {
        var random_number = Math.floor(Math.random() * to) + from;
        if (unique_random_numbers.indexOf(random_number) == -1) { 
            // Yay! new random number
            unique_random_numbers.push( random_number );
        }
    }
    for(var i = 0; i < unique_random_numbers.length; i++){
        $("#" + type + "").append("<img class=\"imgCard fade\" src=\"" + type + "/" + unique_random_numbers[i] + ".PNG\">")
    }
}

function losuj(){
    rotation -= 360;
    var button = document.querySelector('input')
    button.style.transform = "translateZ(0px) rotateZ(" + rotation + "deg)"
    $(".imgCard").addClass('fade')
    setTimeout(() => { 
        $(".imgCard").remove();
        randomCards(3, "klejnoty", 1, 7);
        randomCards(2, "artefakty", 1, 6);
        randomCards(4, "zaklecia", 1, 14);
        setTimeout(() => { 
            $(".imgCard").removeClass('fade')
        }, 100);
    }, 500);
    
    
}