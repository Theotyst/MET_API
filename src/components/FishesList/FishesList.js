import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import FishRow from '../FishRow/FishRow'
import styles from './FishesList.module.css'
import Container from 'react-bootstrap/Container'
import Spinner from 'react-bootstrap/Spinner'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { fetchFishes } from '../../services/fishes/fishesSlice';

const FishesList = () => {
  const dispatch = useDispatch()
  const fishesFetchingStatus = useSelector(state => state.fishes.fetchingStatus);
  const displayedFishes = useSelector(state => state.pagination.currentIndexes.map(index => state.fishes.data[index]))
  const error = useSelector(state => state.fishes.error)

  useEffect(() => {
    if (fishesFetchingStatus === 'idle') {
      dispatch(fetchFishes())
    } 
  }, [fishesFetchingStatus, dispatch])
  
  let content 
  if (fishesFetchingStatus === 'loading') {
    <Spinner animation="border" />
    content = <div> Please wait, fishes are swimming towards here </div>
  } else if (fishesFetchingStatus === 'succeeded') {
    const listItems = displayedFishes.map((fish, index) => {
      return <FishRow key={index} fish={fish} />
    })
    content = (
      <Container className={styles.table}>
        <Row className={styles.headerRow}>
          <Col xs={3}> Illustration </Col>
          <Col xs={2}> Name </Col>
          <Col xs={2} className="scientificName"> Scientific name</Col>
          <Col xs={3} className="availability"> Availability period </Col>
          <Col xs={2} className="description"> Harvest type </Col>
        </Row>
        {listItems}
      </Container>
    )
  } else if (fishesFetchingStatus === 'failed') {
    content = <div> {error} </div>
  }
  
  return (
    
    <div className={styles.FishesList} data-testid="FishesList">
      {content}
    </div>
  )
}

export default FishesList
