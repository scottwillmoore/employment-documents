import { createRoot } from "react-dom/client";

import { View } from "./components/View";
import { Letter } from "./layouts/Letter";

const rootElement = document.getElementById("root");
if (rootElement === null) {
	throw new Error("Failed to get the root element.");
}

const root = createRoot(rootElement);

root.render(
	<View>
		<Letter />
	</View>,
);
