import React from 'react';
import { useSelector } from 'react-redux'
import FishRow from '../FishRow/FishRow'
import styles from './FishesList.module.css'
import Container from 'react-bootstrap/Container'

const selectFishes = state => state.fishes

const FishesList = () => {
  const fishes = useSelector(selectFishes)
  const listItems = fishes.map((fish, index) => {
    return <FishRow key={index} fish={fish} />
  })

  return (
    <Container className={styles.FishesList} data-testid="FishesList">
      {listItems}
    </Container>
  )
};

export default FishesList;
