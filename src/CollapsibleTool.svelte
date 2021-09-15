<script>
  import C_Table from './Table.svelte';
  export let title;
  export let table_data;
  export let data_cy;
</script>

<div class="collapsible-header" data-cy={data_cy}>{title}</div>
<div class="collapsible-body">
    <C_Table data_cy={data_cy + '_table'} data={table_data}/>
</div>