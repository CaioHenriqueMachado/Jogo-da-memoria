var randomArray = randomCards(16);
var chave = [];
// console.log(randomArray);
// console.log(randomArray.indexOf(7));
var clock = true;
var views = 0;
var clicks = [-1]

function logic(number){
  if (!register(number)){
    return false;
  }

  if (views <= 1 ) {
    showCard(number);
    clock ? clock = false : clock = true;
    chave.push(number);
  }

  if(clock && views <= 1) {
    views+=1;
    loading = setTimeout(() => {
      hiddenCard(chave)
      chave = [];
      views = 0;
    },1000);
    
  } else {
    views+=1;
  }
  
}

function register(card) {
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

function hiddenCard(chave){
  chave.map( id =>{
    var card = document.getElementById(id);
    card.classList.remove('ver');
  });
  
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

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}