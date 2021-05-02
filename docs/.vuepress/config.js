module.exports = {
    title: "Friendly Router Project",
    description: "",
    head: [
        ['meta', { 'http-equiv': 'Content-Type', content: 'text/html', charset: 'utf8'}],
        ['meta', { 'name': 'viewport', content: 'width=device-width, initial-scale=1'}],
        ['meta', { 'name': 'description', content: 'Collaborative Database, Documentation and Guides to configure Open-Source Friendly Switches, Routers and Firewalls. Designed to be easily shared with others.'}],
        ['meta', { 'name': 'keywords', content: 'database, router, routers, switch, switches, firewall, opensource, open-source, linux, unix, bsd, friendly, collaborative'}],

        ['meta', { 'name': 'twitter:card', content: 'summary'}],
        ['meta', { 'name': 'twitter:site', content: '@FriendlyRouter'}],
        ['meta', { 'name': 'twitter:image', content: 'https://friendly-router.org/images/switchy-200x200.png'}],
        ['meta', { 'name': 'twitter:image:alt', content: 'Switchy, our awesome mascot!'}],
        ['meta', { 'name': 'twitter:creator', content: '@FriendlyRouter'}],
        ['meta', { 'name': 'twitter:creator:id', content: '@FriendlyRouter'}],
        
        ['meta', { 'property': 'og:image', content: 'https://friendly-router.org/images/switchy-200x200.png'}],
        ['meta', { 'property': 'og:image:width', content: '200'}],
        ['meta', { 'property': 'og:image:height', content: '200'}],
        ['meta', { 'property': 'og:type', content: 'website'}],
        ['meta', { 'property': 'og:locale', content: 'en_US'}],
        
        ['link', { rel: 'icon', type: 'image/png', sizes: '128x128', href: '/images/switchy-128x128.png'}],
        ['link', { rel: 'icon', type: 'image/png', sizes: '150x150', href: '/images/switchy-150x150.png'}],
        ['link', { rel: 'icon', type: 'image/png', sizes: '200x200', href: '/images/switchy-200x200.png'}],
        ['link', { rel: 'icon', type: 'image/png', sizes: '500x500', href: '/images/switchy-500x500.png'}],
        ['link', { rel: 'icon', type: 'image/png', sizes: '1500x1500', href: '/images/switchy-1500x1500.png'}],
        ['link', { rel: 'shurtcut icon', href: '/favicon.ico'}]
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
    },
    plugins: {
        'sitemap': {
            hostname: 'https://friendly-router.org'
        }
    }
}
