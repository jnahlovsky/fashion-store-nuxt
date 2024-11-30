<template>
  <div>
    <HomeBanner />
    <FeaturedProducts />
    <section class="bg-gray-50 py-16 dark:bg-gray-800">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div v-for="category in categories" :key="category.id" class="group relative overflow-hidden rounded-lg">
            <NuxtLink :to="`/categories/${category.slug}`">
              <NuxtImg
                v-if="category.featuredAsset"
                :src="category.featuredAsset.preview"
                :alt="category.name"
                class="h-80 w-full transform object-cover transition duration-300 group-hover:scale-105"
              />
              <div class="absolute inset-0 bg-black bg-opacity-40">
                <div class="flex h-full items-center justify-center">
                  <h3 class="text-3xl font-bold text-white">{{ category.name }}</h3>
                </div>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const { getCategories } = useProducts()
const categories = await getCategories()
</script>