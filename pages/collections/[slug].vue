<template>
  <div class="container mx-auto px-4 py-8">
    <div v-if="collection" class="mb-8">
      <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">
        {{ collection.name }}
      </h1>
      <p class="text-gray-600 dark:text-gray-400">{{ collection.description }}</p>
    </div>
    
    <div class="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      <ProductCard
        v-for="product in collectionProducts"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const { slug } = route.params

const collection = computed(() => 
  collections.find(c => c.slug === slug)
)

const collectionProducts = computed(() => 
  products.filter(product => 
    product.collections?.some(c => c.slug === slug)
  )
)
</script>