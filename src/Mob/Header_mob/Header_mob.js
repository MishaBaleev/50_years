import React, {Component} from "react";
import "./header_mob.css";
import logo from "../../PC/Header/img/logo.png";

class Header_mob extends Component{
    constructor(props){
        super(props)

        this.state = {
            is_active: ""
        }

        this.changeActive = this.changeActive.bind(this)
    }

    changeActive(){
        if (this.state.is_active == "" || this.state.is_active == "unactive"){
            this.setState({
                is_active: "active"
            })
        }else{
            this.setState({
                is_active: "unactive"
            })
        }
    }

    render(){
        let menu_rects = Array(4).fill(0)
        return <div className="header_mob">
            <div className="main">
                <img src={logo}/>
                <button className="menu" onClick={this.changeActive}>
                    {menu_rects.map((item, index) => {
                        return <div key={index}></div>
                    })}
                </button>
            </div>
            <ul className={"left_menu "+this.state.is_active}>
                <li onClick={() => {this.props.changeCmp(0); this.changeActive()}}>Сорта</li>
                <li onClick={() => {this.props.changeCmp(1); this.changeActive()}}>Справочник</li>
                <li onClick={() => {this.props.changeCmp(2); this.changeActive()}}>Контакты</li>
            </ul>
        </div>
    }
}

export default Header_mob