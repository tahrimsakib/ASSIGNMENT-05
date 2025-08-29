# JavaScript DOM & Events – Q&A

## 1. Difference between `getElementById`, `getElementsByClassName`, `querySelector`, `querySelectorAll`
- `getElementById` → It's finds an HTML element by id.
- `getElementsByClassName` → It's finds all the classes from the html file.  .  
- `querySelector` → The first id, class or tag of the selected id, class or tag will be given.  
- `querySelectorAll` → querySelectorAll is a JavaScript DOM method that finds all elements that match a CSS selector.

---

## 2. How to create and insert a new element into the DOM?
```js
const div = document.createElement('div');
div.textContent = 'Hello';
document.body.appendChild(div);
```
---
## 3. What is Event Bubbling?
- Event Bubbling is a process in the DOM where an event first occurs on the element, then moves up to its parent, then to its grandparent.
---
## 4. What is Event Delegation? Why useful?
- Attach event to parent, handle via event.target.  
- Useful for fewer listeners and dynamic elements.  
---
## 5. Difference between `preventDefault()` and `stopPropagation()`
- `preventDefault()` → This stops the page from loading. 
- `stopPropagation()` → This stops event bubbling/capturing.
