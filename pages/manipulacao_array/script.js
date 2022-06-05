// para gerar o código em html a partir do js, semelhante ao React
const app = document.querySelector('.root');

// variável para o elemento HTLM "main"
const main = document.createElement('main');

const casa = [
  "Porta",
  "Janela",
  "Telhado",
  "Garagem",
  "Porão"
];

// forEach p mostar todos elementos do array
casa.forEach(atributo => {
  console.log(atributo);
});

// div para mostrar a estrutura do array
const array = document.createElement('div');
array.setAttribute('class','array-struct');

//função para adicionar os elementos do Array dinamicamente
function arrayContent() {
  let content= ""
  casa.forEach(atributo =>{
    content +=  
                '<span class="double-quotes">"</span>'+
                '<span class="array-item">'+ atributo + '</span>' +
                '<span class="double-quotes">"</span>' +
                '<br>'
            })
            return (
              content =  '<span class="array-var">const </span><strong class="array-name">casa</strong> = ' +'<span class="brackets">[</span>' 
              + '<br>'+
              content +
              '<span class="brackets">]<span>' +
               '<span class="semicolon">;</span>' 
              )
            }
            
// inserindo o conteúdo na div
array.innerHTML = '<h3 class="array-struct-title">Array</h3>' +
                  '<div class="array-code">' + 
                    arrayContent();
                   "</div>" 
main.appendChild(array);

// criando uma lista para mostrar os valores do array "casa"
const ul = document.createElement('ul');
ul.setAttribute('class','array-list');

casa.forEach(item =>{
  main.setAttribute('class', 'container');
  const li = document.createElement('li');
  li.setAttribute('class','item-lista'); 
  li.innerHTML = item;
  ul.appendChild(li);
  main.appendChild(ul);
  app.appendChild(main);
});



const tamanhoArray = document.createElement('p');

tamanhoArray.innerHTML = 'Tamanho do Array: ' + casa.length;

main.appendChild(tamanhoArray);
