<h1>starwars</h1>
<h2> Banco de Dados I - PCS3623
<br/>Engenharia de Computação - POLI USP </h2>

<h5>API back-end rodando em NodeJS com banco de dados MySQL</h5>

1) Instalar MySQL -> https://dev.mysql.com/downloads/
2) Instalar NodeJS -> https://nodejs.dev/download
3) Instalar Postman -> https://www.postman.com/downloads/
4) No MySQL crie um banco de dados com o nome <strong>Starwars</strong> (S maiúsculo)
5) No arquivo <strong>_run.sql_</strong> você encontra os comandos para criar algumas tabelas que <strong>não são criadas</strong> pelo sistema.
   É imprescindível que você as tenha criado e inserido os registros para que o sistema funcione corretamente.
6) Clonar este repositório _(git clone url)_ para uma pasta na sua máquina
7) Abra um terminal na raíz do projeto e digite _npm install_ para instalar os módulos <strong>nodejs</strong> do projeto
8) No arquivo _./starwars/infraestrutura/conexao.js_ altere os campos _"user"_ e _"password"_ para acessar o seu MySQL
9) Para rodar o servidor digite _nodemon start_ no terminal no diretório do projeto
10) Abra um navegador e digite "http://localhost:3000/starwars"

Se tudo tiver corrido bem é para o servidor e o banco de dados estarem _online_ nesse ponto.
Agora vamos importar o arquivo json do <strong>Postman</strong>:

11) Abra o Postman e vá em <strong>_File > Import..._</strong> ou apenas digite <strong> Ctrl + O</strong>

12) Navege até o diretório do projeto e selecione o arquivo <strong>"API Starwars.postman_collection.json"</strong>

Com isso você deve estar apto à fazer as requisições da nossa API.