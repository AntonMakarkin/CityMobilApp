import React from 'react'
import './Error.css'

const Error = () => {
    return (
        <div className="error_message">
            <div className="error_text">
                <h1>Ошибка</h1>
                <p>Проверьте соединение с интернетом</p>
            </div>
        </div>
    )
}

export default Error