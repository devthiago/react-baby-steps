import React from 'react'
import Header from './Header'
import Promotions from './Promotions'
import Products from './Products'
import Cart from './Cart'
import { getPromotions, getProducts, getProfile } from '../lib/api'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      promotions: [],
      products: [],
      profile: {},
      selectedPromo: [],
      cart: []
    }
  }

  componentDidMount() {
    Promise
      .all([getProfile(), getPromotions(), getProducts()])
      .then(([profile, promotions, products]) => {
        this.setState({ products, profile, promotions })
      })
  }

  handleTogglePromo = id => {
    const { promotions, selectedPromo } = this.state
    const isSelected = !!selectedPromo.find(p => p.id === id)

    if (isSelected) {
      this.setState({
        selectedPromo: selectedPromo.filter(p => p.id !== id)
      })
    } else {
      const selected = promotions.find(p => p.id === id)
      selectedPromo.push(selected)
      this.setState({ selectedPromo })
    }
  }

  handleAddToCart = id => {
    const { products, cart } = this.state

    let prodIndex = null
    const prod = products.find((p, i) => {
      prodIndex = i
      return p.id === id
    })
    if (!prod._cache) prod._cache = { ...prod }
    
    let cartIndex = null
    const inCart = cart.find((p, i) => {
      cartIndex = i
      return p.id === id
    })
    
    if (!inCart) {
      cart.push({
        id: prod.id,
        title: prod.title,
        quantity: 1,
        price: prod.price,
        shipping: prod.shipping,
        _cache: { ...prod._cache }
      })
    } else {
      cart[cartIndex].quantity += 1
      cart[cartIndex].price = cart[cartIndex].quantity * cart[cartIndex]._cache.price
    }

    prod.inventory -= 1
    products[prodIndex] = prod

    this.setState({ products, cart })
  }

  render() {
    return (
      <React.Fragment>
        <Header
          {...this.state.profile}
          promotions={this.state.selectedPromo}
        />
        <div className='container'>
          <div className='mt-4'>
            <Promotions
              data={this.state.promotions}
              selected={this.state.selectedPromo}
              onToggle={this.handleTogglePromo}
            />
          </div>
          <div className='row mt-4'>
            <div className='col-sm-9'>
              <Products
                data={this.state.products}
                onAddToCart={this.handleAddToCart}
              />
            </div>
            <div className='col-sm-3'>
              <Cart
                items={this.state.cart}
                profile={this.state.profile}
                promotions={this.state.selectedPromo}
                onRemoveFromCart={() => null}
                onCheckout={() => null}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
