import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import FishRow from '../FishRow/FishRow'
import styles from './FishesList.module.css'
import Container from 'react-bootstrap/Container'
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
    content = <div> Please wait, fishes are swimming towards here </div>
  } else if (fishesFetchingStatus === 'succeeded') {
    const listItems = displayedFishes.map((fish, index) => {
      return <FishRow key={index} fish={fish} />
    })
    content = (
      <Container>
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
