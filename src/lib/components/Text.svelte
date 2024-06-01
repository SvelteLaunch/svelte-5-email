<script lang="ts">

	import { styleToString } from '$lib/utils';

	export let style = {};
	let className = undefined;
	export { className as class };

	const styleDefault = {
		fontSize: '14px',
		lineHeight: '24px',
		margin: '16px 0',
		...style
	};
</script>

<p style={styleToString(styleDefault)} {...$$restProps} class={className}>
	<slot />
</p>
