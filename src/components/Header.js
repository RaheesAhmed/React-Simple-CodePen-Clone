import React from 'react';
import './Header.css';

const Header = () => {
	return (
		<nav class="navbar navbar-inverse">
			<div class="container-fluid">
				<div class=" navbar-brand">Untitled</div>

				<ul class="nav navbar-nav navbar-right">
					<li>
						<a href="#" className="buttonSave">
							<i class="fa fa-cloud" aria-hidden="true" /> Save
						</a>
					</li>
					<li>
						<a href="#" className="buttonSave">
							<i class="fa fa-cog" aria-hidden="true" /> Setting
						</a>
					</li>
					<li>
						<a href="#" className="buttonSave">
							<i class="fa fa-eye" aria-hidden="true" /> Change View
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Header;
