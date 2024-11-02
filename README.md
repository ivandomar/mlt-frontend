# mlt-frontend
Frontend app for socially vulnerable teenager's academic performance.

---
## Setup

1. Install deps (as described in `package.json`).
```
$ npm install
```

2. Set environmental variables
```
|   Variable        |   Description   |   Details                                                   |
|   -------------   |   ----------    |   -------------------------------------------------------   |
|   VITE_API_URL    |   API URL       |   Must be a full absolute URL (i.e. http://localhost:5000)  |
```
>*You could copy `.env.example` file in the project root folder to a `.env` named file in the same folder to fill the values*

3. Run
- developer mode
```
$ npm run dev
```

- production build
```
$ npm run build && npm run preview
```

> **App will be available through web browser at http://localhost:5173 (dev mode) or http://127.0.0.1:4173 (production preview)**
