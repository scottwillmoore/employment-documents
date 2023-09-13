import type { FunctionComponent, PropsWithChildren } from "react";

import styles from "./View.module.css";

export const View: FunctionComponent<PropsWithChildren> = ({ children }) => {
	return <main className={styles.view}>{children}</main>;
};
