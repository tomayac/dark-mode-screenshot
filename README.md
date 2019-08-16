# Dark Mode Screenshot 📷🌒

This [Puppeteer](https://github.com/GoogleChrome/puppeteer/) script
takes a screenshot of a webpage in Light and Dark Mode.

## Usage

```bash
npx dark-mode-screenshot.js --url https://www.example.com --output screenshot --fullPage true
```

| Parameter | Description |
| --- | --- |
| `--url` or `-u` | The URL of the webpage, defaults to `https://googlechromelabs.github.io/dark-mode-toggle/ demo/index.html`. |
| `--output` or `-o` | The file prefix of the screenshot (there will be a light and a dark file), defaults to `screenshot`. |
| `--fullPage` or `-f` | Whether or not to take a full page screenshot, defaults to `true`. |

## License

Apache 2.0
