import React, { useEffect, useState } from 'react'
import Header from './Components/Header/Header'
import Table from './Components/Table/Table'
import Footer from './Components/Footer/Footer'
import Loader from './Components/Loader/Loader'
import Error from './Components/Error/Error'
import _ from 'lodash'
import './App.css'

const App = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [sort, setSort] = useState('asc')
    const [sortFieldState, setSortFieldState] = useState('mark')
    const [row, setRow] = useState(null)
    const [currentPage, setCurrentPage] = useState(0)
    const [search, setSearch] = useState('')
    const pageSize = 15
    let displayData = _.chunk(data, pageSize)[currentPage]

    const getData = async () => {
        await fetch(`https://city-mobil.ru/api/cars`)
        .then(response => response.json())
            .then(data => {
                setData(_.orderBy(data.cars, sortFieldState, sort))
                setLoading(false)
            })
            .catch(error => {
                console.log(error)
                setLoading(false)
        })
    }

    const onSort = sortField => {
        const cloneData = data.concat()
        const sortType = sort === 'asc' ? 'desc' : 'asc'
        const orderedData = _.orderBy(cloneData, sortField, sortType)

        setData(orderedData)
        setSort(sortType)
        setSortFieldState(sortField)
    }

    const onRowSelect = row => {
        setRow(row)
    }

    const searchHandler = search => {
        setSearch(search)
        setCurrentPage(0)
    }

    const getFilteredData = () => {
        const dataForFilter = data
        const searchStr = search

        if (!searchStr) {
            return dataForFilter
        }

        const filteredData = dataForFilter.filter(item => {
            return item['mark'].toLowerCase().includes(searchStr.toLowerCase()) || 
            item['model'].toLowerCase().includes(searchStr.toLowerCase())
        })

        if (filteredData.length === 0) {
            return dataForFilter
        }

        return filteredData
    }

    const filteredData = getFilteredData()
    const pageCount = Math.ceil(filteredData.length / pageSize)
          displayData = _.chunk(filteredData, pageSize)[currentPage]

    useEffect(() => {
        getData()
    }, [])

    return (
        <>
        <Header/>
        {(typeof displayData != 'undefined') ? (
            <Table data={displayData}
                   sort={sort}
                   sortField={sortFieldState}
                   onSort={onSort}
                   onRowSelect={onRowSelect}
                   info={row}
                   setPage={setCurrentPage}
                   currentPage={currentPage}
                   fullData={data}
                   onSearch={searchHandler}
                   pageCount={pageCount}/>
        ):(
            loading ? <Loader/> : <Error/>
        )}
        <Footer/>
        </>
    )
}

export default App

