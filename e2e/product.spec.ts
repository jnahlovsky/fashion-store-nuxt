import { test, expect } from '@playwright/test'

test('product listing page shows products', async ({ page }) => {
  await page.goto('/')
  
  // Wait for products to load
  await page.waitForSelector('[data-testid="product-grid"]')
  
  // Check if products are displayed
  const products = await page.getByTestId('product-card').all()
  expect(products.length).toBeGreaterThan(0)
})

test('product details page shows correct information', async ({ page }) => {
  // Will be implemented with actual product URL
  const productSlug = 'sample-product'
  await page.goto(`/products/${productSlug}`)
  
  // Check if product details are displayed
  await expect(page.getByTestId('product-title')).toBeVisible()
  await expect(page.getByTestId('product-price')).toBeVisible()
  await expect(page.getByTestId('add-to-cart-button')).toBeEnabled()
})