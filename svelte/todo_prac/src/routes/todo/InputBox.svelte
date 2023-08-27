<script lang="ts">
    export let text = 'Hello World!';
    export let placeholder = "Input Here";
    export let inputValue = "";
</script>

<input placeholder={placeholder} bind:value={inputValue}>