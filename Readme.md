<!---
Thanks for filing an issue 😄 ! Before you submit, please read the following:

Search open/closed issues before submitting since someone might have asked the same thing before!
-->

# 🐛 bug report

I am trying to import SVG as react component based on the [documentation](https://parceljs.org/languages/svg/#importing-as-a-react-component) from parcel site. Instead of the svg being rendered as a component in the page, the build actually fails. With an error - `@parcel/core: No transformers found for src/assets/logo.jsx with pipeline: 'jsx'.`

<!--- Provide a general summary of the issue here -->

## 🎛 Configuration (.babelrc, package.json, cli command)

Using default babel configuration.

```js
// package.json

{
  "name": "parcel-react-app",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "parcel src/index.html"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@parcel/transformer-svg-react": "^2.2.1",
    "parcel": "^2.2.1"
  },
  "dependencies": {
    "react": "^17.0.2",
    "react-dom": "^17.0.2"
  }
}
```

<!--- If describing a bug, tell us what your babel configuration looks like -->

```js
// .parcelrc

{
  "extends": "@parcel/config-default",
  "transformers": {
    "jsx:*.svg": ["...", "@parcel/transformer-svg-react"]
  }
}
```

## 🤔 Expected Behavior
The svg image should be loaded as a react component in the webpage.
<!--- Tell us what should happen -->

## 😯 Current Behavior
An error is thrown saying `@parcel/core: No transformers found for src/assets/logo.jsx with pipeline: 'jsx'.`
<!--- Tell us what happens instead of the expected behavior -->

<!--- If you are seeing an error, please include the full error message and stack trace -->

## 💁 Possible Solution

<!--- Not obligatory, but suggest a fix/reason for the bug -->

## 🔦 Context
I am trying to import a svg image as a react component. 
<!--- How has this issue affected you? What are you trying to accomplish? -->

<!--- Providing context helps us come up with a solution that is most useful in the real world -->

## 💻 Code Sample

Clone [this repo](https://github.com/harish-karthik/parcel-svg-error) and run `yarn && yarn run dev`
<!-- Please provide a code repository, gist, code snippet or sample files to reproduce the issue -->

## 🌍 Your Environment

<!--- Include as many relevant details about the environment you experienced the bug in -->

| Software         | Version(s) |
| ---------------- | ---------- |
| Parcel           | 2.2.0    |
| Node             | 16.13.2 |
| npm/Yarn         | 8.1.2 / 1.22.17 |
| Operating System | Windows 10 |

<!-- Love parcel? Please consider supporting our collective:
👉  https://opencollective.com/parcel/donate -->

### Attachments:

![error shown in browser](https://user-images.githubusercontent.com/45566079/150583317-0cc72555-3515-4dc3-bca4-5a20ac8a8154.png)

