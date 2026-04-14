import { test, expect } from '@playwright/test';
import { BasePage } from '../pages/BasePage';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { RegisterPage } from '../pages/RegisterPage';
import { ProductPage } from '../pages/ProductPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { HeaderPage } from '../pages/HeaderPage';

test('Home-Register-Login-Cart-SignOut ToolShop automation', async ({
  page,
}) => {
  const homePage = new HomePage(page);
  const loginPage = new LoginPage(page);
  const registerPage = new RegisterPage(page);
  const productPage = new ProductPage(page);
  const checkoutPage = new CheckoutPage(page);
  const headerPage = new HeaderPage(page);

  const uniqueEmail = `amesrkino${Date.now()}@gmail.com`;

  const user = {
    firstName: 'Amer',
    lastName: 'Ćivić',
    dateOfBirth: '2002-11-29',
    street: 'Ulica V-divizije NOP-a',
    postcode: '72240',
    city: 'Kakanj',
    state: 'Federacija',
    country: 'BA',
    phone: '061444555',
    email: uniqueEmail,
    password: 'Atlantko321.',
  };

  await test.step('Open the ToolShop website', async () => {
    await homePage.goto();
  });
  await test.step('Click "Sign in" button in header', async () => {
    await homePage.clickSignin();
  });
  await test.step('Click Register your account link', async () => {
    await loginPage.clickRegisterYourAccount();
  });
  await test.step('Provide valid data in all required fields and click register', async () => {
    await registerPage.register(user);
  });

  await test.step('Wait for the user to be redirected to the login page.', async () => {
    await expect(page).toHaveURL(/auth\/login/, { timeout: 15000 });
  });

  await test.step('Provide valid email and password then click "Login" button', async () => {
    await loginPage.login(user.email, user.password);
  });
  await test.step('Verify that the current URL is not /auth/login.', async () => {
    await expect(page).not.toHaveURL(/auth\/login/);
  });
  await test.step('Navigate to the home page', async () => {
    await homePage.goto();
  });
  await test.step('Open any Product', async () => {
    await homePage.openAnyProduct();
  });

  await test.step('Click "Add to Cart" button', async () => {
    await productPage.addToCart();
  });
  await test.step('Click "Cart" icon in header', async () => {
    await headerPage.openCart();
  });

  await test.step('Click "Proceed to Checkout 3 times.Then choose a valid payment type.Then click "Confirm " 2 times.', async () => {
    await checkoutPage.completeCheckout();
  });
  await test.step('Click on Users name (e.g."Amer Civic")', async () => {
    await headerPage.openUserMenu();
  });
  await test.step('Click "Sign out" button', async () => {
    await headerPage.signOut();
  });

  await test.step('Confirm "Sign In" button is available (confriming the log out")', async () => {
    await expect(homePage.signInButton).toBeVisible();
  });

});
