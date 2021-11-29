import React from "react"
import styles from './PaginationComponent.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { updateCurrentPage, updateItemsPerPage } from '../../services/pagination/paginationSlice';
import Pagination from 'react-bootstrap/Pagination'
import Form from 'react-bootstrap/Form'



const PaginationComponent = () => {
    const dispatch = useDispatch()
    const {pageCount, currentPage} = useSelector(state => {
        return {pageCount: state.pagination.pageCount, currentPage: state.pagination.currentPage}
    })

    const handleClick = (pageNumber) => {
      dispatch(updateCurrentPage(pageNumber))
    }

    const items = [...Array(pageCount).keys()]
        .map(index => index + 1)
        .map((pageNumber, index) => {
            return <Pagination.Item key={index} active={pageNumber === currentPage} onClick={() => handleClick(pageNumber)}> {pageNumber} </Pagination.Item>
            //<Button key={index} as={Col} variant="outline-primary" disabled={pageNumber === currentPage} onClick={() => handleClick(pageNumber)}>{pageNumber}</Button>
        })

    return (
        <div className={styles.paginationContainer} data-testid="Pagination">
            <Pagination>
            <Pagination.First onClick={() => handleClick(1)} />
            <Pagination.Prev onClick={() => handleClick(currentPage - 1)}/>
            {items}
            <Pagination.Next onClick={() => handleClick(currentPage + 1)} />
            <Pagination.Last onClick={() => handleClick(pageCount)}/>
            </Pagination>

            <Form.Select className={styles.numberOfItemsSelect} aria-label="Select number of items per page" onChange={(event) => {dispatch(updateItemsPerPage(parseInt(event.target.value)))}}>
                <option value="5">5</option>
                <option value="10" selected="selected">10</option>
                <option value="25">25</option>
            </Form.Select> <label className={styles.numberOfItemsLabel}> items per page </label>
        </div>
    )
}

export default PaginationComponent