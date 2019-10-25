# Dark Mode Screenshot 📷🌒

This [Puppeteer](https://github.com/GoogleChrome/puppeteer/) script
takes a screenshot of a webpage in Light and Dark Mode.

<table>
  <thead>
    <th>Dark Mode</th>
    <th>Light Mode</th>
  </thead>
  <tbody>
    <tr>
      <td>
        <img src="https://github.com/tomayac/dark-mode-screenshot/blob/cabecd90eee5299e10089311cba61f70694f00d3/screenshot-dark.png?raw=true">
      </td>
      <td>
        <img src="https://github.com/tomayac/dark-mode-screenshot/blob/cabecd90eee5299e10089311cba61f70694f00d3/screenshot-light.png?raw=true">
      </td>
    </tr>
    <tr>
      <td>
        <code>screenshot-dark.png</code>
      </td>
      <td>
        <code>screenshot-light.png</code>
      </td>
    </tr>
  </tbody>
</table>

## ⚠️ Prerequisite

For this script to work, you need to activate Dark Mode in your operating system.
Please see the [instructions for various operating systems](https://goo.gle/activate-dark-mode)
on how to do that. The script will programmatically force Dark Mode off for taking the light screenshot.

## 👩‍💻 Usage

Locally from the command line:

```bash
$ node dark-mode-screenshot.js --url https://googlechromelabs.github.io/dark-mode-toggle/demo/ --output screenshot --fullPage --pause 750
```

Without installing remotely from npm:

```bash
$ npx dark-mode-screenshot --url https://googlechromelabs.github.io/dark-mode-toggle/demo/ --output screenshot --fullPage --pause 750
```

| Parameter (long) | Parameter (short) | Description |
| --- | --- | --- |
| `--url` | `-u` | The URL of the webpage, defaults to `https://googlechromelabs.github.io/dark-mode-toggle/ demo/index.html`. |
| `--output` | `-o` | The file prefix of the screenshot (there will be a light and a dark file), defaults to `screenshot`. |
| `--fullPage` | `-f` | Whether or not to take a full page screenshot, defaults to `true`. |
| `--pause` | `-p` | Time in milliseconds to pause before taking each screenshot, defaults to `0`. |


## Acknowledgements

Thanks to @mathiasbynens for implementing
[`page.emulateMediaFeatures(features)`](https://github.com/GoogleChrome/puppeteer/blob/v2.0.0/docs/api.md#pageemulatemediatypetype)
in Puppeteer and for making this script a lot lighter.

## 📄 License

Apache 2.0
