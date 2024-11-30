import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { Cart, ProductVariant } from '~/types'

export const useCartStore = defineStore('cart', () => {
  const cart = ref<Cart | null>(null)
  const isCartOpen = ref(false)

  const initCart = () => {
    if (!cart.value) {
      cart.value = {
        id: `cart-${Date.now()}`,
        lines: [],
        total: 0,
        totalQuantity: 0
      }
    }
  }

  const addToCart = (variant: ProductVariant & { product: any }) => {
    initCart()
    const existingLine = cart.value!.lines.find(
      line => line.productVariant.id === variant.id
    )

    if (existingLine) {
      existingLine.quantity++
    } else {
      cart.value!.lines.push({
        id: `line-${Date.now()}`,
        quantity: 1,
        productVariant: variant
      })
    }

    updateCartTotals()
  }

  const removeFromCart = (lineId: string) => {
    if (!cart.value) return
    cart.value.lines = cart.value.lines.filter(line => line.id !== lineId)
    updateCartTotals()
  }

  const updateLineQuantity = (lineId: string, quantity: number) => {
    if (!cart.value) return
    const line = cart.value.lines.find(l => l.id === lineId)
    if (line) {
      line.quantity = quantity
      updateCartTotals()
    }
  }

  const updateCartTotals = () => {
    if (!cart.value) return
    cart.value.total = cart.value.lines.reduce(
      (total, line) => total + line.productVariant.price * line.quantity,
      0
    )
    cart.value.totalQuantity = cart.value.lines.reduce(
      (total, line) => total + line.quantity,
      0
    )
  }

  const clearCart = () => {
    cart.value = null
  }

  const toggleCart = () => {
    isCartOpen.value = !isCartOpen.value
  }

  return {
    cart,
    isCartOpen,
    addToCart,
    removeFromCart,
    updateLineQuantity,
    clearCart,
    toggleCart
  }
})