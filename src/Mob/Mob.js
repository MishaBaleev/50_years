import React, {Component} from "react";
import "./mob.css";
import Header_mob from "./Header_mob/Header_mob";
import Sorts_mob from "./Sorts_mob/Sorts_mob";
import Docs_mob from "./Docs_mob/Docs_mob";
import Contacts_mob from "./Contacts_mob/Contacts_mob";

class Mob extends Component{
    constructor(props){
        super(props)
        this.state = {
            cur_back: 0,
            active_cmp: 0
        }
        this.cmps = [
            <Sorts_mob/>,
            <Docs_mob/>,
            <Contacts_mob/>
        ]
        this.changeBack = this.changeBack.bind(this) 
        this.changeCmp = this.changeCmp.bind(this)
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

    changeCmp(value){
        this.setState({
            active_cmp: value
        })
    }

    render(){
        let back_arr = new Array(7).fill(0)
        let cur_cmp = this.cmps[this.state.active_cmp]
        return(
            <div className="mob">
                <div className="main_back"></div>
                {back_arr.map((item, index) => {
                    return <div key={index}
                        className={"back "+"img_"+index+" "+((this.state.cur_back==index)?"active":"")}
                    />
                })}
                <Header_mob
                    changeCmp={this.changeCmp}
                />
                {cur_cmp}
            </div>
        )
    }
}

export default Mob