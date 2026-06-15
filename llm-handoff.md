# AI Handoff Document

This file is intended for a new AI model or developer.

---

# Project Summary
What is being built?
An ultra-premium, brutalist editorial web experience for a collegiate cultural festival named "ANTARAGNI". It functions as a landing page to attract and recruit campus ambassadors.

Why is it being built?
To create a high-impact, prestigious first impression, using cinematic contrasts and dramatic typography to convey exclusivity.

Current progress percentage: 5% (Planning and specifications complete, code scaffolding present, but actual UI implementation has not started).

---

# Read These Files First
1. project-state.md (Current project state and tasks)
2. website-reconstruction-spec.md (Main architectural and design vision)
3. frontend-design-system.md (Design system, typography, colors)
4. asset-manifest.md (Strict rules on what visual assets are allowed)

---

# Current Status
Current Phase: Initial Implementation
Current Milestone: Base Layout and Architecture Setup
Current Build Status: Build Passes, Lint Fails
Current Branch: main

---

# What Has Been Completed
- All markdown specification files outlining the design, implementation, components, and animations have been created.
- Next.js 14 template has been scaffolded with Tailwind CSS, TypeScript, and Framer Motion dependencies.
- Git repository is initialized.
- Project memory documentation has been set up.

---

# What Is Currently Being Worked On
- Transitioning from the planning stage to actual UI implementation.
- Establishing base configurations (Linting, Globals).

---

# Known Issues
Issue: `npm run lint` hangs
Root Cause: Missing or incomplete ESLint configuration, causing the Next.js CLI to pause on an interactive prompt.
Status: Open
Fix Recommendation: Add a `.eslintrc.json` file extending `"next/core-web-vitals"`.

---

# Architectural Rules
* Use Next.js App Router.
* Use TypeScript.
* Use Tailwind CSS for styling.
* Use Framer Motion for animations.
* No Canvas or WebGL backgrounds.
* No Placeholder Assets.
* No Emoji-Based Design or rounded corners (`border-radius: 0`).
* Stick strictly to `#050505` background and pure white / crimson red typography.
* Implement a binary typography scale: Massive, condensed serif headings vs. microscopic, wide-tracked sans-serif metadata.

---

# Important Decisions
- Real, highly edited cinematic photography and 3D renders will be used instead of generic vector illustrations.
- Section transitions are dictated purely by negative space (160px+) and hairline dividers (1px `#262626`).

---

# Immediate Next Task
1. Fix the ESLint configuration to enable automated lint checks.
2. Initialize global styles (colors, fonts) based on the specifications in `frontend-design-system.md`.

---

# Warnings
- DO NOT stray from the defined color palette (Black `#050505`, White, Gray, Red `#D92323`).
- DO NOT use CSS drop shadows (`box-shadow: none`). Volume should come from lighting in the images.
- DO NOT tighten up the spacing. The huge negative space (up to 160px gaps) is mandatory for the premium aesthetic.

---

# Success Criteria
Before moving to full section development, the following must be true:
- The app builds successfully.
- `npm run lint` completes without warnings or hanging.
- Global CSS properly reflects the background color and typography requirements.
