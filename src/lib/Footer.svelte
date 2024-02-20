<script>
  import Dropdown from "./common/Dropdown.svelte";
  import { locationList, priorityList, roomList } from "./helpers/constants";
</script>

<footer
  class="bg-slate-100 p-6 border-t-4 border-slate-300 fixed bottom-0 w-screen"
>
  <div class="flex justify-between items-center">
    <div class="flex gap-4">
      <Dropdown label="Priority Level" menuItems={priorityList} />
      <Dropdown label="Room Space" menuItems={roomList} />
      <Dropdown label="Location" menuItems={locationList} />
    </div>
    <h3 class="text-3xl font-extrabold">$3000</h3>
  </div>
</footer>
