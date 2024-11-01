### Comandos:

Na raiz do projeto abra o terminal e inicie o container docker, para isso precisa ter instalado o docker com docker-compose na maquina.
- ```docker-compose up -d```

Navegue até o diretório do next para instalar as dependencias e buildar o projeto.

- ```cd ./antd-demo```
- ```npm install```
- ```npm run build```

Mova o diretorio .next para o diretorio app-production.

- ```mv .next ../app-production/```

Entre na raiz do projeto "cd .." (caso ainda esteja dentro do antd-demo) ( mesmo nivel do start.bat ), e execute o comando:

- ```start.bat```

  Caso aconteça um erro, veja se o container do DB esta no ar.

  OBS:

  Caso seu OS for linux, o start.bat nao vai funcionar, portanto execute esse comando dentro do diretório app-production/

  ```npm install && npm run build && npm run generate && npx prisma migrate dev --name deploy && npm run migrate && npm run seed && npm run start```
