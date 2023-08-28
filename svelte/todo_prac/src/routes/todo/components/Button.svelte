<script lang="ts">
    export let normalText = "Button";
    export let disabledText = "Disabled";
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
    {disabled ? disabledText : normalText}
</button>

<style>
    .button {
        width: 50%;
        font-size: 1.0em;
        padding: 0.5em;
        margin: 0.5em;
        background-color: var(--bg-color, #007BFF);
        color: white;
        border: none;
        border-radius: 5px;
        box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
    }

    .button:hover {
        background-color: var(--hover-bg-color, #0056b3);
    }

    .button-disabled, .button-disabled:hover {
        background-color: var(--disabled-color, #6c757d);
        cursor: not-allowed;
    }
</style>


