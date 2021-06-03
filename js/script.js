var outputDiv = document.getElementsByClassName('result');
var outputOne = outputDiv[0];
var outputTwo = outputDiv[1];
var listName = ['Bianchi', 'Neri', 'Rossi', 'Verdi', 'Gialli'];
var subNameUser = prompt('inserisci il tuo cognome');
listName.push(subNameUser)


var listNameLow = [];
var x = 0;
while (listName.length > listNameLow.length) {
    listNameLow.push(listName[x].toLowerCase());
    x++;
}

listNameLow.sort();


var listNameRight =[];
var y = 0;
while (y < listNameLow.length) {
   listNameRight.push(listNameLow[y].charAt(0).toUpperCase() + listNameLow[y].slice(1));
    y++;
}

var text = '';
var i = 0;
while (i < listNameRight.length) {
    text +='<li>' + listNameRight[i] + '</li>';
    i++;
}
outputOne.innerHTML = text;
outputTwo.innerHTML = 'ti trovi in ordine alfabetico ' + (listNameRight.indexOf(subNameUser.charAt(0).toUpperCase() + subNameUser.slice(1)) + 1 ) ;
