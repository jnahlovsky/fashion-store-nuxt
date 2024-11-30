export const generateCustomerOrderEmail = (order: any) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price / 100)
  }

  return `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { text-align: center; margin-bottom: 30px; }
          .order-details { margin-bottom: 30px; }
          .product-list { margin-bottom: 20px; }
          .product-item { margin-bottom: 10px; }
          .total { font-weight: bold; margin-top: 20px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Thank You for Your Order!</h1>
            <p>Order #${order.id}</p>
          </div>
          
          <div class="order-details">
            <h2>Order Details</h2>
            <div class="product-list">
              ${order.items
                .map(
                  (item: any) => `
                <div class="product-item">
                  <p>${item.name} x ${item.quantity}</p>
                  <p>Price: ${formatPrice(item.price * item.quantity)}</p>
                </div>
              `
                )
                .join('')}
            </div>
            
            <div class="shipping">
              <h3>Shipping Method</h3>
              <p>${order.shipping.name} - ${formatPrice(order.shipping.price)}</p>
            </div>
            
            <div class="total">
              <p>Total: ${formatPrice(order.total)}</p>
            </div>
          </div>
          
          <div class="footer">
            <p>If you have any questions, please contact us at support@fashionstore.com</p>
          </div>
        </div>
      </body>
    </html>
  `
}