# Curso Alura JavaScript: explorando a manipulação de elementos e da localStorage

## Aula 01 - Adicionando Tarefas

### Aula 01 - Apresentação - Video 1

Nesta aula do curso de JavaScript, ministrado por Vinicios Neves, aprendemos sobre o uso do localStorage. O objetivo é evoluir a aplicação Fokus, uma aplicação de pomodoro, implementando um CRUD na lista de tarefas. Isso nos permite selecionar, deletar e finalizar tarefas usando eventos customizados do JavaScript. Também são ensinadas técnicas de debug para encontrar e corrigir bugs. É recomendado ter conhecimento em manipulação do DOM e ter feito os primeiros passos com JavaScript no navegador.

### Aula 01 - Exibindo o formulário - Video 2

Nesta aula, o instrutor apresentou o projeto base do curso, explicando a estrutura de pastas e arquivos. Ele mostrou como encontrar o botão "Adicionar nova tarefa" no HTML utilizando o método querySelector(). Em seguida, adicionou um evento de clique ao botão e utilizou o método classList.toggle() para alternar a classe hidden do formulário de adicionar tarefa. Por fim, o instrutor mostrou o formulário no HTML e explicou como a classe hidden é responsável por escondê-lo. Essa funcionalidade é importante para permitir a interação do usuário com o projeto.

### Aula 01 - Submetendo o formulário - Video 3

Nesta aula, o instrutor ensina como interagir com um formulário em uma aplicação web. Ele mostra como monitorar o envio do formulário, obter o valor digitado em um campo de texto e criar uma lista de tarefas a partir desse valor. Além disso, o instrutor explica como armazenar essa lista de tarefas no armazenamento local do navegador usando o localStorage. Ele utiliza os métodos preventDefault() e setItem() para evitar o comportamento padrão de envio do formulário e para guardar a lista de tarefas no localStorage, respectivamente. O instrutor também mostra como verificar se os dados foram corretamente armazenados no localStorage usando as ferramentas de desenvolvedor do navegador.

### Aula 01 - Consumindo a API Json - Video 4

Nesta aula, o instrutor aborda o problema de armazenar objetos complexos no local storage e apresenta a solução utilizando a API JSON e seus métodos stringify() e parse(). Ele mostra como transformar arrays em strings e vice-versa, permitindo o armazenamento adequado no local storage.

### Aula 01 - Para saber mais: LocalStorage x SessionStorage x Cookies

localStorage:
O localStorage é o local que guarda informações sem data de validade. Uma vez que você armazena algo nele, a informação fica lá até que você decida removê-la ou o usuário limpe os dados de navegação.

Peculiaridades  
Ele tem uma capacidade generosa de armazenamento (cerca de 5-10MB, dependendo do navegador). Porém, lembre-se: é específico do domínio. O que significa que cada site tem seu próprio baú de localStorage.

O que é seguro guardar?  
Informações não sensíveis, como preferências de usuário ou um carrinho de compras. Jamais armazene informações pessoais ou chaves de autenticação.

sessionStorage:
Imagine o sessionStorage como uma mochila de aventura: você utiliza durante a viagem (sessão de navegação) e, quando termina, tudo que está dentro é descartado.

Mas o que exatamente é essa "sessão"?  
Uma sessão de navegação começa quando você abre uma nova aba ou janela no seu navegador e termina quando você fecha essa aba ou janela.  
Tecnicamente, é o período de tempo em que um usuário interage com uma aplicação web. Sendo importante frisar que cada aba ou janela aberta tem sua própria sessão independente, mesmo se estiverem acessando o mesmo site.

Peculiaridades  
Assim como o localStorage, o sessionStorage tem uma capacidade de armazenamento similar e é específico do domínio. No entanto, seu conteúdo se evapora quando a aba ou janela do navegador é fechada.

O que é seguro guardar?  
Dados temporários para uma sessão, como informações de um formulário que está sendo preenchido.

cookies:
Os cookies são os pequenos biscoitos mágicos que acompanham você por diferentes sites. São usados, principalmente, para rastrear informações entre sessões e domínios.

Peculiaridades  
São limitados em tamanho (apenas cerca de 4KB cada). E atenção! Eles são enviados em todas as solicitações HTTP, o que pode impactar a performance.

