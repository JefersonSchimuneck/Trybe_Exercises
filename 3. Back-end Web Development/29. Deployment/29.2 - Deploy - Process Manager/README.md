### Agora, a prática

Vamos colocar em prática todo o conteúdo que vimos. Para isso, faremos alguns exercícios práticos utilizando os principais recursos do PM2.

**Exercício 1** : Crie uma API simples que retorne uma mensagem. Feito isso, gerencie seus processos da seguinte maneira:

1. Crie **UM** processo no PM2 utilizando o CLI;
2. Restart e recarregue o processo utilizando o CLI do PM2 (lembre-se que há comandos distintos para cada um);
3. Pare o processo;
4. (Bônus) - Escalone para **mais 5** processos;
5. (Bônus) - Defina para **3** a quantidade de processos;
6. Remova o processo da listagem do `PM2` ;



**Exercício 2** : Crie um arquivo `ecosystem` . O arquivo configurará o PM2 para:

1. Observar alterações no diretório da aplicação e, caso ocorram, reiniciar automaticamente sua aplicação;
2. Ativar o *modo cluster* e configurar a quantidade de processos rodando para o máximo possível;
3. Reiniciar o processo sempre que ele alcançar o consumo de 100MB de memória.



**Exercício 3** : Explorando variáveis de ambiente:

1. Adicione à API o uso de uma variável de ambiente que altere a mensagem exibida em sua resposta ou outro comportamento que preferir;
2. Adicione ao arquivo `ecosystem` do exercício anterior dois contextos de variáveis: `env_prod` e `env_homolog` .
3. Execute o processo utilizando o contexto `prod` . Em seguida, execute o processo utilizando o contexto `homolog` . Valide se o comportamento foi alterado.



**Exercício 4** : Adicione monitoramento à sua API:

1. Crie uma conta no PM2;
2. Adicione o monitoramento à API dos exercícios anteriores, utilizando o comando do CLI do PM2;
3. Verifique se o dashboard web está exibindo as informações de sua API.

### Bônus

**Exercício 5** : Adicione à API criada um endpoint que simule um erro de produção. Para isso, pode ser utilizado o comando `process.exit` . O objetivo é fazer com que o processo pare e então o PM2 entre em ação para restartá-lo.



**Exercício 6** Adicione mais de um processo a ser iniciado pelo seu arquivo `ecosystem` . Para isso, pode-se adicionar dois processos com comportamentos diferentes, através do mesmo código fonte, ou adicionar mais uma API ou script ao projeto. A ideia é que, ao executar utilizando o `ecosystem` , o PM2 suba processos com **nomes** e características diferentes.



**Exercício 7** : Execute sua API utilizando o `runtime` do PM2. Para isso:

1. Adicione o módulo do pm2 às dependências do projeto;
2. Altere o script de `start` do seu *app* ( `package.json` ) para utilizar o `runtime` do pm2. Lembre-se de referenciar seu arquivo `ecosystem` ;
3. Execute o script através do `npm` ou `yarn` .

------

