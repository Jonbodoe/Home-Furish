<script>
  export let type;
  export let name;
  export let value = null;
  export let placeholder;
</script>

<input
  class="border-4 border-slate-300 bg-slate-50 text-slate-700 text-sm rounded-lg focus:ring-emerald-600 focus:border-emerald-600 active:border-emerald-800 block w-full p-2.5"
  {type}
  id={name}
  {value}
  {name}
  {placeholder}
/>
