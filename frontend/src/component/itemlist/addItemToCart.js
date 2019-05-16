import store from '../../store.js'
import { updateCartInfo } from '../cartfooter/Cart.jsx'

let addItemToCart = (itemId) => {
  let data = new FormData()
  data.append("itemId", itemId)
  fetch("/cart/addItem", { method: "POST", credentials: 'include', body: data }).then(headers => {
    return headers.text()
  }).then(body => {
    let result = JSON.parse(body)
    if (result.successful) {
      updateCartInfo()
    }
  })
}

export default addItemToCart