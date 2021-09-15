<script>
  import C_CollapsibleTool from './CollapsibleTool.svelte';
  import {data_manual} from './manual.js';
  import {data_pentesting} from './pentesting.js';
  import {data_stress} from './stress.js';
  import {data_api} from './api.js';
  import {data_ada} from './ada.js'

  const data = [
    {
      "title": "Manual",
      "data": data_manual
    },
    {
      "title": "API Testing",
      "data": data_api
    },
    {
      "title": "Stress Testing",
      "data": data_stress
    },
    {
      "title": "Pentesting",
      "data": data_pentesting
    },
    {
      "title": "ADA Testing",
      "data": data_ada
    }
  ];
</script>

<div class="container">
  <ul class = "collapsible">
    {#each data as item}
      <li>
        <C_CollapsibleTool data_cy={item.title} title={item.title} table_data={item.data}/>
      </li>
    {/each}
  </ul>
</div>
