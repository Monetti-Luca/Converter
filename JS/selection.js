//Fuzioni Utility
function Converti() {
    var from = document.getElementById("select1").value;
    var to = document.getElementById("select2").value;
    
    console.log(from, to);

    var txt = document.getElementById("Input1").value;

    if (from == "Binario") {
        switch (to){
            case "Binario": Output(Conv_Same(txt)); break;
            case "Esadecimale": Output(Conv_Bin_Esa(txt)); break;
            case "Ascii": Output(Conv_Bin_Ascii(txt)); break;
            case "Decimale": Output(Conv_Bin_dec(txt)); break;
        }
    }
    if (from == "Esadecimale") {
        switch (to){
            case "Binario": Output(Conv_Esa_Bin(txt)); break;
            case "Esadecimale": Output(Conv_Same(txt)); break;
            case "Ascii": Output(Conv_Esa_Ascii(txt)); break;
            case "Decimale": Output(Conv_Esa_dec(txt)); break;
        }
    }
    if (from == "Decimale") {
        switch (to){
            case "Binario": Output(Conv_dec_Bin(txt)); break;
            case "Esadecimale": Output(Conv_dec_Esa(txt)); break;
            case "Ascii": Output(Conv_dec_Ascii(txt)); break;
            case "Decimale": Output(Conv_Same(txt)); break;
        }
    }
    if (from == "Ascii") {
        switch (to){
            case "Binario": Output(Conv_Ascii_Bin(txt)); break;
            case "Esadecimale": Output(Conv_Ascii_Esa(txt)); break;
            case "Ascii": Output(Conv_Same(txt)); break;
            case "Decimale": Output(Conv_Ascii_dec(txt)); break;
        }
    }
}

function Reset(){
    var from = document.getElementById("Input1").value = "";
    var to = document.getElementById("Input2").value = "";
}

function Swap() {
    let sel1 = document.getElementById("select1");
    let sel2 = document.getElementById("select2");
    let temp = sel1.selectedIndex;

    sel1.selectedIndex = sel2.selectedIndex;
    sel2.selectedIndex = temp;

    let input1 = document.getElementById("Input1");
    let input2 = document.getElementById("Input2");
    let temp1 = input1.value;

    input1.value = input2.value;
    input2.value = temp1;
}

function Output(txt) {
    document.getElementById("Input2").value = txt;
}

function Esa_dec(chr) {
    if (chr >= "0" && chr <= "9" || chr >= "A" && chr <= "F") {
        switch (chr) {
            case "A": return 10;
            case "B": return 11;
            case "C": return 12;
            case "D": return 13;
            case "E": return 14;
            case "F": return 15;
            default : return Number(chr);
        }
    }
}
function dec_Esa(n) {
    if (n >= 0 && n < 16) {
        switch (n) {
            case 10: return "A";
            case 11: return "B";
            case 12: return "C";
            case 13: return "D";
            case 14: return "E";
            case 15: return "F";
            default: return n;
        }
    }
}

