<script>
  export let label;
  export let menuItems;
</script>

<form class="max-w-sm mx-auto">
  <select
    id={label}
    class="border-4 border-slate-300 bg-slate-50 text-slate-700 text-sm rounded-lg focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5"
  >
    <option selected disabled>Choose a {label}</option>
    {#each menuItems as { name }}
      <option value={name}>{name}</option>
    {/each}
  </select>
</form>
