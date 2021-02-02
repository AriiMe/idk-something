/** @format */

import React, { Component } from "react";
import Container from "react-bootstrap/Container";

class JobDetail extends Component {
  htmlDesc = () => {
    return { __html: this.props.job.description };
  };
  htmlApply = () => {
    return { __html: this.props.job.how_to_apply };
  };

  render() {
    return this.props.job ? (
      <Container>
        <div className="col-md-8 mt-5">
          <div className="row mt-2">
            <div className="col-sm-12">
              <h1 className="mt-5">{this.props.job.title}</h1>
              <h2 className="mt-2">{this.props.job.company}</h2>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-sm-5 mt-3">
              <img
                className="job-cover"
                src={this.props.job.company_logo}
                alt="job selected"
              />
            </div>

            <div className="col-sm-7">
              <span className="font-weight-bold">Job Description:</span>{" "}
              <div dangerouslySetInnerHTML={this.htmlDesc()}></div>
              <a href={this.props.job.url} />
            </div>
          </div>
        </div>
      </Container>
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
