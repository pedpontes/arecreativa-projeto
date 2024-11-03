#!/bin/sh

docker-compose up -d

cd ./ativities-app/
npm install
npm run build
mv -T .next ../server-app/
cd ../server-app/

npm run deploy