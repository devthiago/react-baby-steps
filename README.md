# React Baby Steps - Shop Cart

A simple shop cart project to start learning how to program an interface with React. This project was based on [Shop-vue](https://github.com/matheusazzi/shop-vue), created by [Matheus Azzi](https://github.com/matheusazzi).

### How cart works

- Products can be added to the cart if they have an item available on stock.
- Products added to the cart must be removable.
- Checkout must be disabled if cart **total** is over user **limit**.
- If a product already exists on the cart, its counter should be updated.
- All products have a shipping price. **shipping** is defined by the highest shipping price of products added to cart.

### How promotions work

- 30% OFF should reduce 30% of the costs on **subtotal**.
- $100.00 Discount should reduce $100.00 of **total**.
- Free Shipping should set **shipping** to zero.
- +$100.00 on limit should increase user **limit** by $100.00.

### We have 3 resources:

##### Profile

```js
{
  'firstName': 'Joe',
  'lastName': 'Montana',
  'limit': 850.00
}
```

##### Products

```js
{
  'id': 1,
  'title': 'iPad 4 Mini',
  'price': 500.01,
  'inventory': 2,
  'shipping': 15.00
},
...
```

##### Promotions

```js
{ 'id': 1, 'title': '30% OFF' },
{ 'id': 2, 'title': '$100.00 Discount' },
{ 'id': 3, 'title': 'Free Shipping' },
{ 'id': 4, 'title': '+ $100.00 on limit' }
```

## Project setup

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).<br>
Also, I suggest you to use [react-devtools](https://github.com/facebook/react-devtools) if you want a see how everything happens.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
