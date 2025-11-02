# Spec: Technical Boilerplate

## Phase 1: Pre-Thinking (Research & Planning)

### Purpose
Establish solid technical foundations that enable creative freedom. For this "Hello, World!" project, it ensures the core build and deployment pipeline is functional before any content is added. This is the simplest possible test of the system.

### Research Conducted
**Search: "Astro best practices 2024"**
- Source: Astro Official Documentation (astro.build), various community blogs.
- Key Findings: Keep `astro.config.mjs` clean and well-documented. Leverage integrations for key functionalities like MDX, icons, and deployment adapters. Use path aliases (`@/`) for cleaner, more maintainable imports. Enable strict TypeScript for better type safety and developer experience.

**Search: "optimal Astro project structure"**
- Source: Astro documentation and community examples.
- Key Findings: The standard `src/` directory structure is highly recommended.
  - `src/pages/`: For all pages/routes.
  - `src/layouts/`: For shared page layouts.
  - `src/components/`: For reusable UI components.
  - `src/styles/`: For global CSS and design tokens.
  - `src/utils/`: For helper functions.
  This structure provides a clear separation of concerns and is what the Astro ecosystem tooling expects.

### Technical Decisions

**Package.json:**
- Use a standard, minimal set of dependencies required for the project.
- Includes: `astro`, `@astrojs/netlify` for deployment, `@astrojs/mdx` for potential future content, `astro-icon` and `@iconify-json/lucide` for a simple icon system, and `clsx` for conditional class management.
- Scripts for `dev`, `build`, and `preview` are standard and sufficient.

**Astro Config (`astro.config.mjs`):**
- Use the Netlify adapter to ensure seamless deployment. The `imageCDN` option is enabled for future performance optimization, even if not used in this simple project.
- MDX integration is included to demonstrate the setup is ready for content-rich pages.
- `astro-icon` integration is set up with the Lucide icon set, providing a ready-to-use icon library.
- Path aliases are configured to match `tsconfig.json`, promoting clean import paths (e.g., `import C from '@/components/C.astro'`).

**TypeScript Config (`tsconfig.json`):**
- Extends Astro's `strict` preset for maximum type safety.
- Defines a `baseUrl` of `.` and a path alias for `@/*` pointing to `src/*`, which is critical for clean imports and IDE support.

**Netlify Config (`netlify.toml`):**
- Defines the build command and publish directory, making deployments declarative and predictable.
- Includes a simple single-page application (SPA) style redirect rule to ensure all paths are handled by `index.html`, which is a robust default for static sites.

### Files to Create
1.  `package.json` (with complete dependencies)
2.  `astro.config.mjs` (with Netlify + icons + MDX)
3.  `netlify.toml` (with build settings)
4.  `tsconfig.json` (with path aliases)
5.  `.gitignore` (standard Node/Astro)

### Why This Matters
Even for a "Hello, World!" project, these files establish a professional, scalable foundation. They ensure that from the very first line of code, the project is maintainable, deployable, and uses modern development practices. This boilerplate turns a simple exercise into a template for future, more complex projects.

## Phase 2: Build Log
- **2024-07-25:** Created `package.json` with core dependencies for Astro, Netlify, MDX, and icons.
- **2024-07-25:** Created `astro.config.mjs`, configuring the Netlify adapter, MDX, and Astro Icon integration.
- **2024-07-25:** Created `netlify.toml` to define build and deployment settings for Netlify.
- **2024-07-25:** Created `tsconfig.json` with strict settings and path aliases for `@/*`.
- **2024-07-25:** Created `.gitignore` with standard entries for a Node.js/Astro project.
- **Status:** All planned files for the technical boilerplate have been created.

## Phase 3: Post-Build Retrospective
- **Outcome:** The technical boilerplate was established successfully according to the spec. All configuration files are in place.
- **What went well:** The process was smooth and followed best practices. The file creation was methodical and each file serves a clear purpose.
- **What could be improved:** For a real-world project, we might add more dev dependencies like `prettier` or `eslint` from the start, but for a "Hello, World!" project, this setup is perfectly adequate.
- **Next Steps:** Proceed to the `specs/02-design-system.md` to establish the visual foundation.