<script lang="ts">
    export let text = "Button";
    export let disabled = false;
    export let backgroundColor = "#007BFF";
    export let hoverBackgroundColor = "#0056b3";
    export let handleClick = () => {};
</script>

<button style="--bg-color: {backgroundColor}; --hover-bg-color: {hoverBackgroundColor}"
on:click={() => handleClick()}>
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

    button[disabled] {
        /* 여기에 비활성화된 버튼에 대한 스타일을 추가하세요. 예: */
        background-color: #ccc;
        cursor: not-allowed;
    }
</style>


