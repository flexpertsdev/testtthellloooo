# Spec: Design System

## Phase 1: Pre-Thinking (Research & Planning)

### Purpose
To establish a minimal, yet functional, design system. For a "Hello, World!" project, the primary goal is not aesthetic perfection but to confirm that our styling pipeline (CSS custom properties, global styles) is correctly configured and being applied to the final output. This sets the stage for more complex styling in future projects.

### Research Conducted
**Search: "minimalist color palettes for websites"**
- Key Findings: Minimalist designs often use a very limited color palette, frequently monochromatic with a single accent color. Dark mode palettes (dark gray/black background with light text) are common for developer-focused or simple tech demos. A common pattern is `#222` or `#1a1a1a` for the background, `#eee` or `#f0f0f0` for text, and a vibrant blue or green for accents.

**Search: "system font stack css 2024"**
- Source: CSS-Tricks, Smashing Magazine articles.
- Key Findings: Using a system font stack is the most performant way to handle typography as it requires no network requests for font files. The font stack gracefully degrades based on the user's operating system, providing a familiar and readable experience. A modern stack looks something like this: `system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif`.

### Design Decisions

**1. Color Palette (Design Tokens):**
- A simple dark-mode theme will be used to make it obvious that custom styles are being applied.
- We will define these as CSS custom properties in `design-tokens.css` for reusability.
  - `--color-background`: `#1e1e1e` (A dark, neutral gray)
  - `--color-text`: `#e0e0e0` (An off-white for comfortable reading)
  - `--color-accent`: `#00bfff` (Deep sky blue for any potential links or highlights)

**2. Typography:**
- We will use the system font stack for performance and simplicity.
- The base font size will be `16px`, with responsive adjustments for larger screens if necessary (though not critical for this project).
- Headings will have a slightly larger font size and weight.

**3. Spacing:**
- No formal spacing scale is needed. We will use `rem` units for any padding or margin to ensure scalability with user font-size preferences.

### Files to Create
1.  `src/styles/design-tokens.css` (defining CSS custom properties)
2.  `src/styles/global.css` (applying the tokens and base styles to the document)

### Why This Matters
This minimal system proves the foundation is working. By separating tokens from global styles, we are establishing a scalable pattern. When we see the dark background and custom font on the deployed site, we have successfully validated the entire front-end build and styling pipeline.

## Phase 2: Build Log
- **2024-07-25:** Created `src/styles/design-tokens.css` to define the core color and typography variables for the project.
- **2024-07-25:** Created `src/styles/global.css` to apply the design tokens and establish base styles for the site.
- **Status:** All planned files for the design system have been created.

## Phase 3: Post-Build Retrospective
- **Outcome:** A minimal but effective design system is in place. The separation of tokens and global styles is a good practice that will scale well.
- **What went well:** The design decisions were simple and directly supported the project's goal: to verify the styling pipeline. The implementation was straightforward.
- **What could be improved:** For a larger project, this system would need to be expanded with spacing units, more robust typography scales, and component-level styles. For this project, it is sufficient.
- **Next Steps:** Proceed to `specs/03-homepage.md` to build the actual page that will use this design system.