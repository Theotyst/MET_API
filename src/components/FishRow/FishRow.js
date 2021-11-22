import React from 'react'
import { useState } from 'react'
import styles from './FishRow.module.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ReactHtmlParser from 'react-html-parser'

function retrieveImgData(gallery) {
  let imgData = {
    src: "https://www.afma.gov.au/sites/default/themes/custom/img/species-placeholder.png",
    alt: "Fish image placeholder"
  }
  if (gallery) {
    if (gallery[0]) {
      imgData = gallery[0]
    } else {
    imgData = gallery
    }
  }
  return imgData
}

const FishRow = ({fish}) => {
  console.log(fish)

  const [detailsDisplayed, setDetailsDisplayed] = useState(false)
  const toggleDetails = () => setDetailsDisplayed(!detailsDisplayed);

  const details = (
    <Col className={styles.details}>
      coucou
    </Col>
  )


  return (
  <Row className={"align-items-center "+ styles.FishRow + ' ' + (detailsDisplayed && styles.active)} data-testid="FishRow" onClick={toggleDetails}>
      <Col xs={3} className={styles.avatar}><img src={fish["Species Illustration Photo"].src} alt={fish["Species Illustration Photo"].alt}/></Col>
      <Col xs={2} className="name">{fish["Species Name"]}</Col>
      <Col xs={2} className="scientificName">{fish["Scientific Name"]}</Col>
      <Col xs={3} className="availability">{ReactHtmlParser(fish["Availability"])}</Col>
      <Col xs={2} className="description">{fish["Harvest Type"]}</Col>
      {detailsDisplayed && details}
  </Row>
  )
}

export default FishRow
