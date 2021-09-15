<script>
  import C_Row from './Row.svelte';
  export let data;
  export let data_cy;
</script>

<main>
  
  <table data-cy={data_cy} class="centered" >
    
    <thead>
      <tr>
        <th>Tool</th>
        <th>State</th>
        <th>Info</th>
      </tr>
    </thead>

    <tbody>
      {#each data as d}
        <C_Row {...d}/>
      {/each}
    </tbody>

  
  </table>
</main>
