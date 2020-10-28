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

//Funzioni Di controllo Input
function Control(input) {
    if (document.getElementById("select1").value == "Binario"){
        let regex = /[^01 ]/gi;
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