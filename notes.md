What I'm trying to achieve is a *performant* GUI for editing a Style Dictionary. Where a Style Dictionary mostly meaning an object with:
* Unknown structure and levels of nesting
* Some attributes can be references to other parts of the object
* References can be nested at any length (a -> b -> c)
* Updates should be performant, only re-render what needs to
* References should show their reference chain, and the ultimate resolved value
* Edits can be made at any level

Option 1: Flat object
Flatten the object to a single level with the keys being an object path. Token components can update only when the references in the chain are changed. 

Could the parent handle not re-rendering children below? It would need to do a deep comparison each time


https://microsoft.github.io/monaco-editor
https://github.com/react-monaco-editor/react-monaco-editor
https://github.com/NeekSandhu/monaco-editor-textmate
https://code.visualstudio.com/blogs/2017/02/08/syntax-highlighting-optimizations
https://code.visualstudio.com/api/references/theme-color

https://upsource.jetbrains.com/idea-ce/file/idea-ce-e2d423f42b53eafd5c625b93149a0ebc7e49756c/platform/platform-resources/src/themes/highContrastScheme.xml

https://tmtheme-editor.herokuapp.com/
https://leonardocolor.io/
https://www.npmjs.com/package/color

## Known issues
* Monaco editor does not acknowledge backgrounds in tokens. This is seen on their playground page: https://github.com/microsoft/monaco-editor/issues/586

## TODO
* Add default application values for light/dark/hc themes
* Add empty string application tokens for those not filled in
* Export and download (verify results)
* Import theme from URL (figure out how to do a theme package with multiple themes...)
* Finish editor sidebar
* Finish other parts of editor (peek view, debug bar, etc.)
* Add other preview files in preview editor
* Improve inputs
* Add settings for each theme (name, base, etc.)
* Add documentation/content in editor inputs
* Improved color picker (hsl,hex,lighten,darken,alpha,etc.)
* Token search/filter
* Common elements section
* Quick start section
* Select base theme

Store colors as a class and transform to hex at the end? 

## Generator notes:
* https://flight-manual.atom.io/hacking-atom/sections/creating-a-theme/
* https://www.jetbrains.org/intellij/sdk/docs/reference_guide/ui_themes/themes.html
* https://github.com/dracula/jetbrains

## Test imports:
* https://raw.githubusercontent.com/sdras/night-owl-vscode-theme/master/themes/Night%20Owl-Light-color-theme-noitalic.json
* https://raw.githubusercontent.com/azemoh/vscode-onedark/master/themes/OneDarkTheme-color-theme.json
