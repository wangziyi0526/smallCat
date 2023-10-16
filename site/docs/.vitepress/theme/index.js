import DefaultTheme from "vitepress/theme";
import SmallCat from "small-cat-ui";
export default {
    ...DefaultTheme,
    enhanceApp: async ({ app }) => {
        app.use(SmallCat);
    },
};