O que é seguro guardar?  
Identificadores de sessão, preferências de usuário ou tokens de CSRF*. Mas cuidado com os regulamentos de privacidade, como o GDPR**, quando estiver trabalhando com cookies!

> CSRF, ou Cross-Site Request Forgery, é um ataque contra aplicações web em que um invasor engana o navegador do usuário para realizar ações indesejadas em um site no qual o usuário está autenticado, sem o conhecimento ou consentimento do usuário. Isso pode incluir ações como fazer uma compra, alterar um endereço de e-mail ou uma senha em um site. O site vulnerável não consegue distinguir se a solicitação foi feita voluntariamente pelo usuário ou se foi uma ação maliciosa induzida por um terceiro.  
GDPR, ou General Data Protection Regulation (Regulamento Geral de Proteção de Dados), é uma legislação da União Europeia que entrou em vigor em maio de 2018. O GDPR visa proteger a privacidade e os dados pessoais dos cidadãos da UE e do Espaço Econômico Europeu (EEE).

### Aula 01 Conclusão - Nessa aula, você aprendeu como:

Selecionar elementos HTML através do querySelector;
Interagir e manipular classes de um elemento HTML com classList.toggle;
Criar e adicionar ouvintes de eventos com addEventListener;
Prevenir comportamentos padrão de elementos HTML, como o recarregamento da página ao submeter um formulário com preventDefault.

## Aula 02 - Exibindo as Tarefas no DOM

### Aula 02 - Criando uma tarefa - Video 1

Nesta aula, o instrutor ensina como criar uma tarefa utilizando JavaScript. Ele mostra um trecho de código HTML que representa a estrutura de uma tarefa e explica que o objetivo é criar uma função em JavaScript que retorne o HTML correspondente a essa tarefa. O instrutor mostra passo a passo como criar os elementos HTML dinamicamente, como o <li>, <svg>, <p> e <button>, e como adicionar classes, conteúdo e atributos a esses elementos. Ele ressalta que o foco é o JavaScript e não o HTML e CSS. No final, o instrutor menciona que o próximo passo é testar as linhas de código escritas e criar as tarefas correspondentes a partir do localStorage.

### Aula 02 - Lendo tarefas gravadas - Video 2

Nesta aula, o instrutor aborda a leitura de tarefas gravadas no localStorage. Ele explica como verificar se a lista de tarefas existe no localStorage, como converter a string retornada em um objeto JavaScript e como percorrer essa lista utilizando o método forEach(). Também é mostrado como criar elementos HTML para cada tarefa e adicioná-los corretamente à lista no DOM. O instrutor destaca a importância de separar as responsabilidades das funções e sugere a depuração para identificar possíveis problemas.

### Aula 02 - Escondendo o formulário - Video 3

Nesta aula, o instrutor abordou a correção do estilo da lista de tarefas, a remoção de elementos desnecessários, a adição de classes CSS aos elementos e a adição de uma nova tarefa à lista. Ele mostrou como resolver problemas de estilo, como adicionar funcionalidades e como limpar o campo de texto do formulário após adicionar uma tarefa.

### Aula 02 - Para saber mais: além do append - Outros métodos do DOM

1 - .append():  
Bastante utilizado durante o curso, esse método permite adicionar múltiplos nós e/ou strings de texto ao final de um elemento. Se você passar uma string, o método a trata como um texto e a adiciona diretamente.

2 - .appendChild():  
É um método mais antigo e é específico para inserir um único nó no final do elemento selecionado. Diferentemente do .append(), o .appendChild() não aceita strings diretamente. Se você quiser adicionar uma string, precisa criar um nó de texto primeiro.

Por que é útil conhecer ambos?  
Enquanto .append() oferece mais flexibilidade, permitindo inserir múltiplos elementos e/ou texto, .appendChild() tem amplo suporte e é mais específico na sua tarefa.  

3 - .prepend():  
Esse método insere conteúdo no início de um elemento selecionado.

Por que é útil?  
Se você deseja adicionar algo no topo de uma lista ou no começo de um container, esta é a função a ser usada.

4 - .insertBefore():  
Permite inserir um elemento, especificamente, antes de outro elemento.

