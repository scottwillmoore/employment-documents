import type { FunctionComponent, PropsWithChildren } from "react";

export type PageProps = PropsWithChildren;

export const Page: FunctionComponent<PageProps> = ({ children }) => {
	return <div className="page">{children}</div>;
};

export const Container: FunctionComponent = () => {
	return (
		<div className="container">
			<Page>
				<p>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem nesciunt doloremque
					repellat ipsa? Atque nisi rem et, nemo illum minima reiciendis, animi, laborum quaerat
					mollitia nam voluptates error reprehenderit fugit.
				</p>
			</Page>
			<Page></Page>
		</div>
	);
};
