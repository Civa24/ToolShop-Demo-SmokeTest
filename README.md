# ToolShop Demo Smoke Test

Automated end-to-end testing project for the ToolShop demo application using **Playwright** and **JavaScript**.  
The project covers user flows such as registration, login, product selection, cart management, checkout, and sign out.  
The framework is built using the **Page Object Model (POM)** pattern for better structure, readability, and maintainability.

---

## Project Overview

This project was created to practice and demonstrate automated UI testing on the **ToolShop demo application**.

### Covered scenarios:
- User registration
- User login
- Product selection
- Add to cart
- Checkout flow
- Sign out

### Main goals:
- Practice Playwright automation
- Improve JavaScript test scripting skills
- Apply Page Object Model
- Learn locator strategies
- Use reporting tools (HTML + Allure)
- Keep code clean and maintainable

---

## Technologies Used

- **JavaScript**
- **Node.js**
- **Playwright**
- **Allure Report**
- **Prettier**
- **ESLint**



## Installation and Setup

### 1. Clone the repository
```bash
git clone https://github.com/your-username/ToolShop-Demo-SmokeTest.git
cd ToolShop-Demo-SmokeTest

### 2.Install dependecises
npm install

### 3.Install playwright browsers

npx playwright install


### How to run tests

npm run test ||  npm test


### how to run playwright reported

npx playwright show-report