/** @format */
import React, { Component } from "react";
import { Card, Row, Col } from "react-bootstrap";

export default class JobList extends Component {
  render() {
    return (
      <Row>
        <Col xs={8}>
          <Card className="w-50 text-center">
            {console.log(this.props.top)}
            <Card.Img
              variant="top"
              style={{ maxHeight: "300px", objectFit: "cover" }}
              className="p-2"
              src={this.props.job.company_logo}
            />
            <Card.Body>
              <Card.Title className="jobTitleCard">
                {this.props.job.title}
              </Card.Title>
              <Card.Text>
                {this.props.job.location}, {this.props.job.type}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    );
  }
}
