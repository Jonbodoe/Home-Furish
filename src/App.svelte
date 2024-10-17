<script>
  import "./app.css";
  import LinkSolid from "./assets/svgs/LinkSolid.svelte";
  import Footer from "./lib/Footer.svelte";
  import Dialog from "./lib/common/Dialog.svelte";
  import {
    ADD_PRODUCT_MODE,
    EDIT_MODE,
    dataArray,
  } from "./lib/helpers/constants";

  let dialog;
  let productList = dataArray;
  let mode = null;
  // TODO: try setting this to a store
  $: selectedProduct = null;

  $: changeEditMode = () => (mode = EDIT_MODE);
  $: changeAddProductMode = () => (mode = ADD_PRODUCT_MODE);
  $: changeSelectedProduct = (selectedId) =>
    (selectedProduct = productList.find(({ id }) => id === selectedId));
  // (selectedProduct = productList.find(({ id }) => id === selectedId));
</script>

<Dialog bind:dialog {mode} {selectedProduct} />
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
        class="bg-emerald-600 border-4 border-emerald-700 py-2 px-5 rounded-lg font-medium text-slate-50 focus:bg-slate-50 focus:text-slate-500 active:bg-emerald-800 focus:border-4 focus:border-emerald-600"
        on:click={() => {
          dialog.showModal();
          changeAddProductMode();
        }}
      >
        Add Product
      </button>
    </div>
  </div>
</header>
<main class="p-6">
  <div class="grid grid-cols-2 gap-4">
    {#each productList as { name, hyperlink, image, priority, furnitureType, roomSpace, purchaseLocation, total, colorWay, brand, quantity, id } (id)}
      <div
        class="bg-slate-100 rounded-lg flex border-4 border-slate-300 h-full items-center"
      >
        <div class="w-1/2 border-r-4 border-slate-300">
          <img class="w-100 h-auto" src={image} alt={furnitureType} />
        </div>
        <div class="w-1/2 p-6">
          <div class="pb-4">
            <div class="flex justify-between items-center">
              <div>
                <div class="flex justify-start items-center">
                  <h2 class="font-bold text-lg">
                    {`${name} ${furnitureType}`}
                  </h2>
                  <a href={hyperlink} target="_blank" class="pl-3">
                    <LinkSolid />
                  </a>
                </div>
                <p class="text-slate-600 text-sm">{purchaseLocation}</p>
              </div>

              <button
                on:click={() => {
                  dialog.showModal();
                  changeEditMode();
                  changeSelectedProduct(id);
                }}
                class="font-light text-slate-700 text-sm flex justify-between px-2 py-1 border-4 border-slate-300 rounded-lg focus:border-emerald-600 active:border-emerald-800"
              >
                Edit
              </button>
            </div>
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
