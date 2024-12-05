import React, {Component} from "react";
import "./footer.css";

class Footer extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="footer">
                <span>ООО “Колхоз “50 Лет Октября” 2024</span>
            </div>
        )
    }
}

export default Footer