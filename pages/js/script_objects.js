// para gerar o código em html a partir do js, semelhante ao React
const app = document.querySelector('.root');

// variável para o elemento HTLM "main"
const main = document.createElement('main');

// object  car
const car = {
  type:"Fiat",
  model:"500",
  color:"white"
};


/*
 Acessando as propriedades do objeto
 sintaxe = obj.nomeDaPropriedade
  ou
 obj["nomeDaPropriedade"]
*/
console.log('obj.nomeDaPropriedade');
console.log(car.type);
console.log(car.model);
console.log(car.color);

console.log('---------------------------');

console.log('obj["nomeDaPropriedade"]');
console.log(car["type"]);
console.log(car["model"]);
console.log(car["color"]);

// Methods
const person = {
  firstName: "Ulisses",
  lastName : "Silvério",
  id       : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};


// Acessando os m´´etodos dos objects
// Sitaxe = obj.methodName()

console.log('---------------------------');
console.log("Object: person")
console.log("Method: fullName() do object person")
console.log(person.fullName());