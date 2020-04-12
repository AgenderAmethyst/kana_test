var charbox, guessbox, result_i, result_c;

var hiragana = { a: "あ", i: "い", u: "う", e: "え", o: "お", ka: "か", ga: "が", ki: "き", gi: "ぎ", ku: "く", gu: "ぐ", ke: "け", ge: "げ", ko: "こ", go: "ご", sa: "さ", za: "ざ", shi: "し", zi: "じ", su: "す", zu: "ず", se: "せ", ze: "ぜ", so: "そ", zo: "ぞ", ta: "た", da: "だ", chi: "ち", ji: "ぢ", tsu: "つ", zu: "づ", te: "て", de: "で", to: "と", do: "ど", na: "な", ni: "に", nu: "ぬ", ne: "ね", no: "の", ha: "は", ba: "ば", pa: "ぱ", hi: "ひ", bi: "び", pi: "ぴ", fu: "ふ", bu: "ぶ", pu: "ぷ", he: "へ", be: "べ", pe: "ぺ", ho: "ほ", bo: "ぼ", po: "ぽ", ma: "ま", mi: "み", mu: "む", me: "め", mo: "も", ya: "や", yu: "ゆ", yo: "よ", ra: "ら", ri: "り", ru: "る", re: "れ", ro: "ろ", wa: "わ", wi: "ゐ", wo: "を", n: "ん"};

var currentguess = [];

function gen(){
    currentguess = Object.entries(hiragana)[Math.floor(Math.random() * Object.entries(hiragana).length)];
    charbox.innerHTML = currentguess[1];
}

function guess(g){
    if(event.key === 'Enter') {
        alert(g.value === currentguess[0]);
        gen()
    }
}

window.onload = function() {
    charbox = document.getElementById("char");
    guessbox = document.getElementById("guess");
    result_i = document.getElementById("result-incorrect");
    result_c = document.getElementById("result-correct");

    this.gen()
}
