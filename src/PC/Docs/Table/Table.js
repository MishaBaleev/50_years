import React, {Component} from "react";
import "./table.css";
import icon from "./img/icon.png";
import search from "./img/search.png";

class Table extends Component{
    constructor(props){
        super(props)

        this.state = {
            is_closing: "",
            table_data: []
        }

        this.tables = [
            {
                name: 'Общий список',
                header: ['№', 'Сорт', 'Год включения в реестр', 'Регион допуска', 'Качество по реестру', 'Качество по оригинатору'],
                body_keys: ['name', 'year', 'region', 'registry', 'originator']
            },
            {
                name: 'Устойчивость к болезням',
                header: ['№', 'Сорт', 'Устойчивость к ржавчине бурой', 'Устойчивость к ржавичне желтой', 'Устойчивость к септориозу', 'Устойчивость к мучнистой росе', 'Устойчивость к фузариозу колоса'],
                body_keys: ['name', 'brown_rust', 'yellow_rust', 'septoria', 'dew', 'fusarium']
            },
            {
                name: 'Рекомендации по размещению',
                header: ['№', 'Группировка сортов по устойчивости к фузариозу колоса', 'Названия сортов'],
                body_keys: ['group', 'names']
            },
            {
                name: 'Группировка по вегетационному периоду',
                header: ['№', 'Группа спелости', 'Название сортов'],
                body_keys: ['group', 'names']
            },
            {
                name: 'Группировка по высоте',
                header: ['№', 'Группа', 'Сорта'],
                body_keys: ['group', 'names']
            },
            {
                name: 'Группировка по морозостойкости',
                header: ['№', 'Уровень морозостойкости', 'Стандартный сорт', 'Сорта'],
                body_keys: ['level', 'base_name', 'names']
            },
            {
                name: 'Рекомендации по использованию',
                header: ['№', 'Группировка по вегетационному периоду', 'Названия сортов', 'Рекомендуемая площадь'],
                body_keys: ['group', 'names', 'square']
            },
            {
                name: 'Лучшие сорта',
                header: ['№', 'Срок посева - сорта', 'Срок посева - сорта', 'Неблагоприятные факторы'],
                body_keys: []
            }
        ]
        this.counter = 0
        this.line_counter = 1
        this.tables_with_search = [0, 1]
        this.search_key = ""

        this.closeTable = this.closeTable.bind(this)
        this.changeSearchKey = this.changeSearchKey.bind(this)
        this.searchButton = this.searchButton.bind(this)
    }

    componentDidMount(){
        let data = require(`../../../data/${this.props.db_name}.json`)
        this.setState({
            table_data: data
        })
        document.addEventListener('keydown', (e) => {
            if (e.code == 'Enter'){
                this.searchButton()
            }
        })
    }

    closeTable(){
        this.setState(state => ({
            is_closing: "closing"
        }), () => {
            setTimeout(() => {this.props.openTable(null)}, 400)
        })
    }

    changeSearchKey(e){
        this.search_key = e.target.value
    }

    searchButton(){
        if (this.search_key != ""){
            let element_arr = [...document.querySelectorAll(".table_line")]
            element_arr.forEach(item => {
                item.classList.remove("active")
            })
            let name_arr = element_arr.map(item => {return item.cells[1].innerText.toLowerCase()})
            let target_index = null
            name_arr.forEach((item, index) => {
                if (item.includes(this.search_key)){target_index = index}
            })
            if (target_index != null && target_index >= 2){
                element_arr[target_index-2].scrollIntoView({
                    block: 'start',
                    behavior: 'smooth'
                })
                element_arr[target_index].classList.toggle('active')
            }
            if (target_index != null && target_index < 2){
                let table_element = document.querySelector('.main_table')
                table_element.scrollTo({top: 0, behavior: 'smooth'})
                element_arr[target_index].classList.toggle('active')
            }
        }
    }

    render(){
        return(
            <div className={"table "+this.state.is_closing}>
                <div className="main_wind">
                    <div className="top">
                        <img src={icon} className="icon"/>
                        <h3 className="title">{this.tables[this.props.table_index].name}</h3>
                        {this.tables_with_search.includes(this.props.table_index)?
                            <div className="search">
                                <input
                                    type="text"
                                    placeholder="Название"
                                    onChange={this.changeSearchKey}
                                />
                                <button onClick={this.searchButton}>
                                    <img src={search}/>
                                </button>
                            </div>
                        :""}
                        <button className="close" onClick={this.closeTable}></button>
                    </div>
                    <div className="main_table">
                        <table cellSpacing={0}>
                            <thead>
                                <tr>
                                    {this.tables[this.props.table_index].header.map(item => {
                                        return <th key={this.counter++}>{item}</th>
                                    })}
                                </tr>
                            </thead>
                            {this.props.table_index==7?
                                <tbody>
                                    {this.state.table_data.map(item => {
                                        return <tr key={this.counter++}>
                                            <th>{this.line_counter++}</th>
                                            <th>{item.period_1} - {item.names_1}</th>
                                            <th>{item.period_2} - {item.names_2}</th>
                                            <th>{item.factors}</th>
                                        </tr>
                                    })}
                                </tbody>
                            :
                                <tbody>
                                    {this.state.table_data.map(item => {
                                        return <tr key={this.counter++} className='table_line'>
                                            <th>{this.line_counter++}</th>
                                            {this.tables[this.props.table_index].body_keys.map(key => {
                                                return <th key={this.counter++}>{item[key]}</th>
                                            })}
                                        </tr>
                                    })}
                                </tbody>
                            }
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default Table