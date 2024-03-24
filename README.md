# React + Vite

*Run:* `npm run dev`


Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

When you make changes to your project and want to deploy them:

Build Your Project: Run your build command (e.g., npm run build) to generate the built version of your project.
Push to gh-pages: Use the gh-pages tool to deploy the built files to the gh-pages branch. This can be done with the command npm run deploy if you have a deploy script set up in your package.json.
