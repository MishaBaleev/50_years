import React, {Component} from "react";
import "./header.css";
import logo from "./img/logo.png";

class Header extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="header">
                <button className={"but "+(this.props.cur_cmp==0?"active":"")} onClick={() => {this.props.changeCMP(0)}}>Сорта</button>
                <button className={"but "+(this.props.cur_cmp==1?"active":"")} onClick={() => {this.props.changeCMP(1)}}>Справочник</button>
                <button className={"but "+(this.props.cur_cmp==2?"active":"")} onClick={() => {this.props.changeCMP(2)}}>Контакты</button>
                <img src={logo} className="logo"/>
            </div>
        )
    }
}

export default Header