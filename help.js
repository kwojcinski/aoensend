$( document ).ready(function() {
    console.log( "ready!" );
});

function randomKlejnoty(){
    var unique_random_numbers = [];
    while (unique_random_numbers.length < 3) {
        var random_number = random(1, 7)
        if (unique_random_numbers.indexOf(random_number) == -1) { 
            // Yay! new random number
            unique_random_numbers.push( random_number );
        }
    }
    for(var i = 0; i < unique_random_numbers.length; i++){
        $("#klejnoty").append("<img src=\"klejnoty/" + unique_random_numbers[i] + ".PNG\" height=\"120px\" width=\"120px\">")
    }

}

function randomArtefakty(){
    var unique_random_numbers = [];
    while (unique_random_numbers.length < 3) {
        var random_number = random(1, 6)
        if (unique_random_numbers.indexOf(random_number) == -1) { 
            // Yay! new random number
            unique_random_numbers.push( random_number );
        }
    }
    for(var i = 0; i < unique_random_numbers.length; i++){
        $("#artefakty").append("<img src=\"artefakty/" + unique_random_numbers[i] + ".PNG\" height=\"120px\" width=\"120px\">")
    }
}

function randomZaklecia(){
    var unique_random_numbers = [];
    while (unique_random_numbers.length < 3) {
        var random_number = random(1, 14)
        if (unique_random_numbers.indexOf(random_number) == -1) { 
            // Yay! new random number
            unique_random_numbers.push( random_number );
        }
    }
    for(var i = 0; i < unique_random_numbers.length; i++){
        $("#zaklecia").append("<img src=\"zaklecia/" + unique_random_numbers[i] + ".PNG\" height=\"120px\" width=\"120px\">")
    }
}

function random(from, to){
 return Math.floor(Math.random() * to) + from;
}