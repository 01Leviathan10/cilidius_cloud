// import React,{ Component } from "react";
// import {Modal, Button, Col, ListGroup, ListGroupItem} from "react-bootstrap";
// import { BASE_URL } from '../../src/constants.js';
// import $ from "jquery";
// import PageLoader from '../common/pageLoader.jsx';

// // import '../../assets/css/modal.css';
 

//  export default class BodyModal extends Component {
//   constructor(props, context) {
//     super(props, context);
//     this.state = {
//         show: false,
//         dataBody:[]
//       };

//     this.handleShow = this.handleShow.bind(this);
//     this.handleClose = this.handleClose.bind(this);
//   }

//   componentDidMount() {
//     this.fetchData();
// }

// fetchData() {
//     $.ajax({
//         url: BASE_URL,
//         dataType: "jsonp",
//         //jsonpCallback: "logResults",
//         success: (result => {
//             const dataBody = result.data;
//             this.setState({dataBody})
//         }),
//         fail: (err) => console.log(err)
//     });
// }



//   handleClose() {
//     this.setState({ show: false });
//   }

//   handleShow() {
//     this.setState({ show: true });
//   }



//   render() {
//     const allBody = this.state.dataBody.length !== 0 ?                        
//     this.state.dataBody.map((item)=>(
//         <div key={item.id}>
//             <Col sm={6} lg={4}>
//                 <ListGroup>
//                     <ListGroupItem>
//                         {item.name}
//                         <br />
//                         {item.description}
//                     </ListGroupItem>
//                 </ListGroup>         
//             </Col>
//         </div>
//     ))
//     : <PageLoader />
//     return (
//       <div>
//         <Button bsStyle="primary" bsSize="large"  onClick={this.handleShow}>
//           Dodatne informacije
//         </Button>

//         <Modal show={this.state.show} onHide={this.handleClose}>
//           <Modal.Header>
//             <Modal.Title >DATA</Modal.Title>
//           </Modal.Header>
//           <Modal.Body>
//             {allBody}
//           </Modal.Body>
//           <Modal.Footer>
//               <Button bsStyle="link" onClick={this.handleClose}>
//                 CLOSE
//               </Button> 
//           </Modal.Footer>
//         </Modal>
//       </div>
//     );
//   }
// }
