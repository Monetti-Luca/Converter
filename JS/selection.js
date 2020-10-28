//Fuzioni Utility
function Converti() {
    var from = document.getElementById("select1").value;
    var to = document.getElementById("select2").value;
    
    var txt = document.getElementById("Input1").value;

    if (from == "Binario") {
        switch (to){
            case "Binario": Conv_Same(txt);
            case "Intero": Conv_Bin_Int(txt);
        }
    }
    if (from == "Intero") {
        switch (to) {
            case "Intero": Conv_Same(txt);
            case "Binario": Conv_Int_Bin(txt);
            case "Esadecimale": Conv_Int_Esa(txt);
        }
    }
    if (from == "Esadecimale") {
        switch (to) {
            case "Intero": Conv_Esa_Int(txt);
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

function Esa_Int(chr) {
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
function Int_Esa(n) {
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

//Funzioni Di controllo Input
function Control(input) {
    let doc = document.getElementById("select1").value;

    if (doc == "Binario") {
        let regex = /[^01 ]/gi;
        input.value = input.value.replace(regex, "");
    }
    if (doc == "Intero") {
        let regex = /[^0-9 ]/gi;
        input.value = input.value.replace(regex, "");
    }
    if (doc == "Esadecimale") {
        let regex = /[^0-9ABCDEF ]/g;
        input.value = input.value.replace(regex, "");
    }
}



//Funzioni di conversione


function Conv_Bin_Int(txt){
    var arr = [];
    arr = txt.split(" ");

    let conversione = "";

    for (let j = 0; j < arr.length; j++){
        if (arr[j] == ""){
            continue;
        }
        let bin = arr[j].split("").map(function(n) { return Number(n)});

        let intero = 0;

        for (i = 0; i < bin.length; i++) {
            intero += bin[bin.length - 1 - i] * Math.pow(2, i);
        }

        conversione += String(intero) + " ";
    }

    document.getElementById("Input2").value = conversione;
}

function Conv_Int_Bin(txt) {
    let arr = [];
    arr = txt.split(" ");
    let conversione = "";

    for (let j = 0; j < arr.length; j++){
        if (arr[j] == ""){
            continue;
        }

        let intero = Number(arr[j]);
        let bin = "";

        while (intero >= 1) {
            bin = String(intero % 2) + bin;
            intero = Math.floor(intero/2);
        }

        conversione += bin + " ";
    }

    document.getElementById("Input2").value = conversione;
}


function Conv_Esa_Int(txt) {
    let arr = [];
    arr = txt.split(" ");
    let conversione = "";

    for (let j = 0; j < arr.length; j++) {
        if (arr[j] == "") continue;

        let esa = arr[j].split("");
        let intero = 0;

        for (let i = 0; i < esa.length; i++) {
            intero += Esa_Int(esa[esa.length - i - 1]) * Math.pow(16, i);
        }

        conversione += intero + " ";
    }

    document.getElementById("Input2").value = conversione;
}

function Conv_Int_Esa(txt) {
    let arr = [];
    arr = txt.split(" ");
    let conversione = "";

    for (let j = 0; j < arr.length; j++) {
        if (arr[j] == "") continue;

        let int = Number(arr[j]);

        let esa = Esa_Ric(int);

        conversione += esa + " ";
    }

    document.getElementById("Input2").value = conversione;
}

function Esa_Ric(n) {
    if (n < 16) return String(Int_Esa(n));
    else return Esa_Ric(Math.floor(n / 16)) + Esa_Ric(n % 16);
}