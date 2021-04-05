module.exports = {
    title: "Friendly Router Project",
    description: "Collaborative Database, Documentation and Guides to configure Open-Source Friendly Switches, Routers and Firewalls. Designed to be easily shared with others.",
    head: [
        ['meta', { 'http-equiv': 'Content-Type', content: 'text/html', charset: 'utf8'}],
        
        ['link', { rel: 'icon', type: 'image/png', sizes: '128x128', href: '/images/switchy-128x128.png'}],
        ['link', { rel: 'icon', type: 'image/png', sizes: '150x150', href: '/images/switchy-150x150.png'}],
        ['link', { rel: 'icon', type: 'image/png', sizes: '200x200', href: '/images/switchy-200x200.png'}],
        ['link', { rel: 'icon', type: 'image/png', sizes: '500x500', href: '/images/switchy-500x500.png'}],
        ['link', { rel: 'icon', type: 'image/png', sizes: '1500x1500', href: '/images/switchy-1500x1500.png'}],
        ['link', { rel: 'shurtcut icon', href: '/favicon.ico'}],

        ['meta', { name: 'twitter:card', value: 'Friendly Router'}],
        ['meta', { name: 'twitter:site', value: 'https://friendly-router.org'}],
        ['meta', { name: 'twitter:title', value: 'Friendly Router Project'}],
        ['meta', { name: 'twitter:description', value: 'Collaborative Database, Documentation and Guides to configure Open-Source Friendly Switches, Routers and Firewalls. Designed to be easily shared with others.'}],
        ['meta', { name: 'twitter:creator', value: '@FriendlyRouter'}],
        ['meta', { name: 'twitter:image', value: 'https://friendly-router.org/images/switchy-200x200.png'}],

        ['meta', { property: 'og:site_name', content: 'Friendly Router Project'}],
        ['meta', { property: 'og:title', content: 'Friendly Router Project'}],
        ['meta', { property: 'og:type', content: 'website'}],
        ['meta', { property: 'og:url', content: 'https://friendly-router.org'}],
        ['meta', { property: 'og:image', content: 'https://friendly-router.org/images/switchy-200x200.png'}],
        ['meta', { property: 'og:description', content: 'Collaborative Database, Documentation and Guides to configure Open-Source Friendly Switches, Routers and Firewalls. Designed to be easily shared with others.'}]
    ],
    themeConfig: {
        logo: '/images/switchy.png',
        search: false,
        searchMaxSuggestions: 10,
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Devices', items: [
                { text: 'Database', link: '/database/' },
                { text: 'Switches', link: '/switches/' },
                { text: 'Routers', link: '/routers/' },
                { text: 'Firewalls', link: '/firewalls/' },
                { text: 'Resources', link: '/resources' },
                { text: 'Rules and Templates', link: '/_database/' }
            ]},
            { text: 'Community', items: [
                { text: 'Help', link: '/help' },
                { text: 'Contribute', link: '/contribute' },
                { text: 'Thanks', link: '/thanks' },
                { text: 'Mascot', link: '/mascot/' }
            ]},
            { text: 'Contacts', link: '/contacts' }
        ],
        nextLinks: true,
        prevLinks: true
    }
}
