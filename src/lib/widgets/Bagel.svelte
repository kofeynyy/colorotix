<script>
    import { formatNumber } from "$lib";
    import Arcs from "$lib/d3/Arcs.svelte";
    import Widget from "$lib/breadcrumps/Widget.svelte";
    let { data: expenses_data } = $props();
    import { onMount } from "svelte";

    let data = Object.entries(expenses_data["2025"].expenses_structure).map(([category, value]) => ({
        category,
        value: value * 100
    }));

    let showTooltip = $state(false);
    let tooltipPosition = $state({ x: 0, y: 0 });

    function handleMouseOver(event) {
        showTooltip = true;
        tooltipPosition = {
            x: event.clientX,
            y: event.clientY
        };
    }

    function handleMouseOut() {
        showTooltip = false;
    }

    function handleMouseMove(event) {
        tooltipPosition = {
            x: event.clientX,
            y: event.clientY
        };
    }

    onMount(() => {
            })
</script>

<Widget style="flex-col text-white gap-4 pt-6">
    <p class="text-2xl font-semibold">Структура расходов</p>
    <Arcs data={data} color="category" value="value"/>
    <p 
        class="absolute inset-auto pt-[50px] text-white text-3xl font-bold cursor-pointer"
        onmouseover={handleMouseOver}
        onmouseout={handleMouseOut}
        onmousemove={handleMouseMove}
    >
        {formatNumber(expenses_data["2025"].all_expenses)}
    </p>
    
    {#if showTooltip}
        <div 
            class="fixed bg-gray-800 text-white px-2 py-1 rounded text-sm pointer-events-none"
            style={`left: ${tooltipPosition.x + 10}px; top: ${tooltipPosition.y + 10}px`}
        >
            {expenses_data["2025"].all_expenses.toLocaleString()}
        </div>
    {/if}
</Widget>

<style>
    div {
        background: rgba(0, 0, 0, 0.8);
		color: white;
		padding: 8px;
		border-radius: 4px;
		pointer-events: none;
		z-index: 10;
    }
</style>