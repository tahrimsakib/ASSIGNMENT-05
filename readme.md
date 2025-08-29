# JavaScript DOM & Events – Q&A

## 1. Difference between `getElementById`, `getElementsByClassName`, `querySelector`, `querySelectorAll`
- `getElementById` → Returns a single element by its **id**.  
- `getElementsByClassName` → Returns an **HTMLCollection** (multiple elements, by class).  
- `querySelector` → Returns the **first match** using a CSS selector.  
- `querySelectorAll` → Returns **all matches** as a **NodeList**.  

---

## 2. How to create and insert a new element into the DOM?
```js
const div = document.createElement('div');
div.textContent = 'Hello';
document.body.appendChild(div);
```
---
## 3. What is Event Bubbling?
- Event goes from **target element → parent → document** (bottom to top).
---
## 4. What is Event Delegation? Why useful?
- Attach event to **parent**, handle via `event.target`.  
- Useful for **fewer listeners** and **dynamic elements**.  
---
## 5. Difference between `preventDefault()` and `stopPropagation()`
- `preventDefault()` → Stops **default action** (e.g., link click).  
- `stopPropagation()` → Stops **event bubbling/capturing**.
