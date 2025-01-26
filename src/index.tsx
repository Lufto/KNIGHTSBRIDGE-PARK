import { ThemeProvider } from 'app/providers/ThemeProvider'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import store from 'shared/store'
import App from './app/App'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider>
          <App/>
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);


