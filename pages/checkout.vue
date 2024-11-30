<template>
  <div class="container mx-auto px-4 py-8">
    <div class="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-2">
      <div>
        <h2 class="mb-8 text-2xl font-bold text-gray-900 dark:text-white">
          Shipping Information
        </h2>
        <form @submit.prevent="submitOrder" class="space-y-6">
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Email address
            </label>
            <input
              id="email"
              type="email"
              v-model="form.email"
              required
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
            />
          </div>
          
          <div class="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
            <div>
              <label for="firstName" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                First name
              </label>
              <input
                id="firstName"
                type="text"
                v-model="form.firstName"
                required
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
              />
            </div>
            <div>
              <label for="lastName" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Last name
              </label>
              <input
                id="lastName"
                type="text"
                v-model="form.lastName"
                required
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
              />
            </div>
          </div>

          <div>
            <label for="address" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Address
            </label>
            <input
              id="address"
              type="text"
              v-model="form.address"
              required
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
            />
          </div>

          <div>
            <h3 class="mb-4 text-lg font-medium text-gray-700 dark:text-gray-300">Shipping Method</h3>
            <div class="space-y-4">
              <div
                v-for="method in availableShippingMethods"
                :key="method.id"
                class="flex items-center"
              >
                <input
                  type="radio"
                  :id="method.id"
                  :value="method"
                  v-model="selectedShippingMethod"
                  class="h-4 w-4 border-gray-300 text-primary-600 focus:ring-primary-500"
                />
                <label :for="method.id" class="ml-3">
                  <span class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    {{ method.name }} - {{ formatPrice(method.price) }}
                  </span>
                  <span class="mt-1 block text-sm text-gray-500 dark:text-gray-400">
                    {{ method.description }}
                  </span>
                </label>
              </div>
            </div>
          </div>

          <div>
            <h3 class="mb-4 text-lg font-medium text-gray-700 dark:text-gray-300">Payment Method</h3>
            <div class="space-y-4">
              <div
                v-for="method in availablePaymentMethods"
                :key="method.id"
                class="flex items-center"
              >
                <input
                  type="radio"
                  :id="method.id"
                  :value="method"
                  v-model="selectedPaymentMethod"
                  class="h-4 w-4 border-gray-300 text-primary-600 focus:ring-primary-500"
                />
                <label :for="method.id" class="ml-3">
                  <span class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    {{ method.name }}
                  </span>
                  <span class="mt-1 block text-sm text-gray-500 dark:text-gray-400">
                    {{ method.description }}
                  </span>
                </label>
              </div>
            </div>
          </div>

          <button
            type="submit"
            :disabled="!isFormValid || isSubmitting"
            class="w-full rounded-md border border-transparent bg-primary-600 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span v-if="isSubmitting" class="flex items-center justify-center">
              <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Processing...
            </span>
            <span v-else>Place Order</span>
          </button>
        </form>
      </div>

      <div>
        <h2 class="mb-8 text-2xl font-bold text-gray-900 dark:text-white">
          Order Summary
        </h2>
        <div class="rounded-lg bg-gray-50 p-6 dark:bg-gray-800">
          <div class="flow-root">
            <ul role="list" class="-my-6 divide-y divide-gray-200 dark:divide-gray-700">
              <li
                v-for="item in cartStore.cart?.lines"
                :key="item.id"
                class="flex py-6"
              >
                <CartItem :item="item" />
              </li>
            </ul>
          </div>
          <div class="mt-6 space-y-4">
            <div class="flex items-center justify-between">
              <p class="text-sm text-gray-600 dark:text-gray-400">Subtotal</p>
              <p class="text-sm font-medium text-gray-900 dark:text-white">
                {{ formatPrice(cartStore.cart?.total || 0) }}
              </p>
            </div>
            <div v-if="selectedShippingMethod" class="flex items-center justify-between">
              <p class="text-sm text-gray-600 dark:text-gray-400">Shipping</p>
              <p class="text-sm font-medium text-gray-900 dark:text-white">
                {{ formatPrice(selectedShippingMethod.price) }}
              </p>
            </div>
            <div class="flex items-center justify-between border-t border-gray-200 pt-4 dark:border-gray-700">
              <p class="text-base font-medium text-gray-900 dark:text-white">Order total</p>
              <p class="text-base font-medium text-gray-900 dark:text-white">
                {{ formatPrice(total) }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const cartStore = useCartStore()
const { availableShippingMethods, availablePaymentMethods } = useCheckout()

const form = ref({
  email: '',
  firstName: '',
  lastName: '',
  address: ''
})

const selectedShippingMethod = ref<ShippingMethod | null>(null)
const selectedPaymentMethod = ref<PaymentMethod | null>(null)
const isSubmitting = ref(false)

const total = computed(() => {
  const subtotal = cartStore.cart?.total || 0
  const shipping = selectedShippingMethod.value?.price || 0
  return subtotal + shipping
})

const isFormValid = computed(() => {
  return (
    form.value.email &&
    form.value.firstName &&
    form.value.lastName &&
    form.value.address &&
    selectedShippingMethod.value &&
    selectedPaymentMethod.value
  )
})

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(price / 100)
}

const submitOrder = async () => {
  try {
    isSubmitting.value = true

    if (!cartStore.cart || !selectedShippingMethod.value || !selectedPaymentMethod.value) {
      throw new Error('Missing required information')
    }

    await $fetch('/api/order', {
      method: 'POST',
      body: {
        cart: cartStore.cart,
        customer: form.value,
        shippingMethod: selectedShippingMethod.value,
        paymentMethod: selectedPaymentMethod.value
      }
    })

    // Clear cart and redirect to success page
    cartStore.setCart(null)
    navigateTo('/checkout/success')
  } catch (error) {
    console.error('Failed to place order:', error)
    // Handle error (show toast notification, etc.)
  } finally {
    isSubmitting.value = false
  }
}
</script>