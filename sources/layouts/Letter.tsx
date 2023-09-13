import type { FunctionComponent } from "react";

import { Logo } from "../components/Logo";
import { Page } from "../components/Page";

export const Header: FunctionComponent = () => {
	return (
		<header className="header">
			<div className="topRow">
				<Logo />
				<div className="a">
					<span className="name">Scott Moore</span>
					<span className="profession">Software Engineer</span>
				</div>
			</div>
			<ul className="bottomRow">
				<li>
					<div className="icon">I</div>
					<span>abc</span>
				</li>
				<li>
					<div className="icon">I</div>
					<span>abc</span>
				</li>
			</ul>
			<p className="description"></p>
		</header>
	);
};

export const Letter: FunctionComponent = () => {
	return (
		<Page>
			<Header />
			<p>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem nesciunt doloremque
				repellat ipsa? Atque nisi rem et, nemo illum minima reiciendis, animi, laborum quaerat
				mollitia nam voluptates error reprehenderit fugit.
			</p>
		</Page>
	);
};
