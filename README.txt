
# NOXO NETWORK MVP – DEPLOY GUIDE

## BACKEND (Render)
1. Go to https://render.com
2. Create new Web Service
3. Connect Git repo OR upload backend folder manually
4. Set environment variables:
   - SUPABASE_URL=your Supabase project URL
   - SUPABASE_ANON_KEY=your anon public key
   - PORT=3001
5. Start the service

## FRONTEND (Cloudflare Pages)
1. Run:
   npm install
   npm run build
2. Go to https://pages.cloudflare.com
3. Upload contents of /dist folder from frontend
4. Deploy to farpy.pages.dev or custom domain

## STRUCTURE
- Vault, Beans, Quests, Streaks → stored in Supabase
- Chaos Button visible at XP ≥ 100
- Quest system auto-rewards XP + beans
- Leaderboard + Summon/Claim wired to backend

You're live. 💥