function dec_Ascii(n){
    switch (n){
        case 64: return '@'; break; 
   case 65: return 'A'; break; 
   case 66: return 'B'; break; 
   case 67: return 'C'; break; 
   case 68: return 'D'; break; 
   case 69: return 'E'; break; 
   case 70: return 'F'; break; 
   case 71: return 'G'; break; 
   case 72: return 'H'; break; 
   case 73: return 'I'; break; 
   case 74: return 'J'; break; 
   case 75: return 'K'; break; 
   case 76: return 'L'; break; 
   case 77: return 'M'; break; 
   case 78: return 'N'; break; 
   case 79: return 'O'; break; 
   case 80: return 'P'; break; 
   case 81: return 'Q'; break; 
   case 82: return 'R'; break; 
   case 83: return 'S'; break; 
   case 84: return 'T'; break; 
   case 85: return 'U'; break; 
   case 86: return 'V'; break; 
   case 87: return 'W'; break; 
   case 88: return 'X'; break; 
   case 89: return 'Y'; break; 
   case 90: return 'Z'; break; 
   case 91: return '['; break; 
   case 92: return "\\"; break; 
   case 93: return ']'; break; 
   case 94: return '^'; break; 
   case 95: return '_'; break; 
   case 96: return '`'; break; 
   case 97: return 'a'; break; 
   case 98: return 'b'; break; 
   case 99: return 'c'; break; 
   case 100: return 'd'; break; 
   case 101: return 'e'; break; 
   case 102: return 'f'; break; 
   case 103: return 'g'; break; 
   case 104: return 'h'; break; 
   case 105: return 'i'; break; 
   case 106: return 'j'; break; 
   case 107: return 'k'; break; 
   case 108: return 'l'; break; 
   case 109: return 'm'; break; 
   case 110: return 'n'; break; 
   case 111: return 'o'; break; 
   case 112: return 'p'; break; 
   case 113: return 'q'; break; 
   case 114: return 'r'; break; 
   case 115: return 's'; break; 
   case 116: return 't'; break; 
   case 117: return 'u'; break; 
   case 118: return 'v'; break; 
   case 119: return 'w'; break; 
   case 120: return 'x'; break; 
   case 121: return 'y'; break; 
   case 122: return 'z'; break; 
   case 123: return '{'; break; 
   case 124: return '|'; break; 
   case 125: return '}'; break; 
   case 126: return '~'; break; 
   case 127: return '';
    }
}

function Ascii_dec(t){
    switch (t){
        case '@': return "064"; break; 
        case 'A': return "065"; break; 
        case 'B': return "066"; break; 
        case 'C': return "067"; break; 
        case 'D': return "068"; break; 
        case 'E': return "069"; break; 
        case 'F': return "070"; break; 
        case 'G': return "071"; break; 
        case 'H': return "072"; break; 
        case 'I': return "073"; break; 
        case 'J': return "074"; break; 
        case 'K': return "075"; break; 
        case 'L': return "076"; break; 
        case 'M': return "077"; break; 
        case 'N': return "078"; break; 
        case 'O': return "079"; break; 
        case 'P': return "080"; break; 
        case 'Q': return "081"; break; 
        case 'R': return "082"; break; 
        case 'S': return "083"; break; 
        case 'T': return "084"; break; 
        case 'U': return "085"; break; 
        case 'V': return "086"; break; 
        case 'W': return "087"; break; 
        case 'X': return "088"; break; 
        case 'Y': return "089"; break; 
        case 'Z': return "090"; break; 
        case '[': return "091"; break; 
        case '\\': return "092"; break; 
        case ']': return "093"; break; 
        case '^': return "094"; break; 
        case '_': return "095"; break; 
        case '`': return "096"; break; 
        case 'a': return "097"; break; 
        case 'b': return "098"; break; 
        case 'c': return "099"; break; 
        case 'd': return "100"; break; 
        case 'e': return "101"; break; 
        case 'f': return "102"; break; 
        case 'g': return "103"; break; 
        case 'h': return "104"; break; 
        case 'i': return "105"; break; 
        case 'j': return "106"; break; 
        case 'k': return "107"; break; 
        case 'l': return "108"; break; 
        case 'm': return "109"; break; 
        case 'n': return "110"; break; 
        case 'o': return "111"; break; 
        case 'p': return "112"; break; 
        case 'q': return "113"; break; 
        case 'r': return "114"; break; 
        case 's': return "115"; break; 
        case 't': return "116"; break; 
        case 'u': return "117"; break; 
        case 'v': return "118"; break; 
        case 'w': return "119"; break; 
        case 'x': return "120"; break; 
        case 'y': return "121"; break; 
        case 'z': return "122"; break; 
        case '{': return "123"; break; 
        case '|': return "124"; break; 
        case '}': return "125"; break; 
        case '~': return "126"; break; 
        case '': return "127";
    }
}
//Funzioni Di controllo Input
function Control(input) {
    let doc = document.getElementById("select1").value;

    if (doc == "Binario") {
        let regex = /[^01 ]/gi;
        input.value = input.value.replace(regex, "");
    }
    if (doc == "Decimale") {
        let regex = /[^0-9 ]/gi;
        input.value = input.value.replace(regex, "");
    }
    if (doc == "Esadecimale") {
        let regex = /[^0-9ABCDEF ]/g;
        input.value = input.value.replace(regex, "");
    }
}



