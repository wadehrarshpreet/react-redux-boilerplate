import React from "react";
import { Link } from "react-router-dom";

const NAVITEMS = [
	{
		id: "home",
		label: "Home",
		path: "/"
	},
	{
		id: "about",
		label: "About",
		path: "/about"
	},
	{
		id: "contact",
		label: "Contact",
		path: "/contact"
	}
];
export class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		let active = this.props.active;
		return (
			<nav className='navbar navbar-expand-lg navbar-light bg-dark mb-3'>
				<button
					className='navbar-toggler'
					type='button'
					data-toggle='collapse'
					data-target='#demo-navbar'
					aria-controls='demo-navbar'
					aria-expanded='false'
					aria-label='Toggle navigation'
				>
					<span className='navbar-toggler-icon' />
				</button>

				<div className='collapse navbar-collapse' id='demo-navbar'>
					<ul className='navbar-nav mr-auto'>
						{NAVITEMS.map(item => (
							<li className={`nav-item ${item.id === active ? "active" : ""}`}>
								<Link className='nav-link text-light' to={item.path}>
									{item.label}
								</Link>
							</li>
						))}
					</ul>
				</div>
			</nav>
		);
	}
}
