import React, {Component} from "react";
import "./docs_mob.css";
import Table_mob from "./Table_mob/Table_mob";

class Docs_mob extends Component{
    constructor(props){
        super(props)

        this.table_names = [
            "Список сортов пшеницы мягкой озимой",
            "Характеристика сортов пшеницы по устойчивости к болезням",
            "Рекомендации по размещению сортов пшеницы после кукурузы на зерно",
            "Группировка сортов пшеницы по вегетационному периоду",
            "Группировка сортов пшеницы по высоте растений",
            "Группировка сортов пшеницы по морозостойкости",
            "Рекомендации по использованию сортов пшеницы для разных агрофонов",
            "Лучшие сорта пшеницы и тритикале для проблемных сроков посева"
        ]
        this.table_names_db = [
            "sort_list",
            "characteristic_base",
            "recomendation_fusarium",
            "group_veget",
            "group_height",
            "group_cold",
            "recomendation_usage",
            "best_sort_list"
        ]

        this.state = {
            cur_table: null
        }

        this.openTable = this.openTable.bind(this)
    }

    openTable(value){
        this.setState(state => ({
            cur_table: value
        }))
    }

    render(){
        return <div className="docs_mob">
            <ul className="table_list">
                {this.table_names.map((item, index) => {
                    return <li key={index} onClick={() => {this.openTable(index)}}>
                        {item}
                    </li>
                })}
            </ul>
            {this.state.cur_table==null?"":
                <Table_mob
                    db_name={this.table_names_db[this.state.cur_table]}
                    openTable={this.openTable}
                    table_index={this.state.cur_table}
                />
            }
        </div>
    }
}

export default Docs_mob