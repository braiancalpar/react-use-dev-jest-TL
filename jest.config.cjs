module.exports = {
	testEnvironment: "node",
	transform: {
		"^.+\\.(ts|tsx)$": "<rootDir>/jest.transform.cjs",
	},
	moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json"],
};
