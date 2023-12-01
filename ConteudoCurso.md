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

