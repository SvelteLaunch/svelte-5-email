<script>
	import { styleToString } from '$lib/utils';

	export let style = {};
	let className = undefined;
	export { className as class };
</script>

<body {...$$restProps} style={styleToString(style)} class={className} >
	<slot />
</body>
