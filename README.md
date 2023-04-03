# Getting Started With My POS Project

For this project i assume you have `Node.js` and `Git` already installed on your PC.

### 1. Clone this repository on your computer using terminal in your desired folder
        
run: `git clone https://github.com/Rokkit-exe/POS.git`

run: `cd pos-system`

### 2. Create `.env` (in the root directory)

add this line: `REACT_APP_DATABASE_URL=http://localhost:8000/`

**Note: You can change the port number.**

### 3. Install `json-server`

**Note: You wont see this package in `package.json`.**

run: `npm i json-server`

### 4. Start backend server

run: `cd backend`

run: `npx json-server --watch db.json --port 8000`

**Note: Port number needs to be the same as `REACT_APP_DATABASE_URL`.**
        
### 5. Install dependencies (in a new terminal window)

**Note: Make sure you are in the root directory.**

`npm install`

### 3. Start frontend 

`npm start`

If no internet page opened by it self, you can open [http://localhost:3000](http://localhost:3000) to view it in your browser.


