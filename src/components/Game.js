import React from 'react'
import { Card, CardHeader, CardBody, CardImg, Row, Col, Container } from 'shards-react'
import Team from './Team'

const Game = (props) => {
 
  const {_id, Away, Home, AwayTeam, HomeTeam} = props.data


  return (
    <Container>
      <Card sm={{ size: 8, order: 2, offset: 2 }} className="gamecard" id={_id}>
        <CardHeader>
            <CardBody>
            <Row>
              <Col xs="6">
                  <Team abr={Away} _id={AwayTeam}/>
                </Col>
                <Col xs="6">
                  <Team abr={Home} _id={HomeTeam}/>
                </Col>
              </Row>
            </CardBody>
        </CardHeader>
      </Card>
    </Container>
  )
}

export default Game