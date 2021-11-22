import React from "react"
import styles from './PaginationComponent.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { updateCurrentPage } from '../../services/pagination/paginationSlice';
import Pagination from 'react-bootstrap/Pagination'


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
        <div className={styles.PaginationComponent} data-testid="Pagination">
            <Pagination>
             <Pagination.First onClick={() => handleClick(1)} />
             <Pagination.Prev onClick={() => handleClick(currentPage - 1)}/>
             {items}
             <Pagination.Next onClick={() => handleClick(currentPage + 1)} />
             <Pagination.Last onClick={() => handleClick(pageCount)}/>
             </Pagination>
        </div>
            // <Container>
            //     <Row>
            //         {pageItems}
            //     </Row>
            // </Container>
            // <Container>
            //     <Row>
            //         <Col>
                        
            //         </Col>
            //     </Row>
            // </Container>
        
    )
}

export default PaginationComponent