<script lang="ts">
    export let text = 'Hello World!';
    export let placeholder = "Input Here";
    export let inputValue = "";
    export let handleEnterPress = () => {};
</script>

<input placeholder={placeholder} bind:value={inputValue}
       on:keydown={
              (event) => {
                if (event.key === "Enter") {
                     handleEnterPress();
                }
              }
       }
>

<style>
    input {
        width: 50%;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
        font-size: 16px;
    }
</style>