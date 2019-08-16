# Dark Mode Screenshot 📷🌒

This [Puppeteer](https://github.com/GoogleChrome/puppeteer/) script
takes a screenshot of a webpage in Light and Dark Mode.

## Prerequisite

For this script to work, you need to activate Dark Mode in your operating system.
Please see the [instructions for various operating systems]('https://goo.gle/activate-dark-mode')
on how to do that.

## Usage

Command line (from npm):

```bash
npx dark-mode-screenshot --url https://www.example.com --output screenshot --fullPage true
```

Command line (from local installation):

```bash
node dark-mode-screenshot.js --url https://www.example.com --output screenshot --fullPage true
```

| Parameter (long) | Parameter (short) | Description |
| --- | --- | --- |
| `--url` | `-u` | The URL of the webpage, defaults to `https://googlechromelabs.github.io/dark-mode-toggle/ demo/index.html`. |
| `--output` | `-o` | The file prefix of the screenshot (there will be a light and a dark file), defaults to `screenshot`. |
| `--fullPage` | `-f` | Whether or not to take a full page screenshot, defaults to `true`. |

## License

Apache 2.0
