import React from 'react';
import { useSelector } from 'react-redux'
import styles from './FishRow.module.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



const FishRow = ({fish}) => {
  return (
  <Row className={styles.FishRow} data-testid="FishRow">
    <Col className="name">{fish["Species Name"]}</Col>
    <Col className="scientific_name">{fish["Scientific Name"]}</Col>
  </Row>
  )
}

export default FishRow
