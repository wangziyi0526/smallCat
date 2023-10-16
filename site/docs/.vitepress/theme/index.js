import Theme from "vitepress/theme";
import SmallCat from "small-cat-ui";
export default {
    ...Theme,
    enhanceApp: async ({ app }) => {
        app.use(SmallCat);
    },
};
