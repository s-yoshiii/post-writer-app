# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `yarn dev` - Start development server (Next.js on localhost:3000)
- `yarn build` - Production build
- `yarn lint` - Run ESLint
- No test framework is configured yet

## Tech Stack

- **Next.js 16** with App Router (React 19, TypeScript)
- **Tailwind CSS v4** with `@tailwindcss/postcss` (no tailwind.config — uses CSS-based config in `app/globals.css`)
- **shadcn/ui** (new-york style, RSC-enabled, lucide icons)
- **Package manager**: yarn

## Architecture

- `app/` - Next.js App Router pages and layouts
- `lib/utils.ts` - `cn()` helper (clsx + tailwind-merge)
- `components/ui/` - shadcn/ui components (add via `npx shadcn@latest add <component>`)

## Conventions

- Path alias: `@/*` maps to project root
- shadcn/ui aliases: `@/components/ui`, `@/lib`, `@/hooks`
- Dark mode: class-based (`.dark` variant)
- CSS variables for design tokens defined in `app/globals.css` using oklch color space
