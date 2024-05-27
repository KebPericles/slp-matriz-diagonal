<script lang="ts">
	import {
		activeDepartment,
		activeDepartment2,
		relationFocus,
		relationFocusOff
	} from '$lib/stores';

	export let final = false;
	export let inicial = false;
	export let department: { id: number; name: string };

	let border_top = inicial ? 'border-t-2' : 'border-t-[1px]';
	let border_bottom = final ? 'border-b-2' : 'border-b-[1px]';

	let background: string;

	// Emphasis for the active department
	$: {
		if ($relationFocus) {
			background =
				department.id === $activeDepartment || department.id === $activeDepartment2
					? 'bg-blue-500'
					: 'bg-blue-900';
		} else {
			background = department.id === $activeDepartment ? 'bg-blue-500' : 'bg-blue-900';
		}
	}

	function handleFocus() {
		relationFocusOff();
		activeDepartment.set(department.id);
		activeDepartment2.set(-1);
	}
</script>

<li
	on:mouseover={handleFocus}
	on:focus={handleFocus}
	class="relative m-0 flex h-20 items-center justify-center border-2 {background} p-3 {border_top} border-r-0 {border_bottom} border-blue-200"
>
	<div
		class="absolute -right-[2.4rem] bottom-0 top-0 -z-10 aspect-square rotate-45 scale-[.745] {background}"
	></div>
	{department.id}
	{department.name}
</li>
