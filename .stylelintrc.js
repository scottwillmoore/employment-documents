const { propertyGroups } = require("stylelint-config-clean-order");

const propertiesOrder = propertyGroups.map((properties) => ({
	noEmptyLineBetween: true,
	emptyLineBefore: "never",
	properties,
}));

module.exports = {
	extends: ["stylelint-config-clean-order", "stylelint-config-standard"],
	rules: {
		"order/properties-order": [
			propertiesOrder,
			{
				severity: "warning",
				unspecified: "bottomAlphabetical",
			},
		],
	},
};
