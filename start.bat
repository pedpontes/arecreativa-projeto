@echo off

docker-compose up -d

cd ./ativities-app/
npm install
npm run build
if exist ../server-app/.next rmdir /s /q ../server-app/.next
move .next ../server-app/
cd ../server-app/

npm run deploy