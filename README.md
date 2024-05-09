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
Para utilizarmos, crie um arquivo com a extensão escolhida no repositório e  executa-lo na maquina, para isso usamos o código 

~~~bash
npx json-server (nomeDoArquivo.ExtensãoEscolhida)
~~~


