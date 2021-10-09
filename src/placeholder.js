const INITIAL_STATE = `
# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6

*This text will be italic*
_This will also be italic_
**This text will be bold**
__This will also be bold__
*You **can** combine them*

\`\`\`javascript
function test() {
 console.log("Block code snippet");
}
\`\`\`

\`function test() { console.log ("Inline code snippet"); }\`

As Grace Hopper said:
> I’ve always been more interested
> in the future than in the past.

* Item 1
* Item 2
  * Item 2a
  * Item 2b

1. Item 1
2. Item 2
3. Item 3
  * Item 3a
  * Item 3b

![Photo by <a href="https://unsplash.com/@theshubhamdhage?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Shubham Dhage</a> on <a href="https://unsplash.com/@theshubhamdhage?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>](https://images.unsplash.com/photo-1633768993247-209f13029f5a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1932&q=80)
Photo by <a href="https://unsplash.com/@theshubhamdhage?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Shubham Dhage</a> on <a href="https://unsplash.com/@theshubhamdhage?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

[GitHub link](http://github.com)

- [x] this is a complete item
- [ ] this is an incomplete item
- [x] @mentions, #refs, [links](),
- [ ] **formatting**, and <del>tags</del> supported
- [x] list syntax required (any
unordered or ordered list
supported)

First Header | Second Header
------------ | -------------
Content cell 1 | Content cell 2
Content column 1 | Content column 2
`;

export default INITIAL_STATE;