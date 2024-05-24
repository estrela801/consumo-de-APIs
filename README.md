# consumo-de-APIs

Repositório destinado ao estudo de consumo de diferentestipos de APIs.

as APIs possuem alguns elementos que servem à sua utilização:

**Ponto de entrada**: é o endereço do serviço hospedado que  pode ser acessado através de um navegador ou uma ferramenta de consumo de APIs. Exemplo: <https://dadosabertos.camara.leg.br/api/v2>

**Recursos**: são serviços de dados disponívris para consumo. Exemplo /deputados -> <https://dadosabertos.camara.leg.br/api/v2/deputados>.

**Parâmetros**: são informações ou filtros que servem para enviar dados da consulta ou para serem processados pela api. Os parâmetros podem ser passados para a API através de URL ou no corpo (body) da requisição. Exemplo: ? nome=bebeto -> <https://dadosabertos.camara.leg.br/api/v2/deputados/bebeto>

**Métodos**: são os modos de consumo de uma API, que podem ser:
        - POST: inserção (CREATE)
        - GET: consulta/leitura (READ)
        - UPDATE: atualizaçao (UPTADE)
        - DELETE: deleção (DELETE)

Para este projeto, vamos usar o Node.js e o NPM (Node Package Menager):

- Node.js v20.13.0 LTS -> Long Term Suport (versão estável)

NPX -> Node Package eXecuter (Executor de pacote do Node)

**Instalação JSON-SERVER**: É uma simulação de interações com API para desenvolvimentos iniciais no front-end.
Para isso precisamos utulizar dados do repositório <https://github.com/typicode/json-server>, neste repositorio você pode escolher o json ou json5.
Para utilizarmos, crie um arquivo com a extensão escolhida no repositório e  executa-lo na maquina, para isso usamos o código.

~~~bash
npx json-server (nomeDoArquivo.ExtensãoEscolhida)
~~~

**Gitignore**: É um arquivo destinado para escolher outros arquivos para o git não versionar.
Você precisará apenas digitar barra "/" e o nome do arquivo.

**Arquivo Package Json**: É um arquivo que engloba metadados, scripts de automatizações, e configurações de ambiente.

**Automatização do servidor** : Para automatizar a abertura do servidor você previsar adicionar o seguinte código:

~~~bash
"scripts": 
    "start": "npx json-server caminhoDoArquivo.json"
~~~

### AVISO

Existem dois tipos de arquivos que podemos usar nessas situações, arquivos no formato json e no formato json5.
Os arquivos no formato json possuem uma sintaxe mais exigente, diferento do json5, que não exige aspas duplas em sua sintaxe.
Porém o json5 ainda não é tão comumente, assim impossibbilitando seu aceso em todos os navegadores, extensões e aplicações.

### Compatibilidade do json5 com o EcmaScript

<https://github.com/json5/json5>

**Extensões para o JSON5** : Para utlizar o Json5 você precisará de uma extensão para sua execução:

### formatador

~~~bash
JSON5 syntax exetended
~~~

<!-- TODO
Chamada do script start com NPM ao invés do NPX
 -->
**CHOCOLATEY**

O chocoatey é uma ferramenta que facilita o gerenciamento desoftwares no sistema windows. Podendo instalar, atualizar e desinstalar sistemas por via de código.
Ele funciona com a execução de scripts automatizados prontos para fazer o que quisermos, assim criando um grande grau de facilidade na instalação de ferramentas. Adiantando todo um processo tedioso e demorado.
Com sua facilidade de instalação, podemos instalar diversos softwares de uma só vez,  agendar atualizações automáticas de software e gerenciar dependências de pacotes de forma inteligente.
Para mais informações consulte: <https://github.com/chocolatey/ChocolateyGUI>


## REQUISIÇÂO

Para criar uma nova requisição, podemos utilizar a função fetch API.

~~~js
const requisicao = new Request("http://localhost:3000/produtos", {
  method: "GET",
  headers: {
    "content-type": "application/json", //busca as informações dos produtos
  },
});
~~~

Utilizamos `new Request()` para __instanciar__ a interface `Request()`
na variável `requisição`, de forma que ela se torna um objeto com os métodos exigidos por essa interface.

A requisiçãp é constituida por duas partes: uma URL e um objeto JSON
contendo as opções da requisição.
 - **URL**: é o endereço do recurso que você deseja acessar 
 - **Objeto JSON**: é um objeto que contém as opções da requisição, como o método HTTP (GET, POST, PUT,DELETE, etc.), headers, corpo da requisição, etc.

 
