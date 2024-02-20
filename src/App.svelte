<script>
  import "./app.css";
  import Footer from "./lib/Footer.svelte";
  import { dataArray } from "./lib/helpers/constants";
</script>

<header class="px-6 pt-6 w-screen">
  <div class="flex flex-row justify-between items-center">
    <div>
      <h1 class="font-bold text-xl">Home Furish Supplies</h1>
      <label class="inline-flex items-center py-1 cursor-pointer">
        <span class="me-3 text-sm font-medium text-slate-600"> In-Person </span>
        <input type="checkbox" value="" class="sr-only peer" checked />
        <div
          class="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-slate-700 peer-focus:ring-4 peer-focus:ring-slate-300 dark:peer-focus:ring-slate-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-slate-600 peer-checked:bg-emerald-600"
        ></div>
        <span class="ms-3 text-sm font-medium text-slate-600"> Online </span>
      </label>
    </div>
    <div>
      <button
        class="bg-emerald-600 py-2 px-5 rounded-lg font-medium text-slate-100"
      >
        Add Product
      </button>
    </div>
  </div>
</header>
<main class="p-6">
  <div class="grid grid-cols-2 gap-4">
    {#each dataArray as { name, image, priority, furnitureType, roomSpace, purchaseLocation, total, colorWay, brand, quantity }}
      <div
        class="bg-slate-100 rounded-lg flex border-4 border-slate-300 h-full items-center"
      >
        <div class="w-1/2 border-r-4 border-slate-300">
          <img class="w-100 h-auto" src={image} alt={furnitureType} />
        </div>
        <div class="w-1/2 p-6">
          <div class="pb-4">
            <h2 class="font-bold text-lg">{`${name} ${furnitureType}`}</h2>
            <p class="text-slate-600 text-sm">{purchaseLocation}</p>
          </div>
          <div class="grid grid-cols-2 gap-2">
            <div>
              <p class="font-light text-slate-700 text-sm">Brand:</p>
              <p class="font-light text-slate-700 text-sm">Furniture:</p>
              <p class="font-light text-slate-700 text-sm">Room Space:</p>
              <p class="font-light text-slate-700 text-sm">Priority:</p>
              <p class="font-light text-slate-700 text-sm">Quantity:</p>
            </div>
            <div>
              <p class="font-medium text-sm">{brand}</p>
              <p class="font-medium text-sm">{furnitureType}</p>
              <p class="font-medium text-sm">{roomSpace}</p>
              <p class="font-medium text-sm">{priority}</p>
              <p class="font-medium text-sm">{quantity}</p>
              <div class="pt-4">
                <p class="font-light text-slate-700 text-sm">Approx. Total:</p>
                <h3 class="text-2xl font-extrabold">{`$${total}`}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    {/each}
  </div>
</main>
<Footer />

<style>
</style>
