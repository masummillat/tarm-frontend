import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';

export class Product extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  componentDidMount(){
      this.props.actions.fetchProduct();
  }

  render() {
        //fetched data putting in an array product
      var product = []
      for (var i in this.props.store.product) {
          if (this.props.store.product.hasOwnProperty(i)) {
              product.push(this.props.store.product[i])
          }
      }
      console.log(product)
    return (
      <div className="store-product">
          {
              product.map((product,i)=>{
                  return <div key={i} className="product">
                          <img src={`http://localhost:3001/images/uploads/product/${product.image}`}/>
                          <div className="product-name">
                              <h1>{product.product}</h1>
                          </div>
                          <div className="supply">
                              <h1>Supply Ability: </h1>
                              <p>{product.stock}</p>
                          </div>
                          <div className="description">
                              <p>{product.description}</p>
                          </div>
                      </div>

              })
          }

      </div>


    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    store: state.store,
  };
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...actions }, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Product);
