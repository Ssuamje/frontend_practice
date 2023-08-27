<script lang="ts">
    export let text = "Button";
    export let bg_color = "#007BFF";
    export let hover_bg_color = "#0056b3";
</script>

<button style="--bg-color: {bg_color}; --hover-bg-color: {hover_bg_color}">
    {text}
</button>


<style>
    button {
        font-size: 1.5em;
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


