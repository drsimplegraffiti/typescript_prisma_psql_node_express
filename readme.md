##### installation

> npm i express @prisma/client

> npm i -D typescript @types/node @types/express prisma ts-nod
> e-dev

---

### Check the typescript

> which tsc

---

##### Initialize typescript

> npx tsc --init

---

### To run the typescript

In package.json

```json
  "scripts": {
    "dev": "ts-node-dev server.ts"
  },
```

> Then: npm run dev

---

##### Wiring up prisma

> npx prisma init

---

#### migrate

> npx prisma migrate dev
> Enter the name as "init"

#### view database

> npx prisma studio

You can add users and reference jokes here ---> according to the app we are building

---

#### End points

GET -> http://localhost:5656/ ===> All jokes
POST -> http://localhost:5656/
GET -> http://localhost:5656/joke_id
PUT -> http://localhost:5656/joke_id
DELETE -> http://localhost:5656/joke_id
