$( document ).ready(function() {
    randomCards(3, "klejnoty", 1, 7);
    randomCards(2, "artefakty", 1, 6);
    randomCards(4, "zaklecia", 1, 14);
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
        $("#" + type + "").append("<img src=\"" + type + "/" + unique_random_numbers[i] + ".PNG\" height=\"150px\" width=\"150px\">")
    }
}

function losuj(){
    $("img").remove();
    randomCards(3, "klejnoty", 1, 7);
    randomCards(2, "artefakty", 1, 6);
    randomCards(4, "zaklecia", 1, 14);
}