# 📝 React 19 Todo App (Redux Toolkit + Tailwind CSS)

A simple **Todo Application** built with **React 19**, **Redux
Toolkit**, and **Tailwind CSS** --- designed for learning Redux Toolkit
state management from scratch.

------------------------------------------------------------------------

## 🚀 Features

-   Add new todos\
-   Delete todos\
-   State management using **Redux Toolkit**\
-   Styled with **Tailwind CSS**\
-   Clean & scalable folder structure

------------------------------------------------------------------------

## 🧩 Folder Structure

    src
    ├── app
    │   └── store.js
    ├── App.css
    ├── App.jsx
    ├── assets
    │   └── react.svg
    ├── components
    │   └── todos
    │       ├── AddTodo.jsx
    │       └── Todos.jsx
    ├── features
    │   └── todos
    │       └── todoSlice.js
    ├── index.css
    └── main.jsx

------------------------------------------------------------------------

## ⚙️ Setup Instructions

1.  **Create React Project**

    ``` bash
    npm create vite@latest redux-todo-app --template react
    cd redux-todo-app
    ```

2.  **Install Dependencies**

    ``` bash
    npm install @reduxjs/toolkit react-redux tailwindcss
    ```

3.  **Initialize Tailwind CSS**

    ``` bash
    npx tailwindcss init -p
    ```

4.  **Configure Tailwind in `tailwind.config.js`:**

    ``` js
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    ```

5.  **Setup Redux Store (`src/app/store.js`):**

    ``` js
    import { configureStore } from '@reduxjs/toolkit'
    import todoReducer from '../features/todos/todoSlice'

    export const store = configureStore({
      reducer: {
        todos: todoReducer,
      },
    })
    ```

6.  **Wrap App with Provider (`main.jsx`):**

    ``` js
    import { Provider } from 'react-redux'
    import { store } from './app/store'
    import App from './App'

    ReactDOM.createRoot(document.getElementById('root')).render(
      <Provider store={store}>
        <App />
      </Provider>
    )
    ```

7.  **Todo Slice (`features/todos/todoSlice.js`):**

    ``` js
    import { createSlice, nanoid } from '@reduxjs/toolkit'

    const initialState = {
      todos: []
    }

    const todoSlice = createSlice({
      name: 'todos',
      initialState,
      reducers: {
        addTodo: (state, action) => {
          const todo = {
            id: nanoid(),
            text: action.payload.text,
          }
          state.todos.push(todo)
        },
        updateTodo: (state, action) => {
          const todo = state.todos.find(t => t.id === action.payload.id)
          if (todo) todo.text = action.payload.text
        },
        removeTodo: (state, action) => {
          state.todos = state.todos.filter(t => t.id !== action.payload.id)
        }
      }
    })

    export const { addTodo, updateTodo, removeTodo } = todoSlice.actions
    export default todoSlice.reducer
    ```

8.  **AddTodo Component (`components/todos/AddTodo.jsx`):**

    ``` jsx
    import { useState } from 'react'
    import { useDispatch } from 'react-redux'
    import { addTodo } from '../../features/todos/todoSlice'

    function AddTodo() {
      const [text, setText] = useState('')
      const dispatch = useDispatch()

      const handleAdd = () => {
        if (!text.trim()) return
        dispatch(addTodo({ text }))
        setText('')
      }

      return (
        <div className="flex gap-2 mt-4">
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter todo..."
            className="border px-3 py-2 rounded-md w-full"
          />
          <button
            onClick={handleAdd}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Add
          </button>
        </div>
      )
    }

    export default AddTodo
    ```

9.  **Todos Component (`components/todos/Todos.jsx`):**

    ``` jsx
    import { useSelector, useDispatch } from 'react-redux'
    import { removeTodo } from '../../features/todos/todoSlice'

    function Todos() {
      const todos = useSelector((state) => state.todos.todos)
      const dispatch = useDispatch()

      return (
        <ul className="mt-4 space-y-2">
          {todos.map((todo) => (
            <li key={todo.id} className="flex justify-between items-center bg-gray-100 p-2 rounded-md">
              <span>{todo.text}</span>
              <button
                onClick={() => dispatch(removeTodo({ id: todo.id }))}
                className="text-red-500 hover:text-red-700"
              >
                ❌
              </button>
            </li>
          ))}
        </ul>
      )
    }

    export default Todos
    ```

10. **App.jsx**

    ``` jsx
    import AddTodo from './components/todos/AddTodo'
    import Todos from './components/todos/Todos'

    function App() {
      return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
          <h1 className="text-2xl font-bold mb-4 text-center">Redux Toolkit Todo App</h1>
          <AddTodo />
          <Todos />
        </div>
      )
    }

    export default App
    ```

------------------------------------------------------------------------

## 🧠 Learning Focus

-   Understanding Redux Toolkit slice structure\
-   Using `createSlice`, `nanoid`, and `useDispatch` / `useSelector`
    hooks\
-   Clean state mutation with Immer under the hood\
-   Managing UI state using Redux instead of local state

------------------------------------------------------------------------

## 🧩 Future Enhancements

-   Todo completion toggle ✅\
-   Persist todos in LocalStorage\
-   Filtering (All / Active / Completed)\
-   Dark mode with Tailwind theme switcher

------------------------------------------------------------------------

## 📄 License

This project is for **educational purposes** --- feel free to use and
modify!

------------------------------------------------------------------------

**Author:** \Darshan KC\
**Tech Stack:** React 19 + Redux Toolkit + Tailwind CSS