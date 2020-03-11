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

https://www.npmjs.com/package/color

## TODO
* Add empty string application tokens for those not filled in
* Export and download (verify results)
* Import theme from URL (figure out how to do a theme package with multiple themes...)
* Finish editor sidebar
* Add other preview files in preview editor
* Finish Logo
* Improve inputs
* Auto-complete for aliases
* Fix syntax scopes to allow for foreground, background, and font style
* Add a simplified editor, pick a few colors, it generates the whole theme
* Add settings for each theme (name, base, etc.)

Store colors as a class and transform to hex at the end? 
