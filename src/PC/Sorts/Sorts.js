import React, {Component} from "react";
import "./sorts.css";
import SortCard from "./SortCard/SortCard";
import data from "../../data/main_sorts.json"
import Fedor from "./img/Федор.jpg";
import Mone from "./img/Монэ.jpg";
import Vek from "./img/Век.jpg";
import Alex from "./img/Алексеич.jpg";
import Tavr from "./img/Таврида.jpg";
import Kuban from "./img/Кубань.jpg";
import T_150 from "./img/Т 150.jpg";
const images = {
    "Федор": Fedor,
    "Монэ": Mone,
    "Век": Vek,
    "Алексеич": Alex, 
    "Таврида": Tavr,
    "Кубань": Kuban,
    "Т 150": T_150
}

class Sorts extends Component{
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
    }

    render(){
        return(
            <div className="sorts">
                <ul className="list">
                    {this.state.sorts.map((item, index) => {
                        return <li key={index}>
                            <div onClick={() => {this.setCurCard(index)}}>
                                <img src={item.image_path}/>
                                <h3 className="name">{item.name}</h3>
                            </div>
                        </li>
                    })}
                </ul>
                {this.state.cur_card==null?"":
                    <SortCard
                        data={this.state.sorts[this.state.cur_card]}
                        setCurCard={this.setCurCard}
                    />
                }
            </div>
        )
    }
}

export default Sorts