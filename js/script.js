var outputDiv = document.getElementsByClassName('result');
var outputOne = outputDiv[0];
var outputTwo = outputDiv[1];
var listName = ['Bianchi', 'Neri', 'Rossi', 'Verdi', 'Gialli'];
var subNameUser = prompt('inserisci il tuo cognome');
listName.push(subNameUser)
listName.sort();
var text = '';
var i = 0;
while (i < listName.length) {
    text +='<li>' + listName[i] + '</li>';
    i++;
}
outputOne.innerHTML = text;
outputTwo.innerHTML += 'ti trovi in ordine alfabetico ' + (listName.indexOf(subNameUser) + 1 ) ;
