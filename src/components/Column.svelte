<script>
	import { styleToString } from '$lib/utils';

	export let style = {};
	let className = undefined;
	export { className as class };

	const styleDefault = {
		display: 'inline-flex',
		justifyContent: 'center',
		alignItems: 'center',
		...style
	};
</script>

<td style={styleToString(styleDefault)} role="presentation" {...$$restProps} class={className}>
	<slot />
</td>
