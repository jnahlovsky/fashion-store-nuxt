<template>
  <footer class="bg-white dark:bg-gray-800">
    <div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div class="grid grid-cols-2 gap-8 md:grid-cols-4">
        <div>
          <h3 class="text-sm font-semibold text-gray-500 dark:text-gray-400">Company</h3>
          <ul class="mt-4 space-y-4">
            <li>
              <NuxtLink to="/about" class="text-base text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                About
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/contact" class="text-base text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                Contact
              </NuxtLink>
            </li>
          </ul>
        </div>
        <div>
          <h3 class="text-sm font-semibold text-gray-500 dark:text-gray-400">Legal</h3>
          <ul class="mt-4 space-y-4">
            <li>
              <NuxtLink to="/privacy" class="text-base text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                Privacy
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/terms" class="text-base text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                Terms
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
      <div class="mt-8 border-t border-gray-200 dark:border-gray-700 pt-8">
        <p class="text-base text-gray-500 dark:text-gray-400 text-center">
          © {{ new Date().getFullYear() }} Fashion Store. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>