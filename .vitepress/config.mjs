import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Tuist Handbook",
  titleTemplate: ":title | Tuist Handbook",
  description: "Tuist company handbook",
  srcDir: './handbook',
  sitemap: {
    hostname: "https://handbook.tuist.io",
  },
  head: [
    [
      "script",
      {},
      `
      !function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.async=!0,p.src=s.api_host.replace(".i.posthog.com","-assets.i.posthog.com")+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="capture identify alias people.set people.set_once set_config register register_once unregister opt_out_capturing has_opted_out_capturing opt_in_capturing reset isFeatureEnabled onFeatureFlags getFeatureFlag getFeatureFlagPayload reloadFeatureFlags group updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures getActiveMatchingSurveys getSurveys onSessionId".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
      posthog.init('phc_7yXHIZdYVfi66zcfV6RQzvCYsHneMcNVtjdbM4EurYg',{api_host:'https://eu.i.posthog.com'})
    `,
    ],
    [
      "script",
      {},
      `
      !function(t){if(window.ko)return;window.ko=[],["identify","track","removeListeners","open","on","off","qualify","ready"].forEach(function(t){ko[t]=function(){var n=[].slice.call(arguments);return n.unshift(t),ko.push(n),ko}});var n=document.createElement("script");n.async=!0,n.setAttribute("src","https://cdn.getkoala.com/v1/pk_3f80a3529ec2914b714a3f740d10b12642b9/sdk.js"),(document.body || document.head).appendChild(n)}();
    `,
    ],
  ],
  themeConfig: {
    editLink: {
      pattern: 'https://github.com/tuist/handbook/edit/main/:path'
    },
    logo: "/logo.png",
    search: {
      provider: "local",
    },
    nav: [
      { text: 'Home', link: '/' },
    ],

    sidebar: [
      {
        text: 'Company',
        items: [
          { text: 'Handbook', link: '/' },
          { text: 'Mission', link: 'company/mission' },
          { text: 'Vision', link: 'company/vision' }
        ],
      },
      {
        text: "Product",
        items: [
          {text: "App lifecycle", link: 'product/app-lifecycle'},
        ]
      },
      {
        text: "Engineering",
        items: [
          {text: "Technologies", link: 'engineering/technologies'},
          {text: "Open Source", link: 'engineering/open-source'},
          {text: "Standards", link: 'engineering/standards'}
        ]
      },
      {
        text: "People",
        items: [
          {text: "Values", link: 'people/values'},
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/tuist' },
      { icon: 'slack', link: 'https://join.slack.com/t/tuistapp/shared_invite/zt-1y667mjbk-s2LTRX1YByb9EIITjdLcLw' },
      { icon: 'mastodon', link: 'https://fosstodon.org/@tuist'}
    ]
  }
})
