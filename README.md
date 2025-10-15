# ogoz
Cloudfare worker to achieve Cross-Origin Isolation

Modern HTML features, specifically SharedArrayBuffer and Atomics, require
[cross-origin isolation](https://web.dev/articles/cross-origin-isolation-guide).
Unfortunately, orgs/community#54257 means GitHub Pages won't support
custom headers any time soon.  This repository sets up a
[Cloudflare Worker](https://workers.cloudflare.com/) to proxy requests
to https://bur.gy and add COOP/COEP headers to them.

A word on the name: I'm Swiss by origin (which ties in with the cross, more on
that later) and isolation has the same root as island so
[Ogoz](https://en.wikipedia.org/wiki/%C3%8Ele_d%27Ogoz)!

Care to hear a dad joke about Switzerland?

What's so great about Switzerland?
Well, the flag is a big plus!
