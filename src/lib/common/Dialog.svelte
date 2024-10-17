<script>
  import HomeFurishLogo from "../../assets/svgs/HomeFurishLogo.svelte";
  import {
    ADD_PRODUCT_MODE,
    brandsList,
    locationList,
    priorityList,
    roomList,
  } from "../helpers/constants";
  import Dropdown from "./Dropdown.svelte";
  import InputText from "./InputText.svelte";

  export let dialog;
  export let mode;
  export let selectedProduct = {
    name: null,
    id: null,
    hyperlink: null,
    brand: null,
    colorWay: null,
    furnitureType: null,
    priority: null,
    purchaseLocation: null,
    quantity: null,
    roomSpace: null,
    total: null,
  };

  $: selectedProduct;

  let { name, id, hyperlink } = selectedProduct;

  // let { name, id, hyperlink } = selectedProduct;

  const isStepOneCompleted = false;

  $: setModalTitle = (mode) =>
    mode === ADD_PRODUCT_MODE ? "Add Product" : "Edit Product";

  $: console.log(selectedProduct, name, id, hyperlink, "YEA");
</script>

<dialog
  bind:this={dialog}
  on:close
  class="w-4/5 h-5/6 rounded-lg border-4 border-slate-300"
>
  <div class="flex justify-between flex-row h-full p-6">
    <div class="w-2/4 flex items-center">
      <div class="w-full">
        <h2 class="font-semibold text-lg pb-6">{setModalTitle(mode)}</h2>
        <div class="pr-6 input-container">
          {#if !isStepOneCompleted && mode === ADD_PRODUCT_MODE}
            <label for="homepage">Product Link:</label>
            <InputText type="url" placeholder="Add Product URL" name="url" />
          {:else}
            <InputText
              type="url"
              placeholder="Product URL"
              value={`${hyperlink}`}
              name="product-url"
            />
            <InputText
              type="text"
              placeholder="Product title"
              value={`${name}`}
              name="product-title"
            />
            <Dropdown label="Brand" menuItems={brandsList} />
            <Dropdown label="Priority Level" menuItems={priorityList} />
            <Dropdown label="Room Space" menuItems={roomList} />
            <Dropdown label="Location" menuItems={locationList} />
          {/if}
          <div class="pt-12 flex justify-between">
            <button
              class="bg-emerald-600 border-4 border-emerald-700 py-2 px-5 rounded-lg font-medium text-slate-50 focus:bg-slate-50 focus:text-slate-500 active:bg-emerald-800 focus:border-4 focus:border-emerald-600"
              on:click={() => dialog.close()}>Save</button
            >
            <button
              class="font-medium text-slate-700 text-sm flex justify-between py-2 px-5 border-4 border-slate-300 rounded-lg focus:border-emerald-600 active:border-emerald-800"
              on:click={() => dialog.close()}>Close</button
            >
          </div>
        </div>
      </div>
    </div>
    <div
      class="w-2/4 bg-emerald-600 rounded-lg border-4 border-emerald-700 h-auto"
    >
      <div class="flex justify-center items-center h-full">
        <div>
          <div class="w-44">
            <HomeFurishLogo />
          </div>
          <p class="text-slate-200 pt-10 text-center font-medium">
            Add a product
          </p>
        </div>
      </div>
    </div>
  </div>
</dialog>
