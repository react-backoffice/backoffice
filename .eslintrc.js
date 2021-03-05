module.exports = {
  parser: "@typescript-eslint/parser",
  extends: ["plugin:react/recommended", "plugin:prettier/recommended"],

  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    project: "./tsconfig.build.json",
    tsconfigRootDir: "./",
    ecmaFeatures: {
      jsx: true,
    },
  },

  rules: {
    "react/display-name": "off",
    "react/prop-types": "off",

    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-use-before-define": "off",

    // For the next couple of months ;)
    "@typescript-eslint/no-empty-function": "off",
  },

  settings: {
    react: {
      version: "detect",
    },
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
};
