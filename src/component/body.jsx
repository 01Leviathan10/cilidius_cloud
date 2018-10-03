import React, { Component } from 'react';
import PageLoader from '../common/pageLoader';
import { BASE_URL } from '../../src/constants.js';
import {Col, Grid, Row, ListGroup, ListGroupItem, FormGroup, FormControl} from 'react-bootstrap';
import $ from "jquery";
import '../assets/css/body.css';
//import BodyModal from '../common/modal';


export default class Body extends Component {
    constructor(props) {
        super(props);
        this.state={
            dataBody:[],
            search: ""
        }
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        $.ajax({
            url: BASE_URL,
            dataType: "jsonp",
            //jsonpCallback: "logResults",
            success: (result => {
                const dataBody = result.data;
                this.setState({dataBody})
            }),
            fail: (err) => console.log(err)
        });
    }
    updateSearch(event) {
        this.setState({search: event.target.value.substr(0,20)});
    }
    render() {
        let filterBody = this.state.dataBody.filter(
            (item) => {
                return item.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
            });
        const allBody = this.state.dataBody.length !== 0 ?
            filterBody.map((item)=>(
                        <div key = {item.id}>
                            <Col sm={6} lg={4}>
                                <ListGroup>
                                    <ListGroupItem>
                                        {item.name}
                                        <br />
                                        {item.local_date} {item.local_time}
                                    </ListGroupItem>
                                </ListGroup>
                            </Col>    
                        </div>
                    ))
                    : <PageLoader/>
        return(
            <Grid>
                <Row>
                    <FormGroup className="search box-style">
                    <FormControl 
                        type = "text" 
                        placeholder = "Search"
                        onChange = {this.updateSearch.bind(this)}
                        value = {this.state.search}   
                    />
                    </FormGroup>{' '}
                    <ListGroup>
                        {allBody}
                    </ListGroup>
                </Row>    
            </Grid>
        )};
}