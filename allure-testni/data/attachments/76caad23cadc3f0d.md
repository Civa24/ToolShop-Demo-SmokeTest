# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Register-Login-Checkout.spec.js >> Home-Register-Login-Cart-SignOut ToolShop automation
- Location: tests\Register-Login-Checkout.spec.js:10:1

# Error details

```
TypeError: "#email".toBeVisible is not a function
```

# Page snapshot

```yaml
- generic [ref=e2]:
    - generic [ref=e3]:
        - text: View the
        - link "Documentation" [ref=e4] [cursor=pointer]:
            - /url: https://testsmith-io.github.io/practice-software-testing/#/
        - text: for this application.
    - generic [ref=e5]:
        - generic [ref=e7]:
            - generic [ref=e8]: Practice Black Box Testing & Bug Hunting
            - button "Testing Guide" [ref=e9] [cursor=pointer]
            - button "🐛 Bug Hunting" [ref=e10] [cursor=pointer]
        - navigation [ref=e11]:
            - generic [ref=e12]:
                - link "Practice Software Testing - Toolshop" [ref=e13] [cursor=pointer]:
                    - /url: /
                    - img [ref=e14]
                - generic [ref=e32]:
                    - menubar "Main menu" [ref=e33]:
                        - menuitem "Home" [ref=e34]:
                            - link "Home" [ref=e35] [cursor=pointer]:
                                - /url: /
                        - menuitem "Categories" [ref=e36]:
                            - button "Categories" [ref=e37] [cursor=pointer]
                        - menuitem "Contact" [ref=e38]:
                            - link "Contact" [ref=e39] [cursor=pointer]:
                                - /url: /contact
                        - menuitem "Sign in" [ref=e40]:
                            - link "Sign in" [ref=e41] [cursor=pointer]:
                                - /url: /auth/login
                    - button [ref=e43] [cursor=pointer]:
                        - img [ref=e45]
                        - text: EN
    - generic [ref=e51]:
        - heading "Login" [level=3] [ref=e52]
        - button "Sign in with Google" [ref=e54] [cursor=pointer]
        - generic "Alternative login methods" [ref=e55]: or use
        - generic [ref=e56]:
            - generic [ref=e57]:
                - generic [ref=e58]: Email address *
                - textbox "Email address *" [ref=e59]:
                    - /placeholder: Your email
            - generic [ref=e60]:
                - generic [ref=e61]: Password *
                - generic [ref=e63]:
                    - textbox "Password *" [ref=e64]:
                        - /placeholder: Your password
                    - button [ref=e66] [cursor=pointer]:
                        - img [ref=e68]
            - button "Login" [ref=e71] [cursor=pointer]
        - paragraph [ref=e73]:
            - text: Not yet an account?
            - link "Register your account" [ref=e74] [cursor=pointer]:
                - /url: /auth/register
            - link "Forgot your Password?" [ref=e75] [cursor=pointer]:
                - /url: /auth/forgot-password
    - paragraph [ref=e78]:
        - text: This is a DEMO application (
        - link "GitHub repo" [ref=e79] [cursor=pointer]:
            - /url: https://github.com/testsmith-io/practice-software-testing
        - text: ), used for software testing training purpose. |
        - link "Privacy Policy" [ref=e80] [cursor=pointer]:
            - /url: /privacy
        - text: '| Banner photo by'
        - link "Barn Images" [ref=e81] [cursor=pointer]:
            - /url: https://unsplash.com/@barnimages
        - text: 'on'
        - link "Unsplash" [ref=e82] [cursor=pointer]:
            - /url: https://unsplash.com/photos/t5YUoHW6zRo
        - text: .
    - button "Open chat" [ref=e84] [cursor=pointer]:
        - img [ref=e85]
```

# Test source

