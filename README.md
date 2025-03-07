# Getting Started with InsightStream

To check if you have Node.js and npm installed, run the following commands in your terminal or command prompt:

```bash
node -v
npm -v
```

## Steps to Create a React App

1. Open your terminal or command prompt.

2. **Use Create React App:** You can create a new React app using the following command. Replace `my-app` with your desired project name.
```bash
    npx create-react-app my-app
```

3. **Navigate to the project directory:** Change into the newly created project directory.
```bash
    cd my-app
```

4. **Start the development server:** Run the following command to start the development server.
```bash
    npm start
```

5. **Open the project in your browser:** Open your web browser and navigate to `http://localhost:3000`.

## Steps to Create a React App with InsightStream

1. After created the react app delete the old src folder and replace the existing src folder.

2. Install the required packages by running the following command in your terminal or command prompt.
```bash
    npm install react-router-dom axios react-bootstrap bootstrap react-icons
```

3. **Verify Installation:** After running the installation command, you should see the packages listed in your package.json file under dependencies. It should look something like this:

```json
"dependencies": {
  "axios": "^0.21.1",
  "bootstrap": "^5.1.3",
  "react-bootstrap": "^2.0.0",
  "react-icons": "^4.2.0",
  "react-router-dom": "^5.3.0",
  ...
}
```

4. **Restart Your Development Server:** After installing the packages, restart your development server to ensure that the changes take effect.

```bash
    npm start
```

## To host a React app using GitHub

1. **Install gh-pages Package:**
    Install the gh-pages package in the current directory to facilitate deployment.
```bash
    npm install gh-pages --save-dev
```

2. **Configure `package.json`:**

+ Add a homepage property to your package.json.
```json
"homepage": "http://your-username.github.io/my-app"
```
+ Add deployment scripts to the `scripts` section.
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

3. **Build and Deploy:**

+ Run the following command to deploy your app.
```bash
    npm run deploy
```