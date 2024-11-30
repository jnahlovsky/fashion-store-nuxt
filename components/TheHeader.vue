<template>
  <nav class="bg-white dark:bg-gray-800">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 items-center justify-between">
        <div class="flex items-center">
          <NuxtLink to="/" class="text-2xl font-bold text-gray-900 dark:text-white">
            Fashion Store
          </NuxtLink>
          <div class="hidden md:block">
            <div class="ml-10 flex items-baseline space-x-4">
              <NuxtLink
                v-for="category in categories"
                :key="category.id"
                :to="`/categories/${category.slug}`"
                class="px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              >
                {{ category.name }}
              </NuxtLink>
              <NuxtLink
                to="/collections/new-arrivals"
                class="px-3 py-2 rounded-md text-sm font-medium text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
              >
                New Arrivals
              </NuxtLink>
              <NuxtLink
                to="/collections/summer-collection"
                class="px-3 py-2 rounded-md text-sm font-medium text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
              >
                Summer Collection
              </NuxtLink>
            </div>
          </div>
        </div>
        <div class="flex items-center space-x-4">
          <ThemeToggle />
          <CartButton />
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
const categories = ref([
  { id: '1', name: 'Women', slug: 'women' },
  { id: '2', name: 'Men', slug: 'men' },
  { id: '3', name: 'Accessories', slug: 'accessories' }
])
</script>