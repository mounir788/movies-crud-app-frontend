# Favorite Movies & TV Shows - Frontend

This repository contains the frontend of the **Favorite Movies & TV Shows** web application. The frontend is built with **React**, **TypeScript**, and **Vite**, and allows users to browse and manage their favorite movies and TV shows.

---

## 🚀 Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version **18 or higher**)
- npm (comes with Node.js) or [Yarn](https://yarnpkg.com/)
- [Git](https://git-scm.com/) (for cloning the repository)

---

## ⚡ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/favorite-media-app.git
cd favorite-media-app/frontend
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Environment Configuration

Create a `.env` file in the `frontend` directory and configure the API endpoint:

```bash
echo 'VITE_API_URL=http://localhost:5000/api' > .env
```

> ⚠️ If your backend is running on a different port or URL, adjust the `VITE_API_URL` accordingly.

### 4. Run the Development Server

```bash
npm run dev
# or
yarn dev
```

You should see output similar to:

```
  VITE v4.4.9  ready in 456 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h to show help
```

### 5. Access the Application

Open your browser and navigate to:

```
http://localhost:5173
```

---

## 📜 Available Scripts

In the project directory, you can run:

- **`npm run dev` / `yarn dev`**  
  Runs the app in development mode.

- **`npm run build` / `yarn build`**  
  Builds the app for production into the `dist` folder.

- **`npm run preview` / `yarn preview`**  
  Previews the production build locally.

- **`npm run lint` / `yarn lint`**  
  Runs ESLint to check for code quality issues.

---

## 📂 Project Structure

```
frontend/
├── public/              # Static files
├── src/
│   ├── components/      # Reusable components
│   ├── hooks/           # Custom React hooks
│   ├── pages/           # Page components
│   ├── services/        # API service functions
│   ├── types/           # TypeScript type definitions
│   ├── App.tsx          # Main application component
│   └── main.tsx         # Application entry point
├── .env                 # Environment variables
├── package.json         # Project dependencies and scripts
├── tsconfig.json        # TypeScript configuration
└── vite.config.ts       # Vite configuration
```

---

## 🔗 Connecting to the Backend

The frontend requires the backend server to be running.

1. Open a new terminal
2. Navigate to the backend directory:

   ```bash
   cd ../backend
   ```

3. Start the backend server:

   ```bash
   npm run dev
   ```

The backend should be running at `http://localhost:5000` by default.

---

## 🛠 Troubleshooting

### 1. Connection Issues with Backend

- Ensure the backend is running.
- Verify that the `VITE_API_URL` in your `.env` file matches the backend URL.
- Check for **CORS issues** (the backend must allow requests from the frontend origin).

### 2. Dependency Issues

- Delete the `node_modules` folder and `package-lock.json` (or `yarn.lock`).
- Run `npm install` or `yarn install` again.

### 3. TypeScript Errors

- Ensure all dependencies are properly installed.
- Check that your TypeScript version matches project requirements.
- Run:

  ```bash
  npm run type-check
  ```

---

## 🎨 Customizing the Application

- **Layout:** `src/App.tsx`
- **UI Components:** `src/components/`
- **Pages:** `src/pages/`
- **Styling:** `tailwind.config.js`

---

## ✨ Additional Features

### Add Authentication

- Set up authentication in the backend.
- Configure the frontend to handle login/logout and tokens.

### Add Image Uploads

- Configure file upload in the backend.
- Add file input components in the frontend.
- Update the `Media` interface to include image URLs.

---

## 🆘 Support

If you encounter any issues:

1. Check the browser console for errors.
2. Search for similar issues online.
3. Open an issue in the project repository.

---

🎉 **Enjoy using the Favorite Movies & TV Shows application!**
