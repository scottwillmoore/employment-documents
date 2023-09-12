import { createRoot } from "react-dom/client";

import { Container } from "./components/Container";
import { Letter } from "./layouts/Letter";

const rootElement = document.getElementById("root");
if (rootElement === null) {
	throw new Error("Failed to get the root element.");
}

const root = createRoot(rootElement);

root.render(
	<Container>
		<Letter />
	</Container>
);
