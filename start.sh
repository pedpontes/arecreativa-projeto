#!/bin/bash

docker-compose up -d

cd ./ativities-app/
npm install

npm run build

mv .next ../server-app/

cd ../server-app/

npm run deploy