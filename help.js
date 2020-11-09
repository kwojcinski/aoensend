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
}

function random(from, to){
 return Math.floor(Math.random() * to) + from;
}