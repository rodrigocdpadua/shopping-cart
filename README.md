# Shopping Cart

## Shipping rules
All shipping calculations are made over the subtotal WITHOUT the shipping costs and WITHOUT any discounts.
For purchases above R$400,00 the shipping is free!
For purchases bellow or equal 10kg the shipping price is: R$30.
Each 5kg above 10kg will add R$7 to the shipping price.

## The system should support these kinds of coupons
Percentual coupon: are coupons that reduce an amount in percentage of the cost on subtotal. \
Fixed coupon: are coupons with fixed amounts that should reduce over the TOTAL. \
Free Shipping: make the shipping price become 0 when applied, and should have a minimum subtotal requirement.

## Available Products
Banana: R$10 per kg \
Apple: R$20 per kg \
Orange: R$30 per kg

## Enabled Coupons
A: percentual coupon of 30% \
FOO: fixed coupon of R$100,00 \
C: free shipping coupon with minimum value of R$300,50

---

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.