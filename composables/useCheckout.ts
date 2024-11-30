import { ref, computed } from 'vue'
import type { Cart, ShippingMethod, PaymentMethod } from '~/types'
import { shippingMethods, paymentMethods } from '~/mocks/data'

export function useCheckout() {
  const selectedShippingMethod = ref<ShippingMethod | null>(null)
  const selectedPaymentMethod = ref<PaymentMethod | null>(null)
  const cart = ref<Cart | null>(null)

  const availableShippingMethods = computed(() => shippingMethods)
  const availablePaymentMethods = computed(() => paymentMethods)

  const total = computed(() => {
    if (!cart.value) return 0
    const subtotal = cart.value.total
    const shippingCost = selectedShippingMethod.value?.price || 0
    return subtotal + shippingCost
  })

  const setShippingMethod = (method: ShippingMethod) => {
    selectedShippingMethod.value = method
  }

  const setPaymentMethod = (method: PaymentMethod) => {
    selectedPaymentMethod.value = method
  }

  const placeOrder = async () => {
    if (!cart.value || !selectedShippingMethod.value || !selectedPaymentMethod.value) {
      throw new Error('Missing required checkout information')
    }

    // Mock API call - will be replaced with actual Vendure mutation
    return {
      success: true,
      orderId: 'order-' + Date.now()
    }
  }

  return {
    selectedShippingMethod,
    selectedPaymentMethod,
    availableShippingMethods,
    availablePaymentMethods,
    total,
    setShippingMethod,
    setPaymentMethod,
    placeOrder
  }
}