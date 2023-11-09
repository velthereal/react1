import './Header.css';
import NavigationItem from "../NavigationItem";

const Header = () => {
	const navElements = [
		{
			text: 'First',
			isUpperCaseText: true,
			description: "some description",
		},
		{
			text: 'Second',
			isUpperCaseText: true,
			description: "some description",
		},
		{
			text: 'Third',
			isUpperCaseText: true,
			description: "some description",
		},
	];

	return(
		<div className="common-header">
			{
				navElements.map((element) => {
					return (
						<NavigationItem
							key={element.text}
							text={element.text}
							isUpperCaseText={element.isUpperCaseText}
							description={element.description}/>
					)
				})
			}
			{/* <NavigationItem 
				text='main' 
				isUpperCaseText={true}
				description="some description"
				shouldRenderDescription={true} />
			<NavigationItem 
				text='second' 
				isUpperCaseText={false}
				description="second description" />
			<NavigationItem 
				text='third' 
				isUpperCaseText={false}
				description="third description"
				shouldRenderDescription={true}  />
			<NavigationItem text='navigation' isUpperCaseText={true} />
			<NavigationItem text='menu' isUpperCaseText={true} />
			<NavigationItem text='etc' isUpperCaseText={true} /> */}
		</div>
	);
}
export default Header;