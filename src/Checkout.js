import React, { Component } from 'react';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';

const CURRENCY = 'USD';

const fromDollarToCent = amount => amount * 100;
class Checkout extends Component {
  constructor(props) {
    super(props);
    this.successPayment = this.successPayment.bind(this);
    this.errorPayment = this.errorPayment.bind(this);
    this.onToken = this.onToken.bind(this);
  }

  successPayment(data) {
    alert('Payment Successful');
  }

  errorPayment(data) {
    alert('Payment Error');
  }

  onToken(amount, description) {
    return token =>
      axios
        .post('http://checkout', {
          description,
          source: token.id,
          currency: CURRENCY,
          amount: fromDollarToCent(amount)
        })
        .then(this.successPayment)
        .catch(this.errorPayment);
  }
  render() {
    const { name, description, amount } = this.props;
    return (
      <StripeCheckout
        name={name}
        description={description}
        amount={fromDollarToCent(amount)}
        token={this.onToken(amount, description)}
        currency={CURRENCY}
        stripeKey={'pk_test_fPa0yCKDiKn7nhv42hiJQAoo'}
      />
    );
  }
}

export default Checkout;
