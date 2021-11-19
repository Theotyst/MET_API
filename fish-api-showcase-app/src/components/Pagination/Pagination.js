import React from "react"
import styles from './Pagination.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { updateCurrentPage } from '../../services/pagination/paginationSlice';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Container from "react-bootstrap/esm/Container"


const Pagination = () => {
    const dispatch = useDispatch()
    const {pageCount, itemsPerPage, currentPage} = useSelector(state => {
        return {pageCount: state.pagination.pageCount, itemsPerPage: state.pagination.itemsPerPage, currentPage: state.pagination.currentPage}
    })

    const handleClick = (pageNumber) => {
      dispatch(updateCurrentPage(pageNumber))
    }

    const pageItems = [...Array(pageCount).keys()]
        .map(index => index + 1)
        .map((pageNumber, index) => {
            return <Button key={index} as={Col} variant="outline-primary" disabled={pageNumber === currentPage} onClick={() => handleClick(pageNumber)}>{pageNumber}</Button>
        })

    return (
        <div className={styles.Pagination} data-testid="Pagination">
            <Container>
                <Row>
                    {pageItems}
                </Row>
            </Container>
        </div>
    )
}

export default Pagination