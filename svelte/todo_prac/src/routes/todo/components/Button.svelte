<script lang="ts">
    export let text = "Button";
    export let disabled = false;
    export let backgroundColor = "";
    export let hoverBackgroundColor = "";
    export let disabledColor = "";
    export let handleClick = () => {
    };
    $: buttonStyle = disabled
        ? 'button button-disabled'
        : "button";
</script>

<button class={buttonStyle}
        on:click={() => handleClick()}>
    {disabled ? "Disabled" : text}
</button>

<style>
    .button {
        font-size: 1.0em;
        padding: 0.5em;
        margin: 0.5em;
        background-color: var(--bg-color, #007BFF);
        color: white;
        border: none;
        border-radius: 5px;
    }

    .button:hover {
        background-color: var(--hover-bg-color, #0056b3);
    }

    .button-disabled, .button-disabled:hover {
        background-color: var(--disabled-color, #6c757d);
        cursor: not-allowed;
    }
</style>


