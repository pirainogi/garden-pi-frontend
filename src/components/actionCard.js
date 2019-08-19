import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTint, faCut, faShoppingBasket, faSun, faCloud,    faPoop, faCannabis, faArchive, faSeedling, faTractor } from '@fortawesome/free-solid-svg-icons'
import '../css/actionCard.css'

const ActionCard = (props) => {

  function selectIcon(){
    switch(props.action.action_type){
      case 'Water':
        return <FontAwesomeIcon icon={faTint} size='3x' color={'rgb(150, 171, 108)'}/>
      case 'Prune':
        return <FontAwesomeIcon icon={faCut} size='3x' color={'rgb(150, 171, 108)'}/>
      case 'Harvest':
        return <FontAwesomeIcon icon={faShoppingBasket} size='3x' color={'rgb(150, 171, 108)'}/>
      case 'Sun':
        return <FontAwesomeIcon icon={faSun} size='3x' color={'rgb(150, 171, 108)'}/>
      case 'Shade':
        return <FontAwesomeIcon icon={faCloud} size='3x' color={'rgb(150, 171, 108)'}/>
      case 'Fertilize':
        return <FontAwesomeIcon icon={faPoop} size='3x' color={'rgb(150, 171, 108)'}/>
      case 'Weed':
        return <FontAwesomeIcon icon={faCannabis} size='3x' color={'rgb(150, 171, 108)'}/>
      case 'Transplant':
        return <FontAwesomeIcon icon={faArchive} size='3x' color={'rgb(150, 171, 108)'}/>
      case 'Deadhead':
        return <FontAwesomeIcon icon={faSeedling} size='3x' color={'rgb(150, 171, 108)'}/>
      case 'Mulch':
        return <FontAwesomeIcon icon={faTractor} size='3x' color={'rgb(150, 171, 108)'}/>
      default:
        return null
    }
  }

    return(
      <div className="actionCard">
        {props.action
          ? <div>
            <span>{props.action.action_type}</span><br></br><br></br>
            {selectIcon()}
          </div>

          : <span>action card </span>
        }
      </div>
    )

} // end of class

export default ActionCard;
