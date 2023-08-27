<script lang="ts">
    import {calculatedNumber} from "./stores";

    calculatedNumber.subscribe(value => {
        console.log(value);
    });

</script>

<h1>계산기</h1>
<h2>{$calculatedNumber}</h2>
<button on:click={calculatedNumber.increment}>+</button>
<button on:click={calculatedNumber.decrement}>-</button>
<button on:click={calculatedNumber.double}>double</button>
<button on:click={calculatedNumber.half}>half</button>
<button on:click={calculatedNumber.reset}>reset</button>
