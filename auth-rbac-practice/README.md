# Authentication and RBAC practice

## Setup

1. Copy the existing project `.env` into this folder, or copy `.env.example` to `.env` and add `MONGODB_URL` and `JWT_SECRET`.
2. Run `npm install`.
3. Run `npm run dev`.

## Routes

| Method | Route | Access |
| --- | --- | --- |
| POST | `/users/register` | Public |
| POST | `/users/login` | Public |
| GET | `/users` | Admin JWT |
| DELETE | `/users/:id` | Admin JWT |

Send the JWT in `Authorization: Bearer <token>`. Registration accepts `Admin` or `User` as the role; when omitted, it defaults to `User`. Log in after registration to receive a token containing that role.
