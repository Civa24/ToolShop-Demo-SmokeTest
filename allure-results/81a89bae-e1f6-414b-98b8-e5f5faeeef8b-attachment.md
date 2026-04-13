# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Register-Login-Checkout.spec.js >> Home-Register-Login-Cart-SignOut ToolShop automation
- Location: tests\Register-Login-Checkout.spec.js:10:1

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected pattern: /auth\/login/
Received string:  "https://practicesoftwaretesting.com/auth/register"

Call log:
  - Expect "toHaveURL" with timeout 15000ms
    6 × unexpected value "https://practicesoftwaretesting.com/auth/register"

```

# Test source

```ts
  1   | import { test, expect } from '@playwright/test';
  2   | import { BasePage } from '../pages/BasePage';
  3   | import { HomePage } from '../pages/HomePage';
  4   | import { LoginPage } from '../pages/LoginPage';
  5   | import { RegisterPage } from '../pages/RegisterPage';
  6   | import { ProductPage } from '../pages/ProductPage';
  7   | import { CheckoutPage } from '../pages/CheckoutPage';
  8   | import { HeaderPage } from '../pages/HeaderPage';
  9   |
  10  | test('Home-Register-Login-Cart-SignOut ToolShop automation', async ({
  11  |   page,
  12  | }) => {
  13  |   const homePage = new HomePage(page);
  14  |   const loginPage = new LoginPage(page);
  15  |   const registerPage = new RegisterPage(page);
  16  |   const productPage = new ProductPage(page);
  17  |   const checkoutPage = new CheckoutPage(page);
  18  |   const headerPage = new HeaderPage(page);
  19  |
  20  |   //const year =new Date().getFullYear();
  21  |   // const uniqueEmail=`amesrkino${year}@gmail.com`;
  22  |   const uniqueEmail = `amesrkino${Date.now()}@gmail.com`;
  23  |
  24  |   const user = {
  25  |     firstName: 'Amer',
  26  |     lastName: 'Ćivić',
  27  |     dateOfBirth: '2002-11-29',
  28  |     street: 'Ulica V-divizije NOP-a',
  29  |     postcode: '72240',
  30  |     city: 'Kakanj',
  31  |     state: 'Federacija',
  32  |     country: 'Bosnia and Herzegovina',
  33  |     phone: '061444555',
  34  |     email: uniqueEmail,
  35  |     password: 'Atlantko321.',
  36  |   };
  37  |
  38  |   await test.step('Open the ToolShop website', async () => {
  39  |     await homePage.goto();
  40  |   });
  41  |   await test.step('Click "Sign in" button in header', async () => {
  42  |     await homePage.clickSignin();
  43  |   });
  44  |   await test.step('Click Register your account link', async () => {
  45  |     await loginPage.clickRegisterYourAccount();
  46  |   });
  47  |   await test.step('Provide valid data in all required fields and click register', async () => {
  48  |     await registerPage.register(user);
  49  |   });
  50  |
  51  |   await test.step('Wait for the user to be redirected to the login page.', async () => {
> 52  |     await expect(page).toHaveURL(/auth\/login/, { timeout: 15000 });
      |                        ^ Error: expect(page).toHaveURL(expected) failed
  53  |   });
  54  |   /*  await page.goto('/auth/login', {waitUntil: 'domcontentloaded'});
  55  |
  56  |     console.log('URL before login expect:', page.url());
  57  |     console.log('Title before login expect:', await page.title());
  58  |     console.log('Email count:', await page.locator('#email').count());
  59  |     console.log('Password count:', await page.locator('#password').count());
  60  |     console.log('Login button count:', await page.locator('[data-test="login-submit"]').count()); */
  61  |
  62  |   // await expect(loginPage.emailInput).toBeVisible();
  63  |
  64  |   // Dodao sam screenshot da se napravi
  65  |   /*   await page.screenshot({ path: 'before-login-PAGE.png', fullPage: true });
  66  |    */
  67  |   /* await expect(page).toHaveURL('https://practicesoftwaretesting.com/auth/login');
  68  |     await page.waitForLoadState('domcontentloaded'); */
  69  |
  70  |   // await page.waitForLoadState('networkidle');
  71  |   /*  await expect(loginPage.emailInput).toBeVisible({ timeout: 15000 }); */
  72  |
  73  |   /* await expect(page.locator('#email')).toBeVisible({timeout:15000}); */
  74  |   await test.step('Provide valid email and password then click "Login" button', async () => {
  75  |     await loginPage.login(user.email, user.password);
  76  |   });
  77  |   await test.step('Verify that the current URL is not /auth/login.', async () => {
  78  |     await expect(page).not.toHaveURL(/auth\/login/);
  79  |   });
  80  |   await test.step('Navigate to the home page', async () => {
  81  |     await homePage.goto();
  82  |   });
  83  |   await test.step('Open any Product', async () => {
  84  |     await homePage.openAnyProduct();
  85  |   });
  86  |
  87  |   await test.step('Click "Add to Cart" button', async () => {
  88  |     await productPage.addToCart();
  89  |   });
  90  |   await test.step('Click "Cart" icon in header', async () => {
  91  |     await headerPage.openCart();
  92  |   });
  93  |
  94  |   await test.step('Click "Proceed to Checkout 3 times.Then choose a valid payment type.Then click "Confirm " 2 times.', async () => {
  95  |     /* This was a original type of doing this
  96  |  await checkoutPage.clickProceedToCheckout();
  97  |   await checkoutPage.clickProceedToCheckout();
  98  |   await checkoutPage.clickProceedToCheckout();
  99  |   await checkoutPage.chooseCashOnDelivery();
  100 |   await checkoutPage.confirmPayment();
  101 |    await checkoutPage.confirmPayment(); */
  102 |     await checkoutPage.completeCheckout();
  103 |   });
  104 |   await test.step('Click on Users name (e.g."Amer Civic")', async () => {
  105 |     await headerPage.openUserMenu();
  106 |   });
  107 |   await test.step('Click "Sign out" button', async () => {
  108 |     await headerPage.signOut();
  109 |   });
  110 |
  111 |   //await page.pause();
  112 |   await test.step('Confirm "Sign In" button is available (confriming the log out")', async () => {
  113 |     await expect(homePage.signInButton).toBeVisible();
  114 |   });
  115 |
  116 |   //  await page.pause();
  117 | });
  118 |
```
