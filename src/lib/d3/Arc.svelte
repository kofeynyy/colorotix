<script lang="ts">
	import { arc } from 'd3-shape';


	let {
		innerRadius = 0,
		outerRadius = 0,
		startAngle = 0,
		endAngle = 0,
		cornerRadius = 0,
		padAngle = 0,
		fill = 'black',
		stroke = 'black',
		style = '',
        index = 0,
	
		onmouseover = (event: MouseEvent) => {},
		onmousemove = (event: MouseEvent) => {},
		onmouseout = (event: MouseEvent) => {}
	} = $props<{
		innerRadius?: number;
		outerRadius?: number;
		startAngle?: number;
		endAngle?: number;
		cornerRadius?: number;
		padAngle?: number;
		fill?: string;
		stroke?: string;
		style?: string;
		onmouseover?: (event: MouseEvent) => void;
		onmousemove?: (event: MouseEvent) => void;
		onmouseout?: (event: MouseEvent) => void;
	}>();


	let path = $derived(
		arc()
			.innerRadius(innerRadius)
			.outerRadius(outerRadius)
			.startAngle(startAngle)
			.endAngle(endAngle)
			.cornerRadius(cornerRadius)
			.padAngle(padAngle)
	);
</script>

{#if path}
	<path
		class="Arc"
		d={path()}
		{fill}
		{stroke}
		{style}
		onmouseover={onmouseover}
		onmousemove={onmousemove}
		onmouseout={onmouseout}
	/>
{/if}

<style>
	
	:global(.Arc) {
		transition: opacity 0.2s;
	}
	:global(.Arc:hover) {
		opacity: 0.8;
	}
</style>