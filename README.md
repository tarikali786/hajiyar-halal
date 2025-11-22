# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
y
## Backend & MongoDB (local development)

This repo uses a small Express/MongoDB backend placed in the sibling `server/` folder.

Steps to run locally:

1. Copy `server/.env.example` to `server/.env` and set `MONGO_URI` to your MongoDB connection string.
2. Install server dependencies and start the server:

	- In PowerShell (from workspace root):

	  cd .\server ; npm install ; npm run start

	The server listens on `PORT` (default 5000) and exposes `POST /api/contact`.

3. Start the frontend (from `hajiyar-halal-profits`):

	- Ensure `VITE_API_URL` in `.env` points to your backend, e.g. `http://localhost:5000`.
	- Then run: `npm install` and `npm run dev` (Vite dev server).

4. Submit the contact form from the Contact page. The frontend will POST the contact to `${VITE_API_URL}/api/contact` and the server will save it in MongoDB.

If you need help creating a free MongoDB Atlas cluster or a connection string, let me know and I can walk you through it.

Server-side email sending
-------------------------

The server can optionally send an email notification for each contact using SMTP (nodemailer). To enable this, set the following in `server/.env`:

```
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_SECURE=false # true for port 465
SMTP_USER=your-smtp-username
SMTP_PASS=your-smtp-password
EMAIL_FROM=sender@example.com
EMAIL_TO=recipient@example.com
```

If SMTP is not configured the server will still accept contact POSTs and (when Mongo is configured) save them, but it won't send emails.
