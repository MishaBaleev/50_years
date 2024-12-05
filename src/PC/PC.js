import React, {Component} from "react";
import "./pc.css";
import Header from "./Header/Header";
import Sorts from "./Sorts/Sorts";
import Docs from "./Docs/Docs";
import Contacts from "./Contacts/Contacts";
import Footer from "./Footer/Footer";

class PC extends Component{
    constructor(props){
        super(props)

        this.cmps = [
            <Sorts/>,
            <Docs/>,
            <Contacts/>
        ]

        this.state = {
            cur_cmp: 0,
            cur_back: 0
        }

        this.changeCMP = this.changeCMP.bind(this)
        this.changeBack = this.changeBack.bind(this)
    }

    changeCMP(value){
        this.setState(state => ({
            cur_cmp: value
        }))
    }

    changeBack(){
        setTimeout(() => {
            let cur_back = this.state.cur_back + 1
            if (cur_back == 7){cur_back = 0}
            this.setState(state => ({
                cur_back: cur_back
            }))
            this.changeBack()
        }, 8000)
    }

    componentDidMount(){
        this.changeBack()
    }

    render(){
        let cur_cmp = this.cmps[this.state.cur_cmp]
        let back_arr = new Array(7).fill(0)
        return(
            <div className="pc">
                <div className="main_back"></div>
                {back_arr.map((item, index) => {
                    return <div key={index}
                        className={"back "+"img_"+index+" "+((this.state.cur_back==index)?"active":"")}
                    />
                })}
                <Header
                    changeCMP={this.changeCMP}
                    cur_cmp={this.state.cur_cmp}
                />
                <div className="main">{cur_cmp}</div>
                <Footer/>
            </div>
        )
    }
}

export default PC