<script>
  export let label;
  export let menuItems;
</script>

<!-- <form class="max-w-sm mx-auto"> -->
<select
  id={label}
  class="border-4 border-slate-300 bg-slate-50 text-slate-700 text-sm rounded-lg focus:ring-emerald-600 focus:border-emerald-600 active:border-emerald-800 block w-full p-2.5"
>
  <option selected disabled>Choose a {label}</option>
  {#each menuItems as { name, id } (id)}
    <option value={name}>{name}</option>
  {/each}
</select>
<!-- </form> -->
