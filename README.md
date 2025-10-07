# Fun&Grains (funandgrains.com)
Welcome to Fun&Grains. We are a vegan food blog made with ❤️ in Croatia. You can find us at https://funandgrains.com

## Our Tech Stack
- Astro
- Tailwind
- Umami Analytics
- Coolify
- Directus

## How It's Deployed
We are using Coolify (Deploy from Dockerfile option) to self-host this site on our Hetzner VPS. This VPS is running both our CMS (Directus) and our Astro builds for like 6€/month.

We set up a simple nginx.conf (Which is probably done terribly as I have no idea how to actually use nginx properly) to serve our static files. We have no intention of ever going dynamic and this will forever stay a fully static website so this is probably fine for our usecase.