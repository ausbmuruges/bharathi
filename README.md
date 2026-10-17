# bharathi — Professional Profile Site

Source for my personal profile site, hosted via **GitHub Pages**.

## Pages

| Page | Description |
|---|---|
| [About](index.html) | Role, capabilities, delivery highlights, and professional links |
| [Work](work/index.html) | Architecture case studies and career timeline |
| [Open Source](opensource/index.html) | Public GitHub activity and verified credentials |
| [Writing](writing/index.html) | Reserved for public articles; currently omitted from site navigation |

## Structure

```
/
├── index.html              # Profile landing page
├── work/index.html         # Work & projects
├── opensource/index.html   # Open source contributions
├── writing/index.html      # Writing index
├── assets/
│   ├── css/style.css       # Shared stylesheet
│   └── images/             # Portfolio banners and SVG network art
├── .github/
│   └── copilot-instructions.md  # Copilot content guardrails
└── README.md
```

## Developing

No build step required — pure HTML and CSS.
Open any `.html` file in a browser, or use the
[Live Preview](https://marketplace.visualstudio.com/items?itemName=ms-vscode.live-server)
extension in VS Code.

## Content guidelines

See [.github/copilot-instructions.md](.github/copilot-instructions.md) for the full
list of content rules enforced for this repository — notably, no personal contact
details, credentials, or confidential information.
