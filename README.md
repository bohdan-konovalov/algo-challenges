# 🧠 Algo Challenges

![Banner](./banner.jpg)

Welcome to the **Algo Challenges** repository — a collection of hand-picked algorithmic coding problems inspired by **real company interviews I've personally taken part in** (Amazon, Bolt, and more).

This repo is built to simulate **real technical interviews**, promote focused problem-solving, and help you improve your data structures and algorithms skills through disciplined practice.

---

## 📚 What's Inside

Challenges are organized by company name in folders like:

```
amazon/WatchScore
bolt/SomeOtherChallenge
```

Each challenge contains:

- 📄 `README.md` — problem description and sample cases
- 🧪 `__tests__/` — unit tests written using Jest
- ✍️ `solution/` — an official solution you can check after solving

---

## 🎯 How to Approach Challenges Effectively

To make the most out of your practice, follow these principles — just like in a real interview:

1. **Read the problem description carefully**  
   Pay attention to constraints, edge cases, and sample inputs/outputs.

2. **Think first, code later**  
   Plan your approach and write your code fully before running any tests — just like a real submission.

3. **Run tests only when ready**  
   Validate your logic using the provided Jest tests by running `yarn test`.

4. **If tests fail, avoid peeking**

   - Try to debug without reading the test cases.
   - Use `console.log` or walk through your code logically to find the issue.

5. **Still stuck?**

   - Then look at the failing test case(s).
   - You can compare with the official solution in the `solution/` folder **only after** a solid personal attempt.

6. **Add complexity analysis to your solution**  
   At the top of your solution file, add a quick comment like:

   ```ts
   // Time: O(n); Space: O(1)
   ```

   This helps build the habit of analyzing code performance.

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/bohdan-konovalov/algo-challenges.git
cd algo-challenges
```

### 2. Install dependencies

```bash
yarn install
```

### 3. Run the tests

```bash
yarn test
```

Tests are written using **Jest** and scoped to individual challenges.

---

## 🔇 About Minimal Test Output

To encourage debugging and mimic real interview conditions, test output is silenced by default. When running tests, you’ll only see a summary like this:

```
Test Suites: 1 failed, 3 total
Tests:       5 failed, 12 total
Snapshots:   0 total
Time:        0.664 s
```

This gives you space to think before relying on test details.

### To view full test logs:

Open the `jest.config.js` file and **comment out** the following line:

```js
reporters: ["<rootDir>/silentSummaryReporter.js"],
```

Then re-run your tests with:

```bash
yarn test
```

This will enable detailed output including test names, errors, and stack traces.

---

## 🏗 Project Structure

```
algo-challenges/
├── amazon/
│   └── WatchScore/
│       ├── __tests__/
│       |   └── index.test.ts
│       └── solution/
│       |   └── index.solution.ts
│       ├── index.ts
│       ├── README.md
├── bolt/
│   └── SomeOtherChallenge/
├── .gitignore
├── jest.config.js
├── package.json
├── README.md
├── silentSummaryReporter.js
├── tsconfig.json
└── yarn.lock
```

---

## 🤝 Contributing

Have a cool challenge from an interview or a fun idea?  
PRs are welcome — just follow the folder structure and testing style.

---

Happy hacking, and treat every challenge like it’s your **final interview round** 💪
