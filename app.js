// Je déclare des variables
const buttpn = document.querySelector('#button').onclick = changeColor
const button2 = document.querySelector('#button2').onclick = changeBackground

// Cette fonction consiste à changer la couleur du paragraphe
function changeColor() {
    paragraph.style.color = 'red'
}

// Cette fonction consiste à changer la couleur du background
function changeBackground() {
    document.body.style.backgroundColor = 'blue';
}







// les trois boites de dialogue en JS:
// alert: contient seulement le bouton "OK"
// confirm: contient les boutons "OK" et "Annuler"
// prompt: contient un champ de texte ainsi que les boutons "OK" et "Annuler"


// autre façon de lire tous les éléments d'un tableau avec une boucle for
// let animals = ["lion", "cat", "hyena", "pig", "dog"]
// for (let animal of animals) {
//     console.log(animal);
// }







// exercices d'Auberton
// ex 3
// let budget = 30
// let achats = 20

// if (budget >= achats) {
//     alert("C'est bon !")
// } else alert("Pas bon !")



// ex 4
// let ht = prompt("Prix HT ?")
// let ttc = ht * 1.2
// document.body.innerHTML = ttc



// ex 5
// let ht = prompt("Prix HT ?")
// let tva = prompt("Taux de la TVA ?")
// // on utilise parseInt ou Number pour additionner les deux variables, sans ça elles se mettraient bout à bout
// let ttc = (ht * tva / 100) + Number(ht)
// document.body.innerHTML = ttc



// ex 6
// let ht = prompt("Prix HT ?")
// let tva = prompt("Taux de la TVA ?")
// let ttc = (ht * tva / 100) + Number(ht)

// if (ttc > 100) {
//     document.body.innerHTML = '<h1 style="color:red">' + ttc + '</h1>'
// } else document.body.innerHTML = '<h1 style="color:green">' + ttc + '</h1>'



// ex 7
// document.querySelector("#cocktail").innerHTML = "Long Island Iced Tea"



// ex 8
// for (let i = 10; i <= 1000; i += 10) {
//     console.log(i)
// }



// ex 9
// let age = prompt("Quel âge avez-vous ?")

// if (age >= 18) {
//     alert("Vous êtes majeur !")
// } else alert("Vous êtes mineur !")



// ex 10
// let code = 77000

// while (code <= 77999) {
//     console.log(code);
//     code++
// }



// ex 11
// let n = 5;
// let html = '';
// for(let i = 1;i <= 10;i++) {
//    html = html + n + ' x ' + i + ' = ' + (n * i) + ' <br />';
// }
// document.body.innerHTML = html;