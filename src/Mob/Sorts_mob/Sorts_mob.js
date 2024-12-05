import React, {Component} from "react";
import "./sorts_mob.css";
import data from "../../data/main_sorts.json";
import SortCard_mob from "./SortCard_mob/SortCard_mob";
import Fedor from "../../PC/Sorts/img/Федор.jpg";
import Mone from "../../PC/Sorts/img/Монэ.jpg";
import Vek from "../../PC/Sorts/img/Век.jpg";
import Alex from "../../PC/Sorts/img/Алексеич.jpg";
import Tavr from "../../PC/Sorts/img/Таврида.jpg";
import Kuban from "../../PC/Sorts/img/Кубань.jpg";
import T_150 from "../../PC/Sorts/img/Т 150.jpg";
const images = {
    "Федор": Fedor,
    "Монэ": Mone,
    "Век": Vek,
    "Алексеич": Alex, 
    "Таврида": Tavr,
    "Кубань": Kuban,
    "Т 150": T_150
}

class Sorts_mob extends Component{
    constructor(props){
        super(props)

        this.state = {
            sorts: [],
            cur_card: null
        }

        this.setCurCard = this.setCurCard.bind(this)
    }

    componentDidMount(){
        data.map(item => {
            item.image_path = images[item.name]
        })
        this.setState({
            sorts: data
        })
    }

    setCurCard(value){
        this.setState(state => ({
            cur_card: value
        }))
        let sorts = document.querySelector(".list")
        sorts.classList.toggle("hidden")
    }

    render(){
        return <div className="sorts_mob">
             <ul className="list">
                    {this.state.sorts.map((item, index) => {
                        return <li key={index} onClick={() => {this.setCurCard(index)}}>
                            <img src={item.image_path}/>
                            <h3 className="name">{item.name}</h3>
                        </li>
                    })}
                </ul>
                {this.state.cur_card==null?"":
                    <SortCard_mob
                        data={this.state.sorts[this.state.cur_card]}
                        setCurCard={this.setCurCard}
                    />
                }
        </div>
    }
}

export default Sorts_mob