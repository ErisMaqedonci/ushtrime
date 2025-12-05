document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("task1").addEventListener("click", detyra1);
    document.getElementById("task2").addEventListener("click", detyra2);
    document.getElementById("task3").addEventListener("click", detyra3);
    document.getElementById("task4").addEventListener("click", detyra4);
    document.getElementById("task5").addEventListener("click", detyra5);
});


function detyra1() {
    let emri = prompt("Ju lutem shkruani emrin tuaj:");
    let mosha = prompt("Ju lutem shkruani moshën tuaj:");
    alert("Emri: " + emri + "\nMosha: " + mosha);
}


function detyra2() {
    let numri1 = prompt("Shkruani numrin e parë:");
    let numri2 = prompt("Shkruani numrin e dytë:");
    let shuma = Number(numri1) + Number(numri2);
    alert("Shuma e " + numri1 + " + " + numri2 + " = " + shuma);
}


function detyra3() {
    let numri = prompt("Shkruani një numër:");
    numri = Number(numri);

    if (numri % 2 === 0) {
        alert("Numri " + numri + " është ÇIFT");
    } else {
        alert("Numri " + numri + " është TEK");
    }
}


function detyra4() {
    let fjala1 = prompt("Shkruani fjalën e parë:");
    let fjala2 = prompt("Shkruani fjalën e dytë:");
    let fjalia = fjala1 + " " + fjala2;
    alert("Fjalia e bashkuar: " + fjalia);
}


function detyra5() {
    let fjala1 = prompt("Shkruani një fjalë:");
    let fjala2 = prompt("Shkruani sërish një fjalë:");
    alert("Fjala e përsëritur është: " + fjala1 + " " + fjala2);
}
