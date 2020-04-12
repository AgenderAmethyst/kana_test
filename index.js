var charbox, guessbox, result_i, result_c;

function guess(g){
    if(event.key === 'Enter') {
        alert(g.value)
    }
}

window.onload = function() {
    charbox = document.getElementById("char");
    guessbox = document.getElementById("guess");
    result_i = document.getElementById("result-incorrect");
    result_c = document.getElementById("result-correct");
}