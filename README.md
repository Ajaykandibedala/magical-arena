# Magical Arena

## **Overview**
Magical Arena is a Node.js-based simulation where two players battle in a turn-based game using attributes such as health, strength, and attack. The game ends when one player's health reaches zero.

---

## **Features**
- Players attack in turns, starting with the one having lower health.
- Attacks and defenses are calculated using dice rolls.
- Real-time health updates for players after each turn.
- Clear logs of each attack and defense.
- Unit tests for critical components.

---

## **Requirements**
1. Node.js (v14 or higher) installed on your system.
2. Basic understanding of command-line usage.

---

## **Installation**
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd magical-arena
   ```

3. Initialize Node.js project (if not already initialized):
   ```bash
   npm init -y
   ```

4. Install Jest for unit testing:
   ```bash
   npm install jest --save-dev
   ```

---

## **File Structure**
Ensure the project directory contains the following structure:
```
magical-arena/
├── src/
│   ├── arena/
│   │   └── Arena.js
│   ├── models/
│   │   ├── Player.js
│   │   └── Dice.js
│   └── utils/
│       └── Logger.js
├── tests/
│   ├── Arena.test.js
│   ├── Dice.test.js
│   └── Player.test.js
├── index.js
├── package.json
└── README.md
```

---

## **Execution**

1. **Step 1: Define Players and Arena**
   - Open `index.js` in the root directory.
   - Ensure it contains the following code:
     ```javascript
     const Arena = require('./src/arena/Arena');
     const Player = require('./src/models/Player');

     // Create two players
     const playerA = new Player('Player A', 50, 5, 10);
     const playerB = new Player('Player B', 100, 10, 5);

     // Create a new arena and start the battle
     const arena = new Arena(playerA, playerB);
     arena.start();
     ```

2. **Step 2: Run the Simulation**
   - Execute the following command to run the game:
     ```bash
     node index.js
     ```

   - Example Output:
     ```
     Player A attacks Player B: Attack Roll=5, Defense Roll=2, Damage=30, Player B Health=70
     Player B attacks Player A: Attack Roll=4, Defense Roll=3, Damage=5, Player A Health=45
     ...
     Player A wins!
     ```

3. **Step 3: Run Unit Tests**
   - Run the tests using Jest:
     ```bash
     npm test
     ```

   - Sample test output:
     ```
     PASS  tests/Player.test.js
     PASS  tests/Dice.test.js
     PASS  tests/Arena.test.js

     Test Suites: 3 passed, 3 total
     Tests:       10 passed, 10 total
     ```

---

## **Troubleshooting**
1. **Error: Cannot find module**
   - Ensure all `require` paths in your files are correct.
   - Example: Use `./src/models/Player` for Player.js imports.

2. **Node.js not recognized**
   - Verify Node.js is installed:
     ```bash
     node -v
     ```
   - If not installed, download from [Node.js Official Website](https://nodejs.org/).

3. **Test Failures**
   - Review the error logs from Jest.
   - Ensure the logic in the models and Arena is implemented correctly.

---

## **Enhancements**
1. Allow user input to define player attributes dynamically.
2. Extend game features such as multiplayer or power-ups.
3. Add a graphical user interface (GUI).

---

## **License**
This project developed by Kandibedala Ajay