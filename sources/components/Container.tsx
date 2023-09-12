import type { FunctionComponent, PropsWithChildren } from "react";

export const Container: FunctionComponent<PropsWithChildren> = ({ children }) => {
	return <main className="container">{children}</main>;
};
