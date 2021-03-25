module.exports = {
    title: "Friendly Router Project",
    description: "Database and Guides to configuration Open-Source Friendly switches, routers and firewalls",
    head: [],
    themeConfig: {
        logo: '/images/switchy.png',
        search: false,
        searchMaxSuggestions: 10,
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Database', link: '/database/' },
            { text: 'Switches', link: '/switches/' },
            { text: 'Routers', link: '/routers/' },
            { text: 'Firewalls', link: '/firewalls/' },
            { text: 'Mascot', link: '/mascot/' },
            { text: 'Contacts', link: '/contacts' }
        ],
        nextLinks: true,
        prevLinks: true
    }
}
