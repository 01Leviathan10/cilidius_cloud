import React,{Component} from 'react';
import Loader from "react-loader-spinner";


class PageLoader extends Component {
    state = {
      loading: true
    };
  
    componentDidMount() {
      this.setState({ loading: false }); 
    }
    
    render() {
      const { loading } = this.state;
      
      if(loading) {  
        return null; 
      }
      
      return (
            <div className="center">
                <Loader type="Bars" color="#somecolor" height={80} width={80} />
            </div>
        ); 
    }
  }
  
  export default PageLoader;