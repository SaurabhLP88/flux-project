# Flux Guided Project – Todo App  

This project demonstrates the **Flux architecture** through a simple **Todo Application**. The focus is on building a clear unidirectional data flow using actions, dispatcher, stores, and views.  

---

## 🚀 Project Overview  
- **Goal:** Learn and implement Flux pattern fundamentals.  
- **Application:** A basic Todo App that allows adding, managing, and visualizing tasks.  

---

## ✨ Key Concepts Implemented  
- **Registering callbacks with the Dispatcher**  
  Dispatcher is the central hub that receives actions and forwards them to registered stores.  

- **Working with Payloads**  
  Actions are dispatched with payloads containing the data (e.g., new task text, task ID).  

- **Registering Stores with the Dispatcher**  
  Stores hold the application state and respond to specific action types.  

- **Creating Flux Views**  
  Views subscribe to store changes and re-render UI, enabling users to easily visualize and interact with tasks.  

---

## ⚙️ Setup Instructions  
1. Clone the repository:  
   ```bash
   git clone https://github.com/SaurabhLP88/flux-project.git

2. Open the project folder:
    ```bash
    cd flux-project

3. Open index.html in your browser.
