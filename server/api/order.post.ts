import { createError } from 'h3'
import type { Cart, ShippingMethod, PaymentMethod } from '~/types'
import { sendEmail } from '../utils/mailjet'
import { generateCustomerOrderEmail } from '../email-templates/customer-order'
import { generateAdminNotificationEmail } from '../email-templates/admin-notification'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const body = await readBody(event)
  
  const { cart, customer, shippingMethod, paymentMethod } = body as {
    cart: Cart
    customer: {
      email: string
      firstName: string
      lastName: string
      address: string
    }
    shippingMethod: ShippingMethod
    paymentMethod: PaymentMethod
  }

  const order = {
    id: `order-${Date.now()}`,
    customer,
    items: cart.lines.map(line => ({
      name: line.productVariant.product.name,
      sku: line.productVariant.sku,
      quantity: line.quantity,
      price: line.productVariant.price
    })),
    shipping: shippingMethod,
    payment: paymentMethod,
    total: cart.total + shippingMethod.price
  }

  try {
    // Send order confirmation to customer
    await sendEmail(
      customer.email,
      'Order Confirmation - Fashion Store',
      generateCustomerOrderEmail(order)
    )

    // Send notification to admin
    await sendEmail(
      config.mailjet.adminEmail,
      'New Order Received - Fashion Store',
      generateAdminNotificationEmail(order)
    )

    return {
      success: true,
      message: 'Order confirmation emails sent'
    }
  } catch (error) {
    console.error('Failed to send email:', error)
    throw createError({
      statusCode: 500,
      message: 'Failed to send order confirmation email'
    })
  }
})