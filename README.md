<h1>starwars</h1>
<h2> Banco de Dados I - PCS3623
<br/>Engenharia de Computação - POLI USP </h2>

<h5>API back-end rodando em NodeJS com banco de dados MySQL</h5>

1) Instalar MySQL -> https://dev.mysql.com/downloads
2) Instalar NodeJS -> https://nodejs.dev/download
3) Instalar Postman -> https://www.postman.com/downloads
4) No MySQL crie um banco de dados com o nome <strong>Starwars</strong> (S maiúsculo):
   <br/><code>create database Starwars;</code>
   <br/><code>use Starwars;</code>
   
5) Clonar este repositório _(git clone url)_ para uma pasta na sua máquina
6) Abra um terminal na raíz do projeto e digite _npm install_ para instalar os módulos <strong>nodejs</strong> do projeto
7) No arquivo _./starwars/infraestrutura/conexao.js_ altere os campos _"user"_ e _"password"_ para acessar o seu MySQL
8) Para rodar o servidor digite _nodemon start_ no terminal no diretório do projeto
9) Abra um navegador e digite http://localhost:3000/starwars
10) No MySQL rode os comandos do arquivo <strong>run.sql</strong>
<br/>Por exemplo você pode fazer:
    <br/><code>use Starwars;</code>
    <br/><code>source /path_to_project/starwars/run.sql;</code>

Se tudo tiver corrido bem o servidor e o banco de dados devem estar _online_ nesse ponto.
Agora vamos importar o arquivo json do <strong>Postman</strong>:

11) Abra o Postman e vá em <strong>_File > Import..._</strong> ou apenas digite <strong> Ctrl + O</strong>

12) Navegue até o diretório do projeto e selecione o arquivo <strong>"API Starwars.postman_collection.json"</strong>

Com isso você deve estar apto à fazer as requisições da nossa API.