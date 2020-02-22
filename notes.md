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
