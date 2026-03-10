import React from 'react';
import InnerLayout from '../components/InnerLayout';

function Checkout() {
  return (
    <InnerLayout
      breadcrumbs={['Home', '//', 'Checkout']}
      pageTitle="Checkout"
      activePage="shop"
    >
      <section className="checkout-section fix section-padding">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <form action="#" method="post">
                <div className="row g-4">
                  <div className="col-md-5 col-lg-4 col-xl-3">
                    <div className="checkout-radio">
                      <p className="primary-text">Select any one</p>
                      <div className="checkout-radio-wrapper">
                        <div className="checkout-radio-single">
                          <input type="checkbox" className="form-check-input" id="cCard" name="pay-method" value="Credit/Debit Cards" />
                          <label htmlFor="cCard">Credit/Debit Cards</label>
                        </div>
                        <div className="checkout-radio-single">
                          <input type="checkbox" className="form-check-input" id="paypal" name="pay-method" value="PayPal" />
                          <label htmlFor="paypal">PayPal</label>
                        </div>
                        <div className="checkout-radio-single">
                          <input type="checkbox" className="form-check-input" id="payoneer" name="pay-method" value="Payoneer" />
                          <label htmlFor="payoneer">Payoneer</label>
                        </div>
                        <div className="checkout-radio-single">
                          <input type="checkbox" className="form-check-input" id="visa" name="pay-method" value="Visa" />
                          <label htmlFor="visa">Visa</label>
                        </div>
                        <div className="checkout-radio-single">
                          <input type="checkbox" className="form-check-input" id="mastercard" name="pay-method" value="Mastercard" />
                          <label htmlFor="mastercard">Mastercard</label>
                        </div>
                        <div className="checkout-radio-single">
                          <input type="checkbox" className="form-check-input" id="fastPay" name="pay-method" value="Fastpay" />
                          <label htmlFor="fastPay">Mobile Money</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-7 col-lg-8 col-xl-9">
                    <div className="checkout-single-wrapper">
                      <div className="checkout-single boxshado-single">
                        <h4>Billing address</h4>
                        <div className="checkout-single-form">
                          <div className="row g-4">
                            <div className="col-lg-6">
                              <div className="input-single">
                                <input type="text" name="user-first-name" id="userFirstName" required="" placeholder="First Name" />
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="input-single">
                                <input type="text" name="user-last-name" id="userLastName" required="" placeholder="Last Name" />
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="input-single">
                                <input type="email" name="user-check-email" id="userCheckEmail" required="" placeholder="Your Email" />
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="input-single">
                                <div className="form">
                                  <select className="single-select w-100">
                                    <option>Ghana</option>
                                    <option>Nigeria</option>
                                    <option>Kenya</option>
                                    <option>South Africa</option>
                                    <option>Other</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-12">
                              <div className="input-single">
                                <textarea name="user-address" id="userAddress" placeholder="Address"></textarea>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="checkout-single checkout-single-bg">
                        <h4>Payment Methods</h4>
                        <div className="checkout-single-form">
                          <p className="payment"></p>
                          <div className="row g-3">
                            <div className="col-lg-12">
                              <div className="input-single">
                                <label htmlFor="userCardNumber">Card number</label>
                                <input type="number" name="user-card-number" id="userCardNumber" placeholder="0000 0000 0000 0000" />
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="input-single">
                                <label htmlFor="userCardDate">Expiry date</label>
                                <input type="text" id="userCardDate" placeholder="DD/MM/YY" />
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="input-single">
                                <label htmlFor="userCvc">Cvc / Cvv</label>
                                <input type="text" maxLength="3" name="user-card-cvc" id="userCvc" required="" placeholder="3 Digits" />
                              </div>
                            </div>
                            <div className="col-lg-12">
                              <div className="input-single">
                                <label htmlFor="userCardName">Name on card</label>
                                <input type="text" name="user-card-name" id="userCardName" placeholder="Name" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="input-single input-check payment-save">
                          <input type="checkbox" className="form-check-input" name="save-for-next" id="saveForNext" />
                          <label htmlFor="saveForNext">Save for my next payment</label>
                        </div>
                        <div className="mt-4">
                          <a href="/checkout" className="theme-btn">
                            <span>Payment Now</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </InnerLayout>
  );
}

export default Checkout;