Por que é útil?  
É muito útil quando você precisa inserir um item em uma posição específica, e não apenas no começo ou fim.

5 - .insertAdjacentElement(), .insertAdjacentHTML() e .insertAdjacentText():  
Oferecem controle preciso sobre onde você deseja inserir um novo elemento, seja ele um texto, HTML ou elemento, em relação a um elemento existente.

Por que é útil?  
Permitem inserções em quatro posições diferentes: antes, depois, no início ou no final do elemento selecionado.

6 - .replaceChild():  
Substitui um elemento filho por outro.

Por que é útil?  
Se você precisa atualizar ou trocar um elemento por um novo, você pode usar este método.

7 - .cloneNode():  
Duplica um elemento. Exemplo:  
let item = document.querySelector("li");
let itemDuplicado = item.cloneNode(true); // Com "true" ele copia todos os filhos do item.
document.querySelector("ul").appendChild(itemDuplicado);

Por que é útil?  
Se você precisa de uma cópia exata de um elemento (com ou sem seus filhos), este método é perfeito.

### Aula 02 - Nessa aula, você aprendeu como:

Utilizar o localStorage para armazenar e recuperar dados, permitindo persistência entre sessões;
Criar elementos utilizando o document.createElement;
Aninhar elementos utilizando o método append.

## Aula 03 - Editando Tarefas

### Aula 03 - Ouvindo o clique - Video 1

Nesta aula, o instrutor ensina como implementar a funcionalidade de edição de tarefas na aplicação Fokus. Ele cria um botão de edição e manipula o evento de clique desse botão. Utilizando a função prompt(), o usuário pode informar o novo nome da tarefa, que é armazenado em uma variável e utilizado para atualizar o texto da tarefa no DOM. É importante ressaltar que essa atualização é apenas no DOM e não no localStorage(), que será abordado no próximo vídeo.

### Aula 03 - Atualizando o localStorage - Video 2

Nesta aula, o instrutor aborda a necessidade de atualizar o localStorage() quando o usuário editar uma tarefa já criada. Ele propõe uma nova estratégia, criando uma função chamada atualizarTarefas() que encapsula a lógica de atualização do localStorage. Essa função é chamada dentro do evento onclick do botão. Além disso, o instrutor também atualiza o texto da tarefa no objeto que representa a tarefa. O instrutor identifica um bug onde a tarefa fica em branco caso o usuário clique em "OK" sem digitar nada no campo de texto, mas esse problema será abordado em um próximo vídeo.

### Aula 03 - Depurando código no navegador - Video 3

#### DEBUGGER

Usado para DEBUGAR, depurar o codigo e verificar a execução linha a linha.

Nesta aula, o instrutor aborda a correção de bugs e a aplicação de técnicas de debugging no código JavaScript. Ele mostra como utilizar o console.log() para exibir mensagens no navegador e como utilizar o prompt para interagir com o usuário e obter informações. O instrutor também explica como utilizar a estrutura condicional if para verificar se uma variável possui um valor válido antes de executar determinadas ações. Além disso, ele demonstra como utilizar o debugger para depurar o código e entender o que está acontecendo. Por fim, o instrutor destaca a importância dessas ferramentas de debugging para identificar e solucionar problemas no código.

### Aula 03 - Para saber mais: addEventListener('click') vs onclick

Essas abordagens podem parecer semelhantes, mas têm particularidades importantes.  

Diferença para o Navegador
addEventListener: Com ele, você pode adicionar mais de um ouvinte para o mesmo evento. Imagine que você quer que o botão exiba um alerta e também mude de cor quando clicado.

onclick: Se você tentar definir mais de uma ação usando onclick, a última definida é a que permanecerá, sobrescrevendo as anteriores.

Diferença para o Desenvolvedor
Flexibilidade com addEventListener: Com ele, você tem mais controle e liberdade para adicionar diversas reações a um mesmo evento, ideal para scripts ou módulos distintos.

Controle simplificado com onclick: Pode parecer mais direto, mas o risco é grande em aplicações robustas! Ao sobrescrever funções inadvertidamente, você pode acabar com comportamentos inesperados.

