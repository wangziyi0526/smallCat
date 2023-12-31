export default {
    themeConfig: {
        siteTitle: 'SmallCat',
        nav: [
            { text: "指南", link: "/guild/installation" },
            { text: "组件", link: "/components/button/" },
        ],
        sidebar: {
            "/guild/": [
                {
                    text: "基础",
                    items: [
                        {
                            text: "安装",
                            link: "/guild/installation",
                        },
                        {
                            text: "快速开始",
                            link: "/guild/quickstart",
                        },
                    ],
                },
                {
                    text: "进阶",
                    items: [
                        {
                            text: "xx",
                            link: "/xx",
                        },
                    ],
                },
            ],
            "/components/": [
                {
                    text: "基础组件",
                    items: [
                        {
                            text: "Button",
                            link: "/components/button/",
                        },
                        {
                            text: "Loading",
                            link: "/components/loading/",
                        }
                    ],
                }
            ]
        },
        socialLinks: [
            { icon: "github", link: "https://github.com/wangziyi0526/smallCat" },
        ],
        footer: {
            message: '花有重开日, 人无再少年',
            copyright: 'keep moving...'
        }
    },
};
