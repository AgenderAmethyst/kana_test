var charbox, guessbox, result_i, result_c, scriptsbox;

var hiragana = { a: "あ", i: "い", u: "う", e: "え", o: "お", ka: "か", ga: "が", ki: "き", gi: "ぎ", ku: "く", gu: "ぐ", ke: "け", ge: "げ", ko: "こ", go: "ご", sa: "さ", za: "ざ", shi: "し", zi: "じ", su: "す", zu: "ず", se: "せ", ze: "ぜ", so: "そ", zo: "ぞ", ta: "た", da: "だ", chi: "ち", ji: "ぢ", tsu: "つ", du: "づ", te: "て", de: "で", to: "と", do: "ど", na: "な", ni: "に", nu: "ぬ", ne: "ね", no: "の", ha: "は", ba: "ば", pa: "ぱ", hi: "ひ", bi: "び", pi: "ぴ", fu: "ふ", bu: "ぶ", pu: "ぷ", he: "へ", be: "べ", pe: "ぺ", ho: "ほ", bo: "ぼ", po: "ぽ", ma: "ま", mi: "み", mu: "む", me: "め", mo: "も", ya: "や", yu: "ゆ", yo: "よ", ra: "ら", ri: "り", ru: "る", re: "れ", ro: "ろ", wa: "わ", wi: "ゐ", wo: "を", n: "ん"};
var katakana = { a: "ア", i: "イ", u: "ウ", e: "エ", o: "オ", ka: "カ", ga: "ガ", ki: "キ", gi: "ギ", ku: "ク", gu: "グ", ke: "ケ", ge: "ゲ", ko: "コ", go: "ゴ", sa: "サ", za: "ザ", shi: "シ", zi: "ジ", su: "ス", zu: "ズ", se: "セ", ze: "ゼ", so: "ソ", zo: "ゾ", ta: "タ", da: "ダ", chi: "チ", ji: "ヂ", tsu: "ツ", du: "ヅ", te: "テ", de: "デ", to: "ト", do: "ド", na: "ナ", ni: "ニ", nu: "ヌ", ne: "ネ", no: "ノ", ha: "ハ", ba: "バ", pa: "パ", hi: "ヒ", bi: "ビ", pi: "ピ", fu: "フ", bu: "ブ", pu: "プ", he: "ヘ", be: "ベ", pe: "ペ", ho: "ホ", bo: "ボ", po: "ポ", ma: "マ", mi: "ミ", mu: "ム", me: "メ", mo: "モ", ya: "ヤ", yu: "ユ", yo: "ヨ", ra: "ラ", ri: "リ", ru: "ル", re: "レ", ro: "ロ", wa: "ワ", wi: "ヰ", wo: "ヲ", n: "ン"};
var currentguess = [];

function gen(){
    if (scriptsbox.value === "hira"){
        currentguess = Object.entries(hiragana)[Math.floor(Math.random() * Object.entries(hiragana).length)];
    }else if (scriptsbox.value === "kata"){
        currentguess = Object.entries(katakana)[Math.floor(Math.random() * Object.entries(katakana).length)];
    }else{
        if (Math.random() > 0.5){
            currentguess = Object.entries(hiragana)[Math.floor(Math.random() * Object.entries(hiragana).length)];
        }else {
            currentguess = Object.entries(katakana)[Math.floor(Math.random() * Object.entries(katakana).length)];
        }
    }
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
    scriptsbox = document.getElementById("scripts");
    result_i = document.getElementById("result-incorrect");
    result_c = document.getElementById("result-correct");

    this.gen()
}