> Reflexão: Em um projeto grande, com vários desenvolvedores trabalhando e talvez até com bibliotecas externas, como garantir que não estamos sobrescrevendo um evento crucial usando onclick?

### Aula 03 Conclusão - Nessa aula, você aprendeu como:

Encapsular lógicas repetidas em funções, como a atualização de itens no localStorage;
Adicionar eventos de clique diretamente a um elemento com a propriedade onclick;
Utilizar a função prompt para obter informações diretamente do usuário;
Atualizar conteúdo textual de um elemento DOM dinamicamente.

## Aula 04 - Integrando com o cronômetro

### Aula 04 - Selecionando uma tarefa - Video 1

Nesta aula, o instrutor ensina como lidar com a seleção de tarefas em uma aplicação chamada Fokus. Ele mostra como atualizar a descrição da tarefa em andamento e adicionar uma classe específica ao item clicado. O instrutor também explica como selecionar o parágrafo onde a descrição da tarefa deve ser preenchida e como adicionar o evento de clique nas tarefas. Além disso, ele mostra como adicionar a classe que indica que a tarefa está ativa. No próximo vídeo, ele irá mostrar como refinar o método para garantir que apenas uma única tarefa tenha a classe ativa por vez.

### Aula 04 - Desselecionando uma tarefa - Video 2

Nesta aula, o instrutor aborda a estratégia de garantir que apenas uma única tarefa tenha a classe ativa. Ele explica a diferença entre os métodos querySelectorAll e querySelector e demonstra como utilizar o querySelectorAll para selecionar e iterar sobre os elementos que possuem a classe ativa. O instrutor também adiciona a funcionalidade de deselecionar a tarefa selecionada e utiliza a técnica de "Early Return" para interromper a execução do código quando necessário.

### Aula 04 - Comunicando o fim da atividade - Video 3

Nesta aula, o instrutor explica como adicionar funcionalidades ao código do projeto "Fokus". Ele mostra como verificar se o tempo decorrido pelo timer chegou a zero e, nesse caso, emitir um alerta, tocar um som e zerar o timer. Além disso, ele ensina como criar um evento customizado chamado "FocoFinalizado" e dispará-lo quando o timer chegar a zero, permitindo que outras partes da aplicação reajam a esse evento. No próximo vídeo, será mostrado como tratar esse evento para indicar que a tarefa foi finalizada.

### Aula 04 - Finalizando uma tarefa - Video 4

Nesta aula, o instrutor ensina como adicionar funcionalidades ao evento customizado "FocoFinalizado" no código JavaScript. Ele mostra como adicionar um event listener para esse evento no objeto "document" e como verificar se existe uma tarefa selecionada e um elemento "li" da tarefa selecionada. Caso existam, ele remove a classe "app__section-task-list-item-active" desse elemento "li" e adiciona a classe "app__section-task-list-item-complete". Além disso, ele desabilita o botão da tarefa selecionada usando o método "setAttribute" com o atributo "disabled". O instrutor também menciona a importância de fazer um "double check" para garantir que o elemento "li" da tarefa selecionada não seja nulo. Essa implementação permite que, ao finalizar a contagem regressiva de uma tarefa, a classe e o estado do botão sejam atualizados corretamente. O próximo passo será lidar com a persistência do estado de tarefa concluída dentro do localStorage.

### Aula 04 - Nessa aula, você aprendeu como:

Aprendemos a adicionar e remover classes de elementos HTML para alterar sua aparência ou comportamento, como evidenciado pelo código que adiciona e remove a classe app__section-task-list-item-active;
Compreendemos como lidar com um estado no JavaScript para rastrear a tarefa selecionada atualmente, usando variáveis como tarefaSelecionada e liTarefaSelecionada;
Desenvolvemos uma lógica para permitir que os usuários cliquem e selecione/desselecione uma tarefa, e como responder a essas interações;
Trabalhamos com a criação e resposta a eventos personalizados, como o evento FocoFinalizado, que é usado para marcar uma tarefa como concluída;
Melhoramos a experiência do usuário ao fornecer feedback visual sobre a tarefa selecionada e a capacidade de marcar uma tarefa como concluída.

## Aula 05 - 

### Aula 05 -  - Video 1

