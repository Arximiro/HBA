import React, { Component } from 'react';

import Order from '../../components/Order/Order';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/WithErrorHandler/WithErrorHandler';

class Orders extends Component {
  state = {
    orders: [],
    loading: true
  }

  async componentDidMount() {
    try {
      const res = await axios.get('/orders.json');
      const orders = []
      for (let key in res.data) {
        orders.push({
          ...res.data[key],
          id: key
        });
      }
      this.setState({loading: false, orders});
    } catch (e) {
      this.setState({loading: false});
    }
  }

  render() {
    return (
      <div>
        {this.state.orders.map(order =>
          <Order
            key={order.id}
            ingredients={order.ingredients}
            price={+order.price}
          />
        )}
      </div>
    );
  }
}

export default withErrorHandler(Orders, axios);
