# Project Setup Guide

### Backend:
- `cd` to `backend` directory
- Install packages using `npm install`.
- Create a database in postegres installed locally named `eqaim_assignment`.
- Update `DB_USER`, `DB_PASSWROD` & `DB_NAME` in `backend/src/helpers/db.ts` file.
- Run `npm run dev` from `backend` directory.
- Server should start on PORT 3000

### Frontend:
- `cd` to `frontend` directory
- Install packages using `npm install`.
- Run `npm run dev` from `frontend` directory.
- Next.js app should start on PORT 3001

App URL: http://localhost:3001

Backend URL to fetch results: http://localhost:3000/api/v1/steps-sum

![Alt Screenshot](https://i.ibb.co/K67YbcW/eqaim.png)