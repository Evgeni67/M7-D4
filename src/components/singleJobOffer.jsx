import React from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Modal,
  Form,
  Card,
} from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../styles/search.css";
import { connect } from "react-redux";
import { BsStarFill } from "react-icons/bs";
import { AiOutlineStar } from "react-icons/ai";
const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => ({
  addToFavourites: (id) =>
    dispatch({
      type: "ADD_JOB_TO_FAVOURITES",
      payload: id,
    }),
  removeFromFavourites: (id) =>
    dispatch({
      type: "REMOVE_JOB_FROM_FAVOURITES",
      payload: id,
    }),
    changeCurrentJob: (job) =>
    dispatch({
      type: "CHANGE_CURRENT_JOB",
      payload: job,
    }),
});

class SingleJobOffer extends React.Component {
  addToFav = (job) => {
    this.setState({ clickedStar: true });
    this.props.addToFavourites(job);
  };
  removeFromFav = (job) => {
    this.setState({ clickedStar: false });
    this.props.removeFromFavourites(job.id);
  };
  state = { clickedStar: false, currentJob:{} };
  render() {
    return (
      <>
        <Col className="d-flex justify-content-center flex-col" sm={4}>
          <Card>
            <Card.Header as="h5">
              <Row>
                <Col sm={10}>
              {this.props.job.title.slice(0, 16)}...{" "}
              </Col>
              
              <Col sm={2}>
              {!this.props.fromSearch ? (
                <BsStarFill
                  onClick={() => this.removeFromFav(this.props.job)}
                />
              ) : (
                <AiOutlineStar onClick={() => this.addToFav(this.props.job)} />
              )}
              </Col>
              </Row>
            </Card.Header>
            <Card.Body>
            <Card.Text>Compnay: <strong>{this.props.job.company.slice(0, 16)}</strong></Card.Text>
              <img className="companyImage" src={this.props.job.company_logo} />
              <Card.Text> 
              </Card.Text>
              <Link to="/jobDetails">
                <Button
                  variant="primary"
                  onClick={() => this.props.changeCurrentJob(this.props.job)}
                >
                  View Job
                </Button>
              </Link>
              

           
            </Card.Body>
          </Card>

          
        </Col>
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleJobOffer);
