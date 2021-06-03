var outputDiv = document.getElementsByClassName('result');
var outputOne = outputDiv[0];
var listName = ['Bianchi', 'Neri', 'Rossi', 'Verdi', 'Gialli'];
var subNameUser = prompt('inserisci il tuo cognome');
listName.push(subNameUser)
listName.sort();
var text = '';
var i = 0;
while (i < listName.length) {
    text += listName[i] + '<br>'
    i++
}
outputOne.innerHTML = text;
outputOne.innerHTML += 'ti trovi in ordine alfabetico ' + (listName.indexOf(subNameUser) + 1 ) ;
