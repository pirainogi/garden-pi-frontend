import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTint, faCut, faShoppingBasket, faSun, faCloud,    faPoop, faCannabis, faArchive, faSeedling, faTractor } from '@fortawesome/free-solid-svg-icons'
import '../css/actionCard.css'

class ActionCard extends Component {

  state = {
    color: 'rgb(150, 171, 108)'
  }

  selectIcon = () => {
    switch(this.props.action.action_type){
      case 'Water':
        return <FontAwesomeIcon icon={faTint} size='3x' color={this.state.color}/>
      case 'Prune':
        return <FontAwesomeIcon icon={faCut} size='3x' color={this.state.color}/>
      case 'Harvest':
        return <FontAwesomeIcon icon={faShoppingBasket} size='3x' color={this.state.color}/>
      case 'Sun':
        return <FontAwesomeIcon icon={faSun} size='3x' color={this.state.color}/>
      case 'Shade':
        return <FontAwesomeIcon icon={faCloud} size='3x' color={this.state.color}/>
      case 'Fertilize':
        return <FontAwesomeIcon icon={faPoop} size='3x' color={this.state.color}/>
      case 'Weed':
        return <FontAwesomeIcon icon={faCannabis} size='3x' color={this.state.color}/>
      case 'Transplant':
        return <FontAwesomeIcon icon={faArchive} size='3x' color={this.state.color}/>
      case 'Deadhead':
        return <FontAwesomeIcon icon={faSeedling} size='3x' color={this.state.color}/>
      case 'Mulch':
        return <FontAwesomeIcon icon={faTractor} size='3x' color={this.state.color}/>
      default:
        return null
    }
  }

  clickHandler = () => {
    // console.log(this.props.action.action_type);
    this.setState({
      color: 'rgb(0, 0, 0)'
    })
    const token = localStorage.getItem('token')
    if(token){
      fetch('http://localhost:3000/api/v1/logs', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          plant_id: this.props.state.currentPlant.id,
          action_id: this.props.action.id,
          amount: null,
        })
      })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      })
    }


    setTimeout(() => {
      this.setState({
        color: 'rgb(150, 171, 108)'
      })
    }, 1000)
  }


  render(){
    console.log(this.props)
    return(
      <div className="actionCard">
        {this.props.action
          ? <div onClick={this.clickHandler}>
            <span>{this.props.action.action_type}</span><br></br><br></br>
            {this.selectIcon()}
          </div>

          : <span>action card </span>
        }
      </div>
    )
  }


} // end of class

const mapStateToProps = (state) => {
  return {
    state
  }
}

export default connect(mapStateToProps)(ActionCard);
