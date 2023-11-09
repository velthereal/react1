import './NavigationItem.css';

const NavigationItem = (props) => {
	const { text, isUpperCaseText, description, shouldRenderDescription } = props;
	// let textToRender;

	const descriptionSection = (
		<div className="description">
			{description}
		</div>
	);
	
	return (
		<div className="common">
			<div className="text">
				{isUpperCaseText ? text.toUpperCase() : text}
			</div>
			{descriptionSection && descriptionSection}
		</div>
	)
}

export default NavigationItem;