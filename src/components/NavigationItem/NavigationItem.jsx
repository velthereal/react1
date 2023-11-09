const NavigationItem = (props) => {
	const { text, isUpperCaseText } = props;
	let textToRender;
	if(isUpperCaseText) {
		textToRender = text.toUpperCase();
	}
	else {
		textToRender = text;
	}
	return (
		<div>{ textToRender }</div>
	)
}

export default NavigationItem;