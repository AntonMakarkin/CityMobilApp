import React from 'react'
import DetailRowView from '../DetailRowView/DetailRowView'
import ReactPaginate from 'react-paginate'
import TableSearch from '../TableSearch/TableSearch'
import Sidebar from '../Sidebar/Sidebar'
import './Table.css'

const Table = ({ data, fullData, sortField, sort, onSort, onRowSelect, info, setPage, currentPage, onSearch, pageCount }) => {
    const tariffs_list = ["Эконом", "Комфорт", "Комфорт+", "Минивен", "Бизнес"]
    const pageSize = 15
    let sortSign

    const pageChangeHandler = ({ selected }) => {
        setPage(selected)
    }

    if (sort === 'asc') {
        sortSign = '&#8593'
    } else {
        sortSign = '&#8595'
    }

    return (
        <main className="main">
            <Sidebar/>
            <div className="data_row_view">
                <TableSearch 
                onSearch={onSearch}/>
                <table className="table">
                    <thead>
                        <tr>
                            <th onClick={onSort.bind(null, 'mark')} className="CarMark">
                                Марка и модель {sortField === 'mark' ? <small dangerouslySetInnerHTML={{__html:sortSign}}/> : null}
                            </th>
                            <th>Эконом</th>
                            <th>Комфорт</th>
                            <th>Комфорт +</th>
                            <th>Минивен</th>
                            <th>Бизнес</th>
                        </tr>    
                    </thead>
                    <tbody>
                        {data.map((item, i) => (
                            <tr key={i} onClick={onRowSelect.bind(null, item)}>
                                <td>{`${item.mark} ${item.model}`}</td>
                                <td>{item.tariffs[tariffs_list[0]]?.year}</td>
                                <td>{item.tariffs[tariffs_list[1]]?.year}</td>
                                <td>{item.tariffs[tariffs_list[2]]?.year}</td>
                                <td>{item.tariffs[tariffs_list[3]]?.year}</td>
                                <td>{item.tariffs[tariffs_list[4]]?.year}</td>
                            </tr>
                        ))}    
                    </tbody>           
                </table>
                {fullData.length > pageSize 
                    ? <ReactPaginate
                    previousLabel={'<'}
                    nextLabel={'>'}
                    breakLabel={'...'}
                    breakClassName={'break-me'}
                    pageCount={pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={pageChangeHandler}
                    containerClassName={'pagination'}
                    activeClassName={'active'}
                    pageClassName="page-item"
                    pageLinkClassName="page-link"
                    previousClassName="page-item"
                    nextClassName="page-item"
                    previousLinkClassName="page-link"
                    nextLinkClassName="page-link"
                    forcePage={currentPage}
                /> : null}
                <DetailRowView car={info}/>
            </div>
        </main>
    )
}

export default Table
