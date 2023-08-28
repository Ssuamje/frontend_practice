<script lang="ts">
    export let text = 'Hello World!';
    export let placeholder = "Input Here";
    export let inputValue = "";
    export let handleEnterPress = () => {
    };
</script>

<input bind:value={inputValue} on:keypress={
              (event) => {
                if (event.key === "Enter") {
                     handleEnterPress();
                }
              }
       }
       placeholder={placeholder}
>

<style>
    input {
        width: 50%;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
        font-size: 16px;
        box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
    }
</style>