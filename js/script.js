var randomArray = randomCards(16);
applyImage(randomArray);

var chave = [];
var clock = true;
var views = 0;
var clicks = [-1];
var acerts = [];
// console.log(randomArray.indexOf(7));

function logic(number){
  if (!register(number)){
    // console.log('vem?s')
    return;
  }
  
  if (views <= 1 ) {
    showCard(number);
    clock ? clock = false : clock = true;
    chave.push(number);
  }

  if(clock && views <= 1) {
    views+=1;
    setTimeout(() => {
      validateCard(chave)
      chave = [];
      views = 0;
    },500);

  } else {
    views+=1;
  }
  
}

function register(card) {
  console.log(acerts);
  acerts.map( id => {
    if (card == id){
      
      // console.log('CAIU' +'card:'+card+ ' id:'+ id );
      return false;
    }
  });

  if (clicks[clicks.length -1] == card) {
    return false;
  }else {
    clicks.push(card);
    return true;
  }


}

function showCard(number){
  var card = document.getElementById(number);
  card.classList.add('ver');
}

function validateCard(chave){
  var i = chave[0];
  var j = chave[1];
  if (randomArray[i] == randomArray[j]){
    acerts.push(i);
    acerts.push(j);
  }else{
    chave.map( id =>{
      var card = document.getElementById(id);
      card.classList.remove('ver');
    });
  }

}

function randomCards(number){
  var array = [];
  for(i=0; i < number; i++) {
    var num = i % (number/2);
    array[i] = num;
  }
  var newArray = [];
  var final = number;
  
  for(i=0; i < number; i++) {
    var x = getRandomInt(0, final);
    newArray.push(array[x])
    array.splice(x,1);
    final--;
  }
  return newArray;
}

function applyImage(array){
  var cards = document.getElementsByTagName("li");
  for (i=0; i < cards.length; i++) {
    cards[i].classList.add('a'+ array[i]);
  }
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}