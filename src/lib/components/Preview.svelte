<script>
	import { styleToString } from '$lib/utils';

	export let preview = '';

	const renderWhiteSpace = (text) => {
		const whiteSpaceCodes = '\xa0\u200C\u200B\u200D\u200E\u200F\uFEFF';
		return whiteSpaceCodes.repeat(150 - text.length);
	};
</script>

<div
	id="__svelte-email-preview"
	style={styleToString({
		display: 'none',
		overflow: 'hidden',
		lineHeight: '1px',
		opacity: 0,
		maxHeight: 0,
		maxWidth: 0
	})}
	{...$$restProps}
>
	{preview}
	<div>
		{renderWhiteSpace(preview)}
	</div>
</div>
