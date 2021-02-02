/** @format */

import { React, Component } from "react";
import {
  Container,
  Col,
  Row,
  InputGroup,
  FormControl,
  Button,
} from "react-bootstrap";

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      results: {},
      loading: false,
      message: "",
      job: "",
      location: "",
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
  };

  fetchJobs = async () => {
    try {
      let response = await fetch(
        `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=${this.state.job}&location=${this.state.location}`
      );
      let jobList = await response.json();
      this.setState({ jobList: jobList });
      console.log(jobList);
    } catch (error) {
      console.log(error);
    }
  };
  handleOnInputChange = (event) => {
    const query = event.target.value;
    // this.setState(
    //   {
    //     query: event.target.value,
    //   },
    //   () => console.log(this.state.query)
    // );
    if (!query) {
      this.setState({
        query,
        results: {},
        message: "",
        totalPages: 0,
        totalResults: 0,
      });
    } else {
      this.setState({ query, loading: true, message: "" }, () => {
        this.fetchJobs(1, query);
      });
    }
  };
  render() {
    const { query } = this.state;
    return (
      <div>
        <Container className="mt-5">
          <h2>Search for jobs in your area</h2>
          <Row className="mt-3">
            <Col xs={8}>
              <InputGroup className="mb-3">
                <FormControl
                  placeholder="Position"
                  name="query"
                  aria-label="Position"
                  aria-describedby="basic-addon1"
                  value={query}
                  onChange={this.handleOnInputChange}
                />
              </InputGroup>
            </Col>
            <Col xs={4}>
              <InputGroup className="mb-3">
                <FormControl
                  placeholder="Location"
                  name="query"
                  aria-label="Location"
                  aria-describedby="basic-addon1"
                  value={query}
                  onChange={this.handleOnInputChange}
                />
              </InputGroup>
            </Col>
          </Row>
          <Button
            variant="primary"
            style={{ borderRadius: "100px" }}
            className="w-100"
            type="submit"
          >
            Search
          </Button>
        </Container>
      </div>
    );
  }
}
