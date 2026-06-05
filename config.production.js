// Production overrides for self-hosted Iframely.
// Loaded automatically when NODE_ENV=production (see config.js loader).
// NOTE: This file is NOT gitignored and intentionally contains NO secrets.
// Put provider API keys / credentials in config.local.js or config.providers.js
// (both gitignored), never here.

export default {

    // Public base URL of this server. Used to build absolute URLs (e.g.
    // /reader.js embeds) and the outbound User-Agent. Env-overridable so the
    // host can change without a code edit.
    baseAppUrl: process.env.BASE_APP_URL || "https://iframely-ttdp.onrender.com",

    // Generate rich embeds for ANY domain where a media/player/image link is
    // detected, instead of only iframely.com's curated (rate-limited) QA
    // whitelist. Grants the "allow" tag to every embeddable rel across all
    // known sources, applied to the wildcard domain "*".
    WHITELIST_WILDCARD: {
        oembed: {
            rich: ["allow"],
            video: ["allow"],
            photo: ["allow"],
            link: ["allow"],
        },
        twitter: {
            player: ["allow"],
            photo: ["allow"],
        },
        og: {
            video: ["allow"],
        },
        iframely: {
            player: ["allow"],
            reader: ["allow"],
            image: ["allow"],
            survey: ["allow"],
            app: ["allow"],
            summary: ["allow"],
        },
    },
};
