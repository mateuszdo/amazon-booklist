import React from 'react'
import ReactDOM from 'react-dom/client'
import Booklist from './Booklist.js'
import css from './index.css'


export const App = () => {
    return (
        <div>
            <Booklist />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />);