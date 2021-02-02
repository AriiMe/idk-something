/** @format */

import React, { Component } from "react";
import Button from "react-bootstrap/Button";

class JobDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      job: null,
    };
  }

  componentDidUpdate(prevProps) {
    this.setState({
      job: this.props.jobs.find((job) => job.id),
    });
  }

  render() {
    return this.state.job ? (
      <div className="col-md-8">
        <div className="row mt-2">
          <div className="col-sm-12">
            <h1>{this.state.job.title}</h1>
            <h2>{this.state.job.company}</h2>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-sm-5 mt-3">
            <img
              className="job-cover"
              src={this.state.job.company_url}
              alt="job selected"
            />
          </div>
          <div className="col-sm-7">
            <p>
              <span className="font-weight-bold">Description:</span>{" "}
              {this.state.job.description}
            </p>

            <a href={this.state.job.url} />
          </div>
        </div>
      </div>
    ) : (
      <div className="col-sm-8">
        <div className="row mt-2">
          <div className="col-sm-12">
            <h3>Please select a job!</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default JobDetail;
