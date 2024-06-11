// Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while.


// creo una lista della spesa
const myList = ["pane", "tofu", "verdura", "biscotti", "ceci", "lenticchie", "patatine", "birra"];


// per ogni elemento devo stapare un li in pagina

// prendo elemento contenitore della mia lista
const unorderList = document.getElementById("my_list");


// creo un ciclo while per prendere i singoli elementi dell'array:
// creo la variabile
let i = 0; //la setto a zero, perché devo dare una condizione di partenza al ciclo successivo
while(i < myList.length){ // metto la condizione per la quale il ciclo deve continuare
    // creo l'elemento per ogni i
    let listItem = `<li><i class="fa-regular fa-square"></i>${myList[i]}</li>`;

    // inserisco questo elemento nel contenitore della lista
    unorderList.innerHTML += listItem;

    // aumenta l'i di uno (altrimenti loop)
    i++;
}