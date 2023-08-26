<script lang="ts">
    import { onMount } from 'svelte';
    import { name } from "./stores";

    onMount(() => {
        $name = '상제';
        console.log(`${$name} ㅎㅇ`);
    });

    let userInput = '';

    function updateName() {
        $name = userInput;
    }

</script>

<h1>안녕! {$name}</h1>
<input bind:value={userInput} placeholder="이름">
<button on:click={updateName}></button>
