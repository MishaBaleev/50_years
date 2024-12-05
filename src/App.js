import './App.css';
import React, {Component} from 'react';
import PC from './PC/PC';
import Mob from './Mob/Mob';
import "@fontsource/jura"; // Defaults to weight 400
import "@fontsource/jura/400.css"; // Specify weight

class App extends Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    
  }

  render(){
    let user_agent = navigator.userAgent.toLocaleLowerCase()
    let isPC = (user_agent.search("iphone") > -1)?false:((user_agent.search("android") > -1)?false:true)
    return(
      <div className='App'>
        {isPC?<PC/>:<Mob/>}
      </div>
    )
  }
}


export default App
