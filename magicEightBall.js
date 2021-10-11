let userName = NaN;
userName = 'Mister X';
userName?
  console.log(`Hello, ${userName}`):
  console.log('Hello!');
// user or not


const userQuestion = 'Will I find a prestigious job soon?!';
console.log(`You asked: \n${userQuestion}`);
// question


console.log(`The magic ball replies:`);

let randomNumber = Math.floor(Math.random() *8);
  if (randomNumber === 0){
    console.log('It\'s certain');
} else if (randomNumber === 1){
    console.log('It\'s decidely so');
} else if (randomNumber === 2){
    console.log('Reply hazy try again');
} else if (randomNumber === 3){
    console.log('Cannot predict now');
} else if (randomNumber === 4){
    console.log('Do not count on it');
} else if (randomNumber === 5){
    console.log('My sources say not');
} else if (randomNumber === 6){
    console.log('Outlook not so good');
} else /*(randomNumber === 7)*/{
    console.log('Signs point to yes');
}
// reply based on declared variable random numbers function
