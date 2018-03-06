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
        value: '',
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },        
      street: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Street'
        },
        value: '',
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      zip: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Zipcode'
        },
        value: '',
        validation: {
          required: true,
          minLength: 5,
          maxLength: 5
        },
        valid: false,
        touched: false
      },        
      country: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Country'
        },
        value: '',
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },        
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'email',
          placeholder: 'Email'
        },
        value: '',
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },        
      deliveryMethod: {
        elementType: 'select',
        elementConfig: {
          options: [
            {value: 'fastest', displayValue: 'Fastest'},
            {value: 'cheapest', displayValue: 'Cheapest'},
          ]
        },
        value: 'fastest',
        validation: {},
      },        
    },
    formIsValid: false,
    loading: false
  }

  handleValidityCheck(value, rules) {
    let isValid = true;

    if (rules.required) {
      isValid = value.trim() !== '' && isValid;
    }
    
    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }

    if (rules.maxLength) {
      isValid = value.length <= rules.minLength && isValid;
    }
    return isValid;
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
    updatedFormElement.valid = this.handleValidityCheck(updatedFormElement.value, updatedFormElement.validation);
    updatedFormElement.touched = true;
    orderForm[inputId] = updatedFormElement;

    let formIsValid = true;
    for (let inputId in orderForm) {
      formIsValid = orderForm[inputId].valid && formIsValid;
    }

    this.setState({orderForm, formIsValid});
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
                invalid={!formElement.config.valid}
                touched={formElement.config.touched}
                changed={(e) => this.handleInputChanged(e, formElement.id)}
              />)}
            <Button btnType="success" disabled={!this.state.formIsValid} clicked={this.handleOrder}>ORDER</Button>
          </form>
        }
      </div>
    );
  }
}

export default ContactData;
