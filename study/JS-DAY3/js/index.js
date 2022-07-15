const pororo = {
  name: '뽀로로',
  height: 70,
  weight: 50,
  gender: 'male',
  say: function(){
    console.log('뽀로로가 말을 합니다.')
  },
  play: (person)=>{
    console.log(`${person}와(과) 놀러 갑니다.`)
  }
}

for(let key in pororo){
  console.log(key, pororo[key]);
}

pororo.say();
pororo.play('한솔');

// ------------------------------------------------------

function sayHello(){
  console.log(`Hello I'm ${this.name}`);
}

const boy = {
  name: 'Justin',
  sayHello,
}

const girl = {
  name: 'Anna',
  sayHello,
}

boy.sayHello();
girl.sayHello();