<script lang="ts">
  export let Component;
  export let topContent: string = undefined;
  export let bottomContent: string = undefined;
</script>

<svelte:component this={Component}><p slot="top">{topContent}</p><p slot="bottom">{bottomContent}</p></svelte:component>
