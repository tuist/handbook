import { defineConfig } from "vitepress";
import {
  atom01Icon,
  codeBrowserIcon,
  heartIcon,
  target04Icon,
  cubeOutlineIcon,
  lifeBuoy02Icon,
  faceIdIcon,
  intersectCircleIcon,
} from "./icons.mjs";
import * as path from "node:path";
import * as fs from "node:fs/promises";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Tuist Handbook",
  titleTemplate: ":title | Tuist Handbook",
  description: "Tuist company handbook",
  srcDir: "./handbook",
  cleanUrls: true,
  sitemap: {
    hostname: "https://handbook.tuist.io",
  },
  async buildEnd({ outDir }) {
    const redirectsPath = path.join(outDir, "_redirects");
    const redirects = `
/security/information-security-policy /security/information-security-framework/information-security-policy 301
/security/information-security-roles-and-responsibilities /security/information-security-framework/information-security-roles-and-responsibilities 301
/security/access-control-policy /security/access-and-risk-management/access-control-policy 301
/security/risk-management-policy /security/access-and-risk-management/risk-management-policy 301
/security/third-party-risk-management-policy /security/access-and-risk-management/third-party-risk-management-policy 301
/security/human-resource-security-policy /security/human-and-incident-management/human-resource-security-policy 301
/security/incident-response-management /security/human-and-incident-management/incident-response-management 301
/security/secure-development-policy /security/secure-development-and-operations/secure-development-policy 301
/pdfs/operations-security-policy-bsi.pdf /pdfs/security/secure-development-and-operations/operations-security-policy-bsi.pdf 301
/security/physical-security-policy /security/physical-and-asset-security/physical-security-policy 301
/security/asset-management-policy /security/physical-and-asset-security/asset-management-policy 301
/security/business-continuity-and-disaster-recovery-plan /security/business-continuity-and-data-protection/business-continuity-and-disaster-recovery-plan 301
/security/cryptography-policy /security/business-continuity-and-data-protection/cryptography-policy 301
/security/network-traffic-management-policy /security/business-continuity-and-data-protection/network-traffic-management-policy 301
/pdfs/security/data-management-policy-bsi.pdf /pdfs/security/business-continuity-and-data-protection/data-management-policy-bsi.pdf 301
      `;
    fs.writeFile(redirectsPath, redirects);
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
      pattern: "https://github.com/tuist/handbook/edit/main/:path",
    },
    logo: "/logo.png",
    search: {
      provider: "local",
    },
    nav: [{ text: "Home", link: "/" }],

    sidebar: [
      {
        text: `<div style="display: flex; flex-direction: row; align-items: center; gap: 7px;">Company ${atom01Icon()}</div>`,
        collapsed: true,
        items: [
          { text: "Handbook", link: "/" },
          { text: "Mission", link: "/company/mission" },
          { text: "Vision", link: "/company/vision" },
          { text: "Principles", link: "/company/principles" },
          { text: "Services and tools", link: "/company/services-and-tools" },
          { text: "Leadership", link: "/company/leadership" },
        ],
      },
      {
        text: `<div style="display: flex; flex-direction: row; align-items: center; gap: 7px;">Product ${cubeOutlineIcon()}</div>`,
        collapsed: true,
        items: [{ text: "Needs pool", link: "/product/needs-pool" }],
      },
      {
        text: `<div style="display: flex; flex-direction: row; align-items: center; gap: 7px;">Engineering ${codeBrowserIcon()}</div>`,
        collapsed: true,
        items: [
          { text: "Technologies", link: "/engineering/technologies" },
          { text: "Open Source", link: "/engineering/open-source" },
          { text: "Standards", link: "/engineering/standards" },
          {
            text: "Standard practices",
            link: "/engineering/standard-practices",
          },
        ],
      },
      {
        text: `<div style="display: flex; flex-direction: row; align-items: center; gap: 7px;">Community ${intersectCircleIcon()}</div>`,
        collapsed: true,
        items: [
          {
            text: "Swift Stories Newsletter",
            link: "/community/swift-stories",
          },
        ],
      },
      {
        text: `<div style="display: flex; flex-direction: row; align-items: center; gap: 7px;">Support ${lifeBuoy02Icon()}</div>`,
        collapsed: true,
        items: [{ text: "Process", link: "/support/process" }],
      },
      {
        text: `<div style="display: flex; flex-direction: row; align-items: center; gap: 7px;">People ${heartIcon()}</div>`,
        collapsed: true,
        items: [
          { text: "Values", link: "/people/values" },
          { text: "How we work", link: "/people/how-we-work" },
          { text: "Code of conduct", link: "/people/code-of-conduct" },
          { text: "Onboarding", link: "/people/onboarding" },
        ],
      },
      {
        text: `<div style="display: flex; flex-direction: row; align-items: center; gap: 7px;">Marketing ${target04Icon()}</div>`,
        collapsed: true,
        items: [{ text: "Case studies", link: "/marketing/case-studies" }],
      },
      {
        text: `<div style="display: flex; flex-direction: row; align-items: center; gap: 7px;">Security ${faceIdIcon()}</div>`,
        collapsed: true,
        items: [
          {
            text: "Shared responsibility model",
            link: "/security/shared-responsibility-model",
          },
          {
            text: "Emplyee termination security policy",
            link: "/security/employee-termination-security-policy",
          },
          {
            text: "Information security framework",
            collapsed: true,
            items: [
              {
                text: "Information Security Policy (AUP)",
                link: "/security/information-security-framework/information-security-policy",
              },
              {
                text: "Information Security Roles and Responsibilities",
                link: "/security/information-security-framework/information-security-roles-and-responsibilities",
              },
            ],
          },
          {
            text: "Access and risk management",
            collapsed: true,
            items: [
              {
                text: "Access control policy",
                link: "/security/access-and-risk-management/access-control-policy",
              },
              {
                text: "Risk management policy",
                link: "/security/access-and-risk-management/risk-management-policy",
              },
              {
                text: "Third-party risk management policy",
                link: "/security/access-and-risk-management/third-party-risk-management-policy",
              },
            ],
          },
          {
            text: "Human and incident management",
            collapsed: true,
            items: [
              {
                text: "Human resource security policy",
                link: "/security/human-and-incident-management/human-resource-security-policy",
              },
              {
                text: "Incident response management",
                link: "/security/human-and-incident-management/incident-response-management",
              },
            ],
          },
          {
            text: "Secure development and operations",
            collapsed: true,
            items: [
              {
                text: "Secure development policy",
                link: "/security/secure-development-and-operations/secure-development-policy",
              },
              {
                text: "Operations security policy",
                link: "/pdfs/security/secure-development-and-operations/operations-security-policy-bsi.pdf",
              },
            ],
          },
          {
            text: "Physical and asset security",
            collapsed: true,
            items: [
              {
                text: "Physical security policy",
                link: "/security/physical-and-asset-security/physical-security-policy",
              },
              {
                text: "Asset management policy",
                link: "/security/physical-and-asset-security/asset-management-policy",
              },
            ],
          },
          {
            text: "Business continuity and data protection",
            collapsed: true,
            items: [
              {
                text: "Data-loss prevention",
                link: "/security/business-continuity-and-data-protection/data-loss-prevention",
              },
              {
                text: "Business continuity and disaster recovery plan",
                link: "/security/business-continuity-and-data-protection/business-continuity-and-disaster-recovery-plan",
              },
              {
                text: "Cryptography policy",
                link: "/security/business-continuity-and-data-protection/cryptography-policy",
              },
              {
                text: "Network traffic management policy",
                link: "/security/business-continuity-and-data-protection/network-traffic-management-policy",
              },
              {
                text: "Data management policy",
                link: "/pdfs/security/business-continuity-and-data-protection/data-management-policy-bsi.pdf",
              },
            ],
          },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/tuist" },
      {
        icon: "slack",
        link: "https://join.slack.com/t/tuistapp/shared_invite/zt-1y667mjbk-s2LTRX1YByb9EIITjdLcLw",
      },
      {
        icon: "bluesky",
        link: "https://bsky.app/profile/tuist.dev",
      },
      { icon: "mastodon", link: "https://fosstodon.org/@tuist" },
    ],
  },
});
