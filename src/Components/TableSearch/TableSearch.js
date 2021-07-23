import React, { useState } from 'react'
import './TableSearch.css'

const TableSearch = ({ onSearch }) => {
    const [value, setValue] = useState('')
    const valueChangeHandler = e => {
        setValue(e.target.value)
    }
    return (
        <div className="input_wrapper">
            <input 
                type="text"
                placeholder="Поиск"
                className="search_input"
                onChange={valueChangeHandler} 
                value={value}
            />
            <div>
                 <button className="btn_search" onClick={() => onSearch(value)}>Найти</button>
            </div>
        </div>
    )
}

export default TableSearch
