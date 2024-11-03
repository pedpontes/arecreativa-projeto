@echo off

docker-compose up -d

cd ./ativities-app/
call npm install

call npm run build

move .next ../server-app/

cd ../server-app/

call npm run deploy

