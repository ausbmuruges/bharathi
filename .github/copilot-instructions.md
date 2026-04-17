# GitHub Copilot Instructions
# This file configures how GitHub Copilot assists in this repository.

## Purpose of This Repository

This is a **public professional profile and portfolio site** hosted via GitHub Pages.
All content must be appropriate for a public-facing professional audience.

---

## Content Rules (MUST follow)

### ✅ Acceptable content
- Professional bio, skills, and areas of expertise (general, no employer-confidential details)
- Public project descriptions and GitHub repository links
- Open source contributions that are already publicly visible on GitHub
- Published articles, blog posts, and talks that are already public
- Links to public professional profiles (GitHub, LinkedIn, personal blog, etc.)
- Tech stack / tools you use (no internal tooling names from current employer)

### ❌ Never include or generate
- Home address, personal phone number, personal email address
- Passport, national ID, tax, or financial information of any kind
- Credentials, API keys, tokens, passwords, or connection strings
- Internal company names, unreleased product names, or proprietary codenames
- Confidential client names or internal project details without explicit permission
- Details of unreleased software, architecture, or business strategy
- Colleague names, personal details, or internal org structure
- Salary, compensation, or contract terms
- Private social media handles or accounts not intended for professional use
- Any personal data about third parties

---

## Code / HTML Suggestions

- Use **semantic HTML5** elements (`<nav>`, `<section>`, `<article>`, `<footer>`, etc.)
- Keep all external links with `target="_blank" rel="noopener noreferrer"` for security
- Do NOT suggest inline `<script>` blocks that load external scripts from unknown CDNs
- Prefer CSS custom properties (variables) already defined in `assets/css/style.css`
- Avoid adding `<meta>` tags that expose sensitive information (e.g. `generator` tags revealing internal tooling)
- Accessibility: always include `alt` attributes on images, `aria-label` where needed
- Do NOT add Google Analytics, tracking pixels, or third-party telemetry scripts without explicit user approval

## Tone & Writing Style

- Professional, clear, and concise
- First-person is fine for bio/about sections
- Avoid buzzwords and vague claims ("passionate", "guru", "ninja") — use specific, concrete descriptions
- Focus on impact and outcomes, not internal processes

## File Structure (don't create files outside this structure without asking)

```
/
├── index.html              # About / landing
├── work/index.html         # Projects & experience
├── opensource/index.html   # OSS contributions
├── writing/index.html      # Articles & writing index
├── assets/
│   └── css/style.css       # Shared styles
├── .github/
│   └── copilot-instructions.md
└── README.md
```

## When in doubt

If you're unsure whether a piece of content is appropriate for a public professional site,
**leave a TODO comment** and flag it for the author to fill in manually. Do not hallucinate
or invent personal details.
