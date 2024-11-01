npm install
npm run build
npm run generate
npx prisma migrate dev --name deploy 
npm run migrate
npm run seed 
npm run start