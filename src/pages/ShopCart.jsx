import React from 'react';
import InnerLayout from '../components/InnerLayout';

function ShopCart() {
  return (
    <InnerLayout
      breadcrumbs={['Home', '//', 'Cart']}
      pageTitle="Shopping Cart"
      activePage="shop"
    >
      <div className="cart-section section-padding">
        <div className="container">
          <div className="cart-list-area">
            <div className="table-responsive">
              <table className="table common-table">
                <thead data-aos="fade-down">
                  <tr>
                    <th className="text-center">Publication</th>
                    <th className="text-center">Price</th>
                    <th className="text-center">Quantity</th>
                    <th className="text-center">Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="align-items-center py-3">
                    <td>
                      <div className="cart-item-thumb d-flex align-items-center gap-4">
                        <i className="fas fa-times"></i>
                        <img className="w-100" src="/assets/img/inner/shop/shop-cart-01.png" alt="product" />
                        <span className="head text-nowrap">Shells of Elegance Monograph</span>
                      </div>
                    </td>
                    <td className="text-center">
                      <span className="price-usd">$45.00 USD</span>
                    </td>
                    <td className="price-quantity text-center">
                      <div className="quantity d-inline-flex align-items-center justify-content-center gap-1 py-2 px-4 border n50-border_20 text-sm">
                        <button className="quantityDecrement"><i className="fal fa-minus"></i></button>
                        <input type="text" defaultValue="1" className="quantityValue" />
                        <button className="quantityIncrement"><i className="fal fa-plus"></i></button>
                      </div>
                    </td>
                    <td className="text-center">
                      <span className="price-usd">$45.00 USD</span>
                    </td>
                  </tr>
                  <tr className="align-items-center py-3">
                    <td>
                      <div className="cart-item-thumb d-flex align-items-center gap-4">
                        <i className="fas fa-times"></i>
                        <img className="w-100" src="/assets/img/inner/shop/shop-cart-02.png" alt="product" />
                        <span className="head text-nowrap">Frugal Digital Twins Handbook</span>
                      </div>
                    </td>
                    <td className="text-center">
                      <span className="price-usd">$38.00 USD</span>
                    </td>
                    <td className="price-quantity text-center">
                      <div className="quantity d-inline-flex align-items-center justify-content-center gap-1 py-2 px-4 border n50-border_20 text-sm">
                        <button className="quantityDecrement"><i className="fal fa-minus"></i></button>
                        <input type="text" defaultValue="1" className="quantityValue" />
                        <button className="quantityIncrement"><i className="fal fa-plus"></i></button>
                      </div>
                    </td>
                    <td className="text-center">
                      <span className="price-usd">$38.00 USD</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="coupon-items d-flex flex-md-nowrap flex-wrap justify-content-between align-items-center gap-4 pt-4">
              <form action="#" className="d-flex flex-sm-nowrap flex-wrap align-items-center gap-3">
                <input type="text" placeholder="Enter coupon code" />
                <button type="submit" className="theme-btn alt-color radius-xs">Apply</button>
              </form>
              <button type="button" className="theme-btn alt-color radius-xs">Update Cart</button>
            </div>
          </div>
        </div>
      </div>

      <div className="cart-total-area section-padding pt-0">
        <div className="container">
          <div className="cart-total-items">
            <h3>Cart totals</h3>
            <ul>
              <li>Subtotal <span className="subtotal">$83.00 USD</span></li>
              <li>Total <span className="price">$83.00 USD</span></li>
            </ul>
            <a href="/checkout" className="theme-btn">Proceed to Checkout</a>
          </div>
        </div>
      </div>
    </InnerLayout>
  );
}

export default ShopCart;
