//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\
import Logo from './assets/logo/logo.svg';
import { Widgets } from 'otrm';
import mdInfo from "./assets/md/info.md";

//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\
const Config = {
    // A version indicating the current terminal configuration revision
    version: 464,
    // The name of your organization
    organization: "DERC",
    // This will be displayed as top header
    name: "DERC Terminal",
    // A standard logo 
    logo: Logo,
    // A tagline
    tagline: "DeepSpace Exploration & Resources Community",
    // Options
    options: {
        time: true,
        date: true,
        rootNavigation: true,
        rootNavigationText: "ROOT",
    },
    // login
    login: {
        enabled: true,
        logo: true,
        tagline: true,
        action: "ENTER TERMINAL",
        actions: false,
    },
    // logout
    logout: {
        enabled: true,
        text: "Exit",
    },
    // Navigation
    navigation: {
        items: [
            {
                name: "Info",
                page: "info",
            },
        ]
    },
    // Pages
    pages: {
        root: {
            root: true,
            columns: [
                {
                    size: 4,
                    sections: [
                        [
                            {
                                title: "Actions",
                            },

                            {
                                action: "Discord",
                                open: "https://discord.gg/E5xZYwA9tE",
                            },
                            {
                                action: "Enroll",
                                open: "https://robertsspaceindustries.com/orgs/DERC",
                            },
                        
                        ],
                        [
                            {
                                title: "Resources"
                            },
                            {
                                action: "Ship Loadout Manager",
                                open: "https://erkul.games/",
                            },
                            {
                                action: "Trading Manager",
                                open: "https://uexcorp.space/trade",
                            },
                            {
                                action: "Mining Manager",
                                open: " https://uexcorp.space/mining",
                            },
                            {
                                action: "Become a Citizen",
                                open: "https://robertsspaceindustries.com/enlist?referral=STAR-ZNGN-MG6X",
                            },
                        ],
                    ]
                },
                {
                    size: 8,
                    centered: true,
                    noSectionPadding: true,
                    sections: [
                        [
                            {
                                widget: Widgets.Logo,
                            },
                        ]
                    ],
                }
            ]
        },
        info: {
            columns: [
                {
                    size: 4,
                    sections: [
                        [
                            {
                                title: "Links",
                            },
                            {
                                action: "YouTube",
                                open: "https://www.youtube.com/channel/UCfX413FlpCeIypiRyXJ9aDg",
                            },
                            {
                                action: "Resources",
                                open: "https://github.com/DERCHUB",
                            },
                        ],
                        [
                            {
                                autoplay: false,
                                widget: Widgets.Video,
                                video: "lkl56r0Ad2A",
                                //videos: ["lkl56r0Ad2A", "lkl56r0Ad2A", "lkl56r0Ad2A"]
                            },
                        ],
                        [
                            {
                                title: "About OTRM",
                            },
                            {
                                text: "DERC is proud to present OTRM. A well established alternative terminal system. Checkout the actions below to learn more."
                            },
                            {
                                action: "OTRM",
                                open: "https://github.com/DERCHUB/otrm",
                            },
                        ],
                    ]
                },
                {
                    size: 8,
                    sections: [
                        [
                            {
                                widget: Widgets.Markdown,
                                source: mdInfo,
                            },
                        ]
                    ],
                }
            ]
        },
    },

    // styles
    styles: {
        columnPadding: 5,
        columnBorderRadius: 10,
    }
}

//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\
export default Config;