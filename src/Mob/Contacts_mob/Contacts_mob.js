import React, {Component} from "react";
import "./contacts_mob.css";
import mapboxgl from "mapbox-gl";
import 'mapbox-gl/dist/mapbox-gl.css';
import home from "../../PC/Contacts/img/home.png";
import phone from "../../PC/Contacts/img/phone.png";
import email from "../../PC/Contacts/img/email.png";
import path from "../../PC/Contacts/img/path.png"

class Contacts_mob extends Component{
    constructor(props){
        super(props)

        this.mapToken = "pk.eyJ1IjoiYmFsZWV2IiwiYSI6ImNsYXBqNmk4dTE5Y3UzcWxiYmt1bTJtcG8ifQ.aE8lRdfDnWq52szIP7gAHw"
        this.map = null

        this.order = {
            name: "",
            contact: "",
            order_text: ""
        }

        this.orderOnChange = this.orderOnChange.bind(this)
    }

    orderOnChange(e, key){
        this.order[key] = e.target.value
    }

    componentDidMount(){
        mapboxgl.accessToken = this.mapToken;
        this.map = new mapboxgl.Map({
            container: "map",
            style: 'mapbox://styles/mapbox/streets-v12',
            center: [38.670901, 47.276988],
            zoom: 16,
            minZoom: 2,
            attributionControl: false,
            // interactive: false
        })
        let marker = new mapboxgl.Marker({
            "color": "#ff0000"
        }).setLngLat([38.670901, 47.276988]).addTo(this.map)
    }

    render(){
        return(
            <div className="contacts_mob">
                 <div className="contacts_top">
                    <div id="map"></div>
                    <div  className="contacts_cont">
                        <h2>Свяжитесь с нами!</h2>
                        <ul>
                            <li>
                                <img src={home}/>
                                <span>Ростовская область, Неклиновский район, с. Носово, ул. Мира, 33</span>
                            </li>
                            <li>
                                <img src={path}/>
                                <span><a className="link" href="https://yandex.ru/maps/-/CDVeuSJn">Схема проезда</a></span>
                            </li>
                            <li>
                                <img src={phone}/>
                                <span><a className="link" href="tel:+7 (928) 607 30-60">+7 (928) 607 30-60</a></span>
                            </li>
                            <li>
                                <img src={email}/>
                                <span><a className="link" href="mailto:spk50let@mail.ru">spk50let@mail.ru</a></span>
                            </li>
                        </ul>
                    </div>
                 </div>
            </div>
        )
    }
}

export default Contacts_mob