<script>
	import { styleToString } from '$lib/utils';

	export let style = {};
	let className = undefined;
	export { className as class };

	const styleDefault = {
		width: '100%',
		border: 'none',
		borderTop: '1px solid #eaeaea',
		...style
	};
</script>

<hr style={styleToString(styleDefault)} {...$$restProps} class={className}/>
