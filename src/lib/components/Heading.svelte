<script>

	import { styleToString, withMargin } from '$lib/utils';

	export let style = {};
	let className = undefined;
	export { className as class };
	export let as = 'h1';
</script>

<svelte:element
	this={as}
	style={styleToString({
		...withMargin({
			m: $$props.m,
			mx: $$props.mx,
			my: $$props.my,
			mt: $$props.mt,
			mr: $$props.mr,
			mb: $$props.mb,
			ml: $$props.ml
		}),
		...style
	})}
	class={className}
	{...$$restProps}
>
	<slot />
</svelte:element>
