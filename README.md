# LocalStorage e useEffect - Exercicios

Caso não lembre como funciona o processo de entrega, clique [**aqui**](https://github.com/labenuexercicios/instrucoes-entrega)


## Como eu vou executar os exercícios?
Para o exercício de hoje, vamos utilizar um template! Este template pode ser o que foi usado na prática guiada, ou você pode criar um novo projeto do zero!


Para executar este exercício, você pode criar uma nova aplicação React, utilizar o **CodeSandbox** ou usar este template do repositório.
- Caso use este template, lembre-se de dar um `npm install` assim que baixar! 
- Caso queira executar remotamente, pode usar esse template aqui: https://codesandbox.io/s/localstorage-e-useeffect-exercicios-s62wx3

Caso queira criar uma nova aplicação React, basta copiar os conteúdos deste repositório e colar dentro da pasta do seu projeto criado.


Como você já viu no código durante a aula, as funções responsáveis por fazerem as funcionalidades acontecerem já estão declaradas dentro do corpo do componente `App`. Porém, ainda não há nada nessas funções, e sua missão é preenchê-las de forma que elas façam as funcionalidades pedidas. Portanto, seguem as funcionalidades a serem feitas:

## **1) Criar tarefas**

- 💡  Dicas
	- O usuário deve conseguir digitar uma tarefa no input, clicar no botão `Adicionar` e isso deve resultar em uma nova tarefa renderizada na tela, de acordo com o que foi digitado no input.
	- Para isso, primeiro, vc deve conseguir fazer o controle do input, por meio da técnica de input controlado do React. Já ensinamos vcs a fazerem isso na aula de inputs controlados.
	- A função que vai fazer o input controlado funcionar já está declarada, restando apenas preenchê-la. É a `onChangeInput`. Além disso, o valor do estado que vai guardar o input controlado também já está criado, é o elemento `inputValue` do estado.
 	- Se vc não se lembra de como criar um input controlado, não tem problema. Isso é mais do que esperado. De uma revisada nos slides e nos exercícios feitos na aula de inputs controlados. Além disso, estamos no canal de dúvidas para te ajudar.
	- Depois de fazer o input controlado funcionar, é hora de implementar a funcionalidade de criar a tarefa. Essa funcionalidade vai ficar a cargo da função `criarTarefa`.
 	- Dentro da função `criarTarefa`, vc vai precisar de algumas coisas para conseguir fazer a criação  de uma tarefa dar certo:
Que coisas são essas?

- **PRIMEIRO**: uma constante que guarda o valor de uma nova tarefa que você vai criar. Essa constante precisa ter o mesmo formato das tarefas que já estão criadas no estado. Ou seja, precisa ser um objeto com esse formato:
                
    ```jsx
    {
	id: Date.now(), // aqui, pode deixar o valor Date.now() para todas as tarefas as serem criadas
	texto: // aqui, o texto da tarefa virá do input controlado guardado no estado
	completa: false // aqui, pode deixar o valor false para todas as tarefas as serem criadas, pq a tarefa sempre vai começar como não completa.
    }
    ```
                
- **SEGUNDO**: uma lógica de adicionar essa nova tarefa, que está guarda na constante que vc criou no primeiro passo, em uma cópia de um array do estado chamado `tarefas`. Lembrando que, para isso você pode usar a lógica do spread (desestruturação): `const copiaDoEstado = [...tarefas, novaTarefa]` ou usar a lógica do push:
            
    ```jsx
    const copiaDoEstado = [...tarefas]
    
    copiaDoEstado.push(novaTarefa)
    ```
    
- **TERCEIRO**: o uso do hook `useState` para atualizar o estado com a cópia do estado + a nova tarefa, feitas no segundo passo.



## **2) Alterar tarefas como completas ou incompleta**
  
- 💡  Dicas
  - O usuário, ao clicar em uma tarefa específica, deve alterar a propriedade `completa` da tarefa que está armazenada no array do estado (de true para false ou de false para true).
  - Para isso, vc vai usar a função `selectTarefa`, que já está criada, mas ainda não preenchida.
  - Essa função recebe como parâmetro o `id` da tarefa que está sendo clicada. Com esse id, que é único para cada tarefa, vc pode "mapear" (usar a função `map`) todo o array e modificar especificadamente a tarefa clicada, usando de um `if/else` para fazer a modificação apenas quando o id da tarefa que está vindo do map for igual o id que está vindo de parâmetro da função `selectTarefa`.
  - Se isso ainda está confuso pra vc, não tem problema, abra uma thread no canal de dúvidas, que instrutore(a)s e colegas irão te ajuda.
  

## **3) Filtrar as tarefas por completas e pendentes**

- 💡  Dicas
    - Veja que a mudança da propriedade `filtro` do estado para `"completas"` ou `"pendentes"` faz com que as tarefas sejam filtradas para aparecer na tela apenas aquelas condizentes com o valor do estado.
    - Ou seja, se vc muda o valor de `filtro` no estado para `completas`, aparecem apenas as tarefas completas, e se vc muda para `pendentes`, aparecem apenas as tarefas pendentes.
    - Portanto, a funcionalidade já está quase pronta. Falta apenas uma forma de fazer isso pela interface e não só pelo código.
    - A função responsável por isso é a `onChangeFilter`, que já está criada, mas ainda não preenchida.
    
    - Se observarmos o JSX, essa função está sendo chamada no `onchange` da tag `select`, onde se encontram as tags `option`: "Nenhum", "Pendentes" e "Completas".
    - Os valores das tags `option` podem ser acessados na função `onChangeFilter` por meio do `event.target.value`, da mesma forma como é feito com uma tag `input`. Dito isso, a mesma lógica de input controlado que é feito em uma tag input pode ser feita na função `onChangeFilter`.
    

## **4) Persistir as tarefas utilizando o LocalStorage**

💡  Dicas
 - Pra isso, vc vai precisar usar o método de ciclo de vida que está sendo chamado no código: os dois `useEffect`.
    
### Primeiro useEffect
    
- O primeiro `useEffect` deve ser usado para salvar as tarefas sempre que uma nova tarefa for criada.
- Como você viu em aula hoje, sempre que atualizamos o que foi passado no array de dependências do `useEffect` (props ou estado), a função é executada novamente.
- Sabendo disso, dentro do `useEffect`, vc pode criar a lógica de salvar o array de tarefas que está no estado no LocalStorage.
- **Dica 1**: sobre a lógica de salvar no LocalStorage, os slides da aula e o exercício feito hoje vão te ajudar bastante.
- **Dica 2**: sobre como colocar essa lógica do LocalStorage no `useEffect`, o exercício feito na aula de hoje vai te ajudar bastante.
    
### Segundo useEffect
    
- O segundo `useEffect` deve ser usado para pegar as tarefas salvas no LocalStorage.
- Como você viu em aula hoje, sempre que o componente é montado pela primeira vez, o `useEffect` é chamado.
- Sabendo disso, dentro do `useEffect`, você pode criar a lógica que vai pegar as tarefas. Para renderizar essas tarefas na tela, além de pegá-las no LocalStorage, vc deve salvá-las no estado, por meio da função `setTarefas`.
- **Dica 1**: sobre a lógica de pegar no LocalStorage, os slides da aula e o exercício feito hj vão te ajudar bastante.
- **Dica 2**: sobre a lógica de salvar no estado as tarefas vindas do LocalStorage usando a função `setTarefas`, o exercício feito hj vai te ajudar bastante.