```ts
  1   | import {test , expect} from "@playwright/test"
  2   | import { BasePage } from "../pages/BasePage"
  3   | import { HomePage } from "../pages/HomePage";
  4   | import { LoginPage } from "../pages/LoginPage";
  5   | import { RegisterPage } from "../pages/RegisterPage";
  6   | import { ProductPage } from "../pages/ProductPage";
  7   | import { CheckoutPage } from "../pages/CheckoutPage";
  8   | import { HeaderPage } from "../pages/HeaderPage";
  9   |
  10  | test ('Home-Register-Login-Cart-SignOut ToolShop automation',async({page})=>{
  11  |     const homePage = new HomePage(page);
  12  |     const loginPage = new LoginPage(page);
  13  |     const registerPage = new RegisterPage(page);
  14  |     const productPage = new ProductPage(page);
  15  |     const checkoutPage = new CheckoutPage(page);
  16  |     const headerPage = new HeaderPage(page);
  17  |
  18  |
  19  |
  20  |     //const year =new Date().getFullYear();
  21  |        // const uniqueEmail=`amesrkino${year}@gmail.com`;
  22  |     const uniqueEmail=`amesrkino${Date.now()}@gmail.com`;
  23  |
  24  |     const user = {
  25  |         firstName : 'Amer',
  26  |         lastName : 'Ćivić',
  27  |         dateOfBirth : '2002-11-29',
  28  |         street : 'Ulica V-divizije NOP-a',
  29  |         postcode : '72240',
  30  |         city : 'Kakanj',
  31  |         state : 'Federacija',
  32  |         country : 'Bosnia and Herzegovina',
  33  |         phone : '061444555',
  34  |         email : uniqueEmail,
  35  |         password : 'Atlantko321.'
  36  |
  37  |     };
  38  |
  39  |     await test.step('Open the ToolShop website',async ()=> {
  40  |         await homePage.goto();
  41  |     });
  42  |       await test.step('Click "Sign in" button in header',async ()=> {
  43  |         await homePage.clickSignin();
  44  |     });
  45  |      await test.step('Click Register your account link',async ()=> {
  46  |          await loginPage.clickRegisterYourAccount();
  47  |     });
  48  |     await test.step('Provide valid data in all required fields and click register',async ()=> {
  49  |          await registerPage.register(user);
  50  |          /* console.log('URL after login:', page.url());
  51  |          await page.screenshot({ path: 'after-register.png', fullPage: true }); */
  52  |
  53  |     });
  54  |
  55  |    /*  await test.step('Wait for the user to be redirected to the login page.',async ()=> {
  56  |           await expect(page).toHaveURL(/auth\/login/, { timeout: 15000 });
  57  |     }); */
  58  |     await page.goto('/auth/login', {waitUntil: 'domcontentloaded'});
  59  |     await page.reload();
  60  |
  61  |
  62  |     // await expect(loginPage.emailInput).toBeVisible();
  63  |
  64  |    // Dodao sam screenshot da se napravi
  65  |    /*  await page.screenshot({ path: 'before-login.png', fullPage: true });
  66  | */
  67  |     /* await expect(page).toHaveURL('https://practicesoftwaretesting.com/auth/login');
  68  |     await page.waitForLoadState('domcontentloaded'); */
  69  |
  70  |     await page.waitForLoadState('networkidle');
  71  |    /*  await expect(loginPage.emailInput).toBeVisible({ timeout: 15000 }); */
  72  |
> 73  |     await expect(page.locator('#email'.toBeVisible({timeout:15000})))
      |                                        ^ TypeError: "#email".toBeVisible is not a function
  74  |    await test.step('Provide valid email and password then click "Login" button',async ()=> {
  75  |         await loginPage.login(user.email, user.password);
  76  |     });
  77  |     await test.step('Verify that the current URL is not /auth/login.',async ()=> {
  78  |         await expect(page).not.toHaveURL(/auth\/login/);
  79  |     });
  80  |      await test.step('Navigate to the home page',async ()=> {
  81  |         await homePage.goto();
  82  |     });
  83  |     await test.step('Open any Product',async ()=> {
  84  |         await homePage.openAnyProduct();
  85  |     });
  86  |
  87  |     await test.step('Click "Add to Cart" button',async ()=> {
  88  |         await productPage.addToCart();
  89  |     });
  90  |     await test.step('Click "Cart" icon in header',async ()=> {
  91  |         await headerPage.openCart();
  92  |     });
  93  |
  94  |      await test.step('Click "Proceed to Checkout 3 times.Then choose a valid payment type.Then click "Confirm " 2 times.',async ()=> {
  95  |  /* This was a original type of doing this
  96  |  await checkoutPage.clickProceedToCheckout();
  97  |   await checkoutPage.clickProceedToCheckout();
  98  |   await checkoutPage.clickProceedToCheckout();
  99  |   await checkoutPage.chooseCashOnDelivery();
  100 |   await checkoutPage.confirmPayment();
  101 |    await checkoutPage.confirmPayment(); */
  102 |       await checkoutPage.completeCheckout();
  103 |     });
  104 |     await test.step('Click on Users name (e.g."Amer Civic")',async ()=> {
  105 |         await headerPage.openUserMenu();
  106 |     });
  107 |     await test.step('Click "Sign out" button',async ()=> {
  108 |         await headerPage.signOut();
  109 |     });
  110 |
  111 | //await page.pause();
  112 |     await test.step('Confirm "Sign In" button is available (confriming the log out")',async ()=> {
  113 |         await expect(homePage.signInButton).toBeVisible();
  114 |     });
  115 |
  116 |   //  await page.pause();
  117 |
  118 | });
```
