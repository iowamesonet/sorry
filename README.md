# sorry

Static GitHub Pages fallback endpoint for service outage and rejected-request messaging.

## URL

- Base: `https://iowamesonet.github.io/sorry/`

## Modes

This page supports two usage modes via query parameters:

1. Maintenance / outage (default)
2. Blocked request notice

### Maintenance mode

Use no query string, or explicitly set `mode=maintenance`.

Examples:

- `https://iowamesonet.github.io/sorry/`
- `https://iowamesonet.github.io/sorry/?mode=maintenance`
- `https://iowamesonet.github.io/sorry/?mode=maintenance&site=Iowa%20Mesonet`

### Blocked-request mode

Use `mode=blocked` to show a security rejection notice.

Examples:

- `https://iowamesonet.github.io/sorry/?mode=blocked`
- `https://iowamesonet.github.io/sorry/?mode=blocked&site=Iowa%20Mesonet`

## Typical routing patterns

- Planned maintenance: temporary HTTP redirect (302/307) to `...?mode=maintenance&site=...`
- Security filtering/WAF upstream: redirect matched traffic to `...?mode=blocked&site=...`

## Notes

- This is a static site deployed with GitHub Actions.
- Content is intentionally generic and does not expose defensive implementation details.