//Funzioni di conversione

function Conv_Same(txt) {
    let input1 = document.getElementById("Input1");
    let input2 = document.getElementById("Input2");

    return input1.value;
}

function Conv_Bin_dec(txt){
    var arr = [];
    arr = txt.split(" ");

    let conversione = "";

    for (let j = 0; j < arr.length; j++){
        if (arr[j] == ""){
            continue;
        }
        let bin = arr[j].split("").map(function(n) { return Number(n)});

        let decimale = 0;

        for (i = 0; i < bin.length; i++) {
            decimale += bin[bin.length - 1 - i] * Math.pow(2, i);
        }

        conversione += String(decimale) + " ";
    }

    return conversione;
}

function Conv_dec_Bin(txt) {
    let arr = [];
    arr = txt.split(" ");
    let conversione = "";

    for (let j = 0; j < arr.length; j++){
        if (arr[j] == ""){
            continue;
        }

        let decimale = Number(arr[j]);
        let bin = "";

        while (decimale >= 1) {
            bin = String(decimale % 2) + bin;
            decimale = Math.floor(decimale/2);
        }

        conversione += bin + " ";
    }

    return conversione;
}


function Conv_Esa_dec(txt) {
    let arr = [];
    arr = txt.split(" ");
    let conversione = "";

    for (let j = 0; j < arr.length; j++) {
        if (arr[j] == "") continue;

        let esa = arr[j].split("");
        let decimale = 0;

        for (let i = 0; i < esa.length; i++) {
            decimale += Esa_dec(esa[esa.length - i - 1]) * Math.pow(16, i);
        }

        conversione += decimale + " ";
    }

    return conversione;
}

function Conv_dec_Esa(txt) {
    let arr = [];
    arr = txt.split(" ");
    let conversione = "";

    for (let j = 0; j < arr.length; j++) {
        if (arr[j] == "") continue;

        let dec = Number(arr[j]);

        let esa = Esa_Ric(dec);

        conversione += esa + " ";
    }

    return conversione;
}

function Esa_Ric(n) {
    if (n < 16) return String(dec_Esa(n));
    else return Esa_Ric(Math.floor(n / 16)) + Esa_Ric(n % 16);
}

function Conv_Bin_Esa(txt){
    let dec = Conv_Bin_dec(txt);
    return Conv_dec_Esa(dec);
}

function Conv_Esa_Bin(txt){
    let dec = Conv_Esa_dec(txt);
    return Conv_dec_Bin(dec);
}

function Conv_dec_Ascii(txt){
    let arr = [];1
    arr = txt.split(" ");
    let conversione = "";

    let decimale = [];

    for (let j = 0; j < arr.length; j++) {
        if (arr[j] == "") continue;
        
        while (arr[j].length > 3) {
            decimale.push(Number(arr[j].substring(0,3)));
            arr[j] = arr[j].substring(3);
        }

        decimale.push(Number(arr[j]));
    }

    for (let i = 0; i < decimale.length; i++) {
        conversione += dec_Ascii(decimale[i]);
    }

    return conversione;
}

function Conv_Ascii_dec(txt){
    let arr = [];
    arr = txt.split("");
    let conversione = "";

    for (let i = 0; i < arr.length; i++) {
        conversione += Ascii_dec(arr[i]) + " ";
    }

    return conversione;
}

function Conv_Bin_Ascii(txt){
    let decimale = Conv_Bin_dec(txt);
    return Conv_dec_Ascii(decimale);
}

function Conv_Ascii_Bin(txt){
    let decimale = Conv_Ascii_dec(txt);
    return Conv_dec_Bin(decimale);
}

function Conv_Esa_Ascii(txt){
    let decimale = Conv_Esa_dec(txt);
    return Conv_dec_Ascii(decimale);
}
function Conv_Ascii_Esa(txt){
    let decimale = Conv_Ascii_dec(txt);
    return Conv_dec_Esa(decimale);
}
