import React, {Component} from "react";
import "./sortCard_mob.css";
import base_information from "../../../PC/Sorts/SortCard/img/base_information.png";
import triggers from "../../../PC/Sorts/SortCard/img/triggers.png";
import productivity from "../../../PC/Sorts/SortCard/img/productivity.png";
import characteristic from "../../../PC/Sorts/SortCard/img/characteristic.png";
import weather from "../../../PC/Sorts/SortCard/img/weather.png";
import zone from "../../../PC/Sorts/SortCard/img/zone.png";
import time from "../../../PC/Sorts/SortCard/img/time.png";
import norm from "../../../PC/Sorts/SortCard/img/norm.png"

class SortCard_mob extends Component{
    constructor(props){
        super(props)

        this.state = {
            is_closing: ""
        }

        this.closeWindow = this.closeWindow.bind(this)
    }

    closeWindow(){
        this.setState(state => ({
            is_closing: "closing"
        }), () => {
            setTimeout(() => {this.props.setCurCard(null)}, 400)
        })
    }

    render(){
        return <div className={"sort_card_mob "+this.state.is_closing}>
            <div className="main_wind">
                <div className="top">
                    <h3 className="name">{this.props.data.name}</h3>
                    <button className="close" onClick={this.closeWindow}></button>
                </div>
                <div className="info">
                    <div className="authors">
                        <img className="img" src={this.props.data.image_path}/>
                        <div className="names">
                            <span>Авторы</span>
                            <ul>
                                {JSON.parse(this.props.data.authors).map((item, index) => {
                                    return <li key={index}>{item}</li>
                                })}
                            </ul>
                        </div>
                    </div>
                    <div className="base_block">
                        <div className="title">
                            <h2>Общая характеристика</h2>
                            <img src={base_information}/>
                        </div>
                        <p>{this.props.data.base_information}</p>
                    </div>
                    <div className="base_block">
                        <div className="title">
                            <h2>Апробационные признаки</h2>
                            <img src={triggers}/>
                        </div>
                        <ul className="block_list">
                            <li><span className="key_word">Форма куста</span> -  {this.props.data.leaf_form}</li>
                            <li><span className="key_word">Разновидность</span> - {this.props.data.type}</li>
                            <li><span className="key_word">Колос</span> - {this.props.data.spike}</li>
                            <li><span className="key_word">Колосковая чешуя в средней трети колоса</span> - {this.props.data.glume}</li>
                            <li><span className="key_word">Зерно</span> -{this.props.data.seed}</li>
                        </ul>
                    </div>
                    <div className="base_block">
                        <div className="title">
                            <h2>Урожайность</h2>
                            <img src={productivity}/>
                        </div>
                        <p>{this.props.data.productivity}</p>
                    </div>
                    <div className="base_block">
                        <div className="title">
                            <h2>Мукомольные и хлебопекарные качества</h2>
                            <img src={characteristic}/>
                        </div>
                        <p>{this.props.data.characteristics}</p>
                    </div>
                    <div className="base_block">
                        <div className="title">
                            <h2>Устойчивость к болезням и условиям климата</h2>
                            <img src={weather}/>
                        </div>
                        <ul className="block_list">
                            <li><span className="key_word">Бурая ржавчина</span> -  {this.props.data.brown}</li>
                            <li><span className="key_word">Желтая ржавчина</span> - {this.props.data.yellow}</li>
                            <li><span className="key_word">Септориоз</span> - {this.props.data.septoria}</li>
                            <li><span className="key_word">Мучнистая роса</span> - {this.props.data.dew}</li>
                            <li><span className="key_word">Фузариоз колоса</span> - {this.props.data.fusarium}</li>
                            <li><span className="key_word">Вирусы</span> - {this.props.data.viruses}</li>
                            <li><span className="key_word">Морозостойкость</span> - {this.props.data.frost_resist}</li>
                            <li><span className="key_word">Засухоустойчивость</span> - {this.props.data.drought_resistant}</li>
                        </ul>
                    </div>
                    <div className="base_block">
                        <div className="title">
                            <h2>Зона возделывания и предшественники</h2>
                            <img src={zone}/>
                        </div>
                        <p>{this.props.data.zone}</p>
                    </div>
                    <div className="base_block">
                        <div className="title">
                            <h2>Сроки посева</h2>
                            <img src={time}/>
                        </div>
                        <p>{this.props.data.time_range}</p>
                    </div>
                    <div className="base_block">
                        <div className="title">
                            <h2>Норма высева</h2>
                            <img src={norm}/>
                        </div>
                        <p>{this.props.data.base_norm}</p>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default SortCard_mob