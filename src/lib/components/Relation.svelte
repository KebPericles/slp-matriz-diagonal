<script lang="ts">
	import { activeDepartment, activeDepartment2, relationFocus, relationFocusOn } from '$lib/stores';
	import { type RelationType } from '$lib/types';

	export let department1: number;
	export let department2: number;
	export let relation: RelationType;

	let proximidad = relation.proximidad;
	let razon = relation.razon;

	let background: string;

	$: {
		if ($relationFocus) {
			background =
				department1 === $activeDepartment || department2 === $activeDepartment2
					? 'bg-red-500'
					: 'bg-red-900';
		} else {
			background =
				department1 === $activeDepartment || department2 === $activeDepartment
					? 'bg-red-500'
					: 'bg-red-900';
		}
	}

	function handleFocus() {
		relationFocusOn();
		activeDepartment.set(department1);
		activeDepartment2.set(department2);
	}
</script>

<li
	id="relation-{department1}-{department2}"
	class="relative flex aspect-square h-20 w-6 flex-col items-center justify-evenly pl-10"
>
	<div
		class="absolute bottom-0 left-0 top-0 -z-10 aspect-square rotate-45 scale-[.707] {background}"
	></div>
	<div
		class="absolute -z-10 aspect-square rotate-45 scale-[.707] border-[2.5rem] border-b-red-200 border-l-transparent border-r-red-200 border-t-transparent"
	></div>
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div
		on:focus={handleFocus}
		on:mouseover={handleFocus}
		class="absolute bottom-0 left-0 top-0 z-10 aspect-square rotate-45 scale-[.707] bg-transparent"
	></div>
	<p class="z-20">{proximidad}</p>
	<p class="z-20 text-cyan-950">{razon}</p>
</li>

<style>
</style>
