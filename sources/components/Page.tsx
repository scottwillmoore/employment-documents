import type { FunctionComponent, PropsWithChildren } from "react";

export const Page: FunctionComponent<PropsWithChildren> = ({ children }) => {
	return <section className="page">{children}</section>;
};
