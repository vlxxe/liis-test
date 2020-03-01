import React, { useState } from "react"
import { Provider } from "react-redux"
import { CSSTransition } from "react-transition-group"

import "./App.css"
import { store } from "./store/store.js"
import { RegisterForm } from "./components/RegisterForm"

function App() {
  const [showForm, setShowForm] = useState(true)

  return (
    <Provider store={store}>
      <div className="container">
        <CSSTransition
          in={showForm}
          timeout={500}
          classNames="registerForm"
          unmountOnExit
          onExited={() => setShowForm(false)}
        >
          <RegisterForm setShowForm={setShowForm} />
        </CSSTransition>

        <img
          src="./img/rocket.svg"
          alt="recoket-img"
          className={showForm ? "rocket-right" : "rocket-fullscren"}
        />
      </div>
    </Provider>
  )
}

export default App
