import { convert } from 'html-to-text';
import pretty from 'pretty';
// import { render } from 'svelte';

export const htmlRender = ({
	template,
	props,
	options
}) => {
	const { html } = template.render(props);
		
	if (options?.plainText) {
		return renderAsPlainText(html);
	}
	const doctype =
		'<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">';
	const markup = html;
	const document = `${doctype}${markup}`;
	if (options?.pretty) {
		return pretty(document);
	}
	return document;
};

const renderAsPlainText = (markup) => {
	return convert(markup, {
		selectors: [
			{ selector: 'img', format: 'skip' },
			{ selector: '#__svelte-email-preview', format: 'skip' }
		]
	});
};
