cd ./antd-demo
npm install
npm run build
mv ./next ../app-production/
cd ..
docker-compose up -d
