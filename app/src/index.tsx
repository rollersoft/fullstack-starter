import React from "react"
import ReactDOM from "react-dom"
import "./index.scss"
import App from "./App"
import { Provider as Redux } from "react-redux"
import { BaseProvider } from "./context/base"
import { BrowserRouter } from "react-router-dom"
import { store } from "./store"

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.REACT_APP_URL_PREFIX}>
      <Redux store={store}>
        <BaseProvider>
          <App />
        </BaseProvider>
      </Redux>
    </BrowserRouter>
  </React.StrictMode>,

  document.getElementById("root")
)
