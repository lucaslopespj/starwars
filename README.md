<h1>starwars</h1>
<h2> Banco de Dados I - PCS3623
<br/>Engenharia de Computação - POLI USP </h2>

1) Instalar MySQL
2) Instalar NodeJS
3) Instalar Postman   
4) No MySQL crie um banco de dados com o nome <strong>Starwars</strong> (S maiúsculo)
5) Clonar este repositório _(git clone url)_ para uma pasta na sua máquina
6) Abra um terminal na raíz do projeto e digite _npm install_ para instalar os módulos <strong>nodejs</strong> do projeto
7) No arquivo _./starwars_bd/infraestrutura/conexao.js_ altere os campos _"user"_ e _"password"_ para acessar o seu MySQL
8) Para rodar o servidor digite _nodemon start_ no terminal no diretório do projeto
9) Abra um navegador e digite "http://localhost:3000/starwars"

Se tudo tiver corrido bem é para o servidor e o banco de dados estarem _online_ nesse ponto.
Agora vamos importar o arquivo json do <strong>Postman</strong>:

10) Abra o Postman e vá em <strong>_File > Import..._</strong> ou apenas digite <strong> Ctrl + O</strong>

11) Navege até o diretório do projeto e selecione o arquivo <strong>"API Starwars.postman_collection.json"</strong>

Com isso você deve estar apto à fazer as requisições da nossa API.