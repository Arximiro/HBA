import React, { Component } from 'react';

import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';
import styles from './ContactData.css';
import axios from '../../../axios-orders';

class ContactData extends Component {
  state = {
    orderForm: {
      name: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your Name'
        },
        value: ''
      },        
      street: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Street'
        },
        value: ''
      },
      zip: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Zipcode'
        },
        value: ''
      },        
      country: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Country'
        },
        value: ''
      },        
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'email',
          placeholder: 'Email'
        },
        value: ''
      },        
      deliveryMethod: {
        elementType: 'select',
        elementConfig: {
          options: [
            {value: 'fastest', displayValue: 'Fastest'},
            {value: 'cheapest', displayValue: 'Cheapest'},
          ]
        },
        value: ''
      },        
    },
    loading: false
  }

  handleOrder = async (e) => {
    e.preventDefault();
    this.setState({ loading: true });
    const formData = {};
    for (let formElementId in this.state.orderForm) {
      formData[formElementId] = this.state.orderForm[formElementId].value;
    }

    const order = {
      ingredients: this.props.ingredients,
      price: this.props.totalPrice,
      orderData: formData
    };

    try {
      await axios.post('/orders.json', order);
      this.setState({ loading: false });
      this.props.history.push('/');
    } catch (e) {
      this.setState({ loading: false });
    }
  };

  handleInputChanged = (event, inputId) => {
    const orderForm = {
      ...this.state.orderForm
    };
    const updatedFormElement = {...orderForm[inputId]};
    updatedFormElement.value = event.target.value;
    orderForm[inputId] = updatedFormElement;
    this.setState({orderForm});
  }

  render() {
    const formElementsArray = [];
    for (let key in this.state.orderForm) {
      formElementsArray.push({
        id: key,
        config: this.state.orderForm[key]
      });
    }
    return (
      <div className={styles.contactData}>
        <h4>Enter your Contact Data</h4>
        {this.state.loading ?
          <Spinner /> :
          <form onSubmit={this.handleOrder}>
            {formElementsArray.map(formElement =>
              <Input
                key={formElement.id}
                elementType={formElement.config.elementType}
                elementConfig={formElement.config.elementConfig}
                value={formElement.config.value}
                changed={(e) => this.handleInputChanged(e, formElement.id)}
              />)}
            <Button btnType="success" clicked={this.handleOrder}>ORDER</Button>
          </form>
        }
      </div>
    );
  }
}

export default ContactData;
