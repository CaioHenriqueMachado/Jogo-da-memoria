var randomArray = randomCards(16);
var chave = [];
// console.log(randomArray);
// console.log(randomArray.indexOf(7));
var clock = true;
var views = 0;

function logic(number){
  if (views <= 1) {
    showCard(number);
    clock ? clock = false : clock = true;
    chave.push(number);
  }

  
  if(clock && views <= 1) {
    views+=1;
    console.log(chave);
    loading = setTimeout(() => {
      hiddenCard(chave)
      chave = [];
      views = 0;
    },1000);
    
  } else {
    views+=1;
  }
  
}

function showCard(number){
  var card = document.getElementById(number);
  card.classList.toggle('ver');
}

function hiddenCard(chave){
  console.log("?");
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