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
array.setAttribute('class', 'array-struct');

//função para adicionar os elementos do Array dinamicamente
function arrayContent() {
  let content = ""
  for (let i = 0; i < casa.length - 1; i++) {
    content +=
      '<span class="double-quotes">"</span>' +
      '<span class="array-item">' +
      casa[i] +
      '</span>' +
      '<span class="double-quotes">"</span>' +
      '<span class="decimal-separator">' +
      ',' +
      '</span>' +
      '<br>'
  }
  content +=
    '<span class="double-quotes">"</span>' +
    '<span class="array-item">' +
    casa[casa.length - 1] +
    '</span>' +
    '<span class="double-quotes">"</span>' +
    '<br>'
  return (
    content =
    '<span class="array-var">const </span>' +
    '<strong class="array-name">casa</strong>' +
    '<span class="equal-sign"> = </span>' +
    '<span class="brackets">[</span>'
    + '<br>' +
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
ul.setAttribute('class', 'array-list');

casa.forEach(item => {
  main.setAttribute('class', 'container');
  const li = document.createElement('li');
  li.setAttribute('class', 'item-lista');
  li.innerHTML = item;
  ul.appendChild(li);
  main.appendChild(ul);
  app.appendChild(main);
});


//informa o tamanho do array
const tamanhoArray = document.createElement('p');

tamanhoArray.innerHTML = 'Tamanho do Array: ' + casa.length;

//div para os links externos
const links = document.createElement('div');

// função para adicionar os links na div
function add_url(url , name) {
  links.innerHTML += `<a href=${url} target="_blank" class='liks-url'>
                        ${name}
                      </a><br>`

}


const links_title = document.createElement('h3');
links_title.innerText = "Links interessantes";
links.setAttribute('class','lisks');

add_url("https://www.w3schools.com/js/js_arrays.asp","JavaScript Arrays");
add_url("JavaScript Array Methods","JavaScript Array Methods")
add_url("https://www.w3schools.com/js/js_array_sort.asp","JavaScript Sorting Arrays");
add_url("https://www.w3schools.com/js/js_array_iteration.asp","JavaScript Array Iteration");
add_url("https://www.w3schools.com/js/js_array_const.asp","JavaScript Array Const");
main.appendChild(links_title);
main.appendChild(links);


