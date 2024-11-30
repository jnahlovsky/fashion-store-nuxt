<template>
  <div class="relative">
    <Swiper
      :modules="[SwiperAutoplay, SwiperPagination, SwiperNavigation]"
      :slides-per-view="1"
      :loop="true"
      :autoplay="{ delay: 5000 }"
      :pagination="{ clickable: true }"
      :navigation="true"
      class="w-full"
    >
      <SwiperSlide v-for="banner in banners" :key="banner.id">
        <div class="relative h-[60vh] w-full">
          <NuxtImg
            :src="banner.image.preview"
            :alt="banner.image.alt"
            class="absolute inset-0 h-full w-full object-cover"
          />
          <div class="absolute inset-0 bg-black bg-opacity-40">
            <div class="container mx-auto flex h-full items-center px-4">
              <div class="max-w-xl text-white">
                <h2 class="mb-4 text-4xl font-bold">{{ banner.title }}</h2>
                <p class="mb-8 text-xl">{{ banner.subtitle }}</p>
                <NuxtLink
                  :to="banner.link"
                  class="inline-block rounded-lg bg-white px-8 py-3 text-lg font-semibold text-gray-900 transition hover:bg-gray-100"
                >
                  Shop Now
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { banners } from '~/mocks/data'

const SwiperAutoplay = Autoplay
const SwiperPagination = Pagination
const SwiperNavigation = Navigation
</script>