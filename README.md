# ⚛️ React Learning Journey

Welcome to my React learning repository! This project serves as a step-by-step log of my progress as I dive deep into React, master its core concepts, and build hands-on examples for each fundamental topic.

---

## 📂 Repository Structure

Each folder in this repository represents a major milestone in the tutorial series, containing isolated code examples and feature implementations:

* **`elements/`** – Working with JSX elements and rendering building blocks.
* **`components_props/`** – Functional/Class components, passing data via props, and destructuring props.
* **`state_lifecycle/`** – Managing dynamic component data with state and handling side effects/lifecycle methods.
* **`eventhandling_controlrendering/`** – Capturing user interactions, synthetic events, and optimizing/controlling component re-renders.
* **`conditional_rendering_lists/`** – Handling conditional UI displays and rendering arrays efficiently using unique `key` props.
* **`form_handling/`** – Managing form inputs using controlled components and unified state handlers.
* **`lifting_state_up/`** – Sharing state between sibling components by moving it to their closest common ancestor.
* **`composition_vs_inheritance/`** – Building reusable, flexible UI structures using containment (`props.children`) and specialization patterns.


---

## 🚀 Key Concepts Mastered So Far

### 1. Components & Props
* Creating reusable UI components.
* Passing data down from parent to child components using read-only `props`.

### 2. State & Lifecycle
* Using state to make applications interactive and dynamic.
* Understanding component mounting, updating, and unmounting phases (using lifecycle methods or the `useEffect` hook).

### 3. Event Handling & Render Control
* Binding and handling events (like clicks, form submissions, and input changes).
* Understanding what triggers a re-render and learning how to control or minimize unnecessary renders for better performance.

### 4. Conditional Rendering & Lists
* Using ternary operators, logical `&&`, and `if/else` statements to show or hide UI elements dynamically.
* Transforming arrays into lists of JSX elements using `.map()`.
* Understanding the critical role of unique `key` props to help React track item changes, additions, and removals efficiently.

### 5. Form Handling (Controlled Components)
* Overriding default DOM behavior to make React state the "single source of truth" for input values.
* Using a single, dynamic `onChange` handler to manage multi-input form states efficiently.
* Utilizing `e.preventDefault()` to capture and handle form submissions seamlessly without page refreshes.

* ### 6. Lifting State Up
* Establishing a single source of truth for sibling components by hoisting state to a common parent.
* Passing down updater callback functions to allow children to trigger state updates in the parent component.

* ### 7. Composition vs Inheritance
* Embracing React's powerful composition model over traditional object-oriented inheritance.
* Utilizing `props.children` to pass arbitrary HTML or child components into generic containers (Containment).
* Restructuring specific components into specialized variants of generic templates using descriptive props (Specialization).
---

## 🛠️ How to Run Locally

If you want to clone this repository and run any of the topics locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/tanjil-islam/React.git](https://github.com/tanjil-islam/React.git)
2. Navigate into the project directory:
   Bash  cd React
3. Install dependencies:
   Bash   npm install
4. Start the development server:
   Bash   npm start
