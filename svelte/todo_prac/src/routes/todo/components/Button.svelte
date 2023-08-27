<script lang="ts">
    export let text = "Button";
    export let backgroundColor = "#007BFF";
    export let hoverBackgroundColor = "#0056b3";
    export let handleClick = () => {};
</script>

<button style="--bg-color: {backgroundColor}; --hover-bg-color: {hoverBackgroundColor}"
on:click={handleClick()}>
    {text}
</button>


<style>
    button {
        font-size: 1.0em;
        padding: 0.5em;
        margin: 0.5em;
        background-color: var(--bg-color);
        color: white;
        border: none;
        border-radius: 5px;
    }

    button:hover {
        background-color: var(--hover-bg-color);
    }
</style>


