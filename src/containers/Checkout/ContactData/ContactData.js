import React, { Component } from 'react';

import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import styles from './ContactData.css';
import axios from '../../../axios-orders';

class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      zipcode: ''
    },
    loading: false
  }

  handleOrder = async (e) => {
    e.preventDefault();
    this.setState({ loading: true });

    const order = {
      ingredients: this.props.ingredients,
      price: this.props.totalPrice,
      customer: {
        name: 'David',
        address: {
          street: 'Cool Street',
          zip: '12345',
          country: 'US'
        },
        email: 'dr@test.com'
      },
      deliveryMethod: 'fastest'
    };

    try {
      await axios.post('/orders.json', order);
      this.setState({ loading: false });
      this.props.history.push('/');
    } catch (e) {
      this.setState({ loading: false });
    }
  };

  render() {    
    return (
      <div className={styles.contactData}>
        <h4>Enter your Contact Data</h4>
        {this.state.loading ?
          <Spinner /> :
          <form>
          <input className={styles.input} type="text" name="name" placeholder="Your Name" />
          <input className={styles.input} type="email" name="email" placeholder="Your Email" />
          <input className={styles.input} type="text" name="street" placeholder="Your Street" />
          <input className={styles.input} type="text" name="zipcode" placeholder="Your Zipcode" />
          <Button btnType="success" clicked={this.handleOrder}>ORDER</Button>
        </form>
        }        
      </div>
    );
  }
}

export default ContactData;
