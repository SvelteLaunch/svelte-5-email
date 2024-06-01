<script>
	import { pxToPt, styleToString } from '$lib/utils';

	export let href = '';
	export let style = {};
	let className = undefined;
	export { className as class };
	export let pX = 0;
	export let pY = 0;
	export let target = '_blank';

	const y = pY * 2;
	const textRaise = pxToPt(y.toString());

	const buttonStyle = (style) => {
		const paddingY = style?.pY || 0;
		const paddingX = style?.pX || 0;

		return {
			...style,
			lineHeight: '100%',
			textDecoration: 'none',
			display: 'inline-block',
			maxWidth: '100%',
			padding: `${paddingY}px ${paddingX}px`
		};
	};

	const buttonTextStyle = (
		style
	) => {
		const paddingY = style?.pY || 0;

		return {
			...style,
			maxWidth: '100%',
			display: 'inline-block',
			lineHeight: '120%',
			textDecoration: 'none',
			textTransform: 'none' as const,
			msoPaddingAlt: '0px',
			msoTextRaise: pxToPt(paddingY.toString())
		};
	};
</script>

<a {...$$restProps} {href} {target} style={styleToString(buttonStyle({ ...style, pX, pY }))} class={className}>
	<span>
		{@html `<!--[if mso]><i style="letter-spacing: ${pX}px;mso-font-width:-100%;mso-text-raise:${textRaise}" hidden>&nbsp;</i><![endif]-->`}
	</span>
	<span style={styleToString(buttonTextStyle({ ...style, pX, pY }))}>
		<slot />
	</span>
	<span>
		{@html `<!--[if mso]><i style="letter-spacing: ${pX}px;mso-font-width:-100%" hidden>&nbsp;</i><![endif]-->`}
	</span>
</a>
