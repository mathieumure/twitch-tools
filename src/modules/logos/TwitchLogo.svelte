<script lang="ts">
  export let height: number;
  export let width: number;
  export let color: string;
</script>

<svg {height} {width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...$$props}>
  <path
    fill={color}
    d="M48,0L16,96v352h128v64h64l64-64h96l128-136.32V0H48z M464,288l-89.6,96H260.928L192,434.144V384H80V32h384V288z"
  />
  <rect x="240" y="128" fill={color} width="32" height="128" />
  <rect x="336" y="128" fill={color} width="32" height="128" />
</svg>
