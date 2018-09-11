import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    value : 0
  }

	receiveMessage = (e) =>{
    // Update the percentage value of parent scroll
    this.setState({ value: e.data })
  } 		

  onHover = (e) => {
    let frameElement = this.props.iframe.frameElement
    frameElement.style.height = null
  } 		

  onHoverOut = (e) => {
    let currentValue = this.state.value
    this.setState({ value: currentValue})
  } 

  componentDidMount() {
    const {iframe } = this.props
    iframe.addEventListener('message', this.receiveMessage);
  }

  render() {
    let frameElement = this.props.iframe.frameElement;
    (this.state.value >= 70) ? frameElement.style.height = "60px" : frameElement.style.height = null
    return (
      <div className="sidebar" onMouseOver={this.onHover} onMouseOut={this.onHoverOut}>
        <div className="sidebar__title-container">
          <span className="sidebar__title sidebar__text">Ask an Associate</span>
          <span className="sidebar__title sidebar__location">
              <svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 6 9" className="sidebar__location__icon">
                <path fill="#9B9B9B" fillRule="evenodd" d="M3 4.262c.192 0 .371-.05.536-.151a1.11 1.11 0 0 0 .536-.963 1.139 1.139 0 0 0-.536-.974 1.008 1.008 0 0 0-1.067 0 1.139 1.139 0 0 0-.53.974c0 .31.102.573.308.79A1 1 0 0 0 3 4.261zM3 0c.55 0 1.055.14 1.515.422.454.281.815.66 1.083 1.136C5.866 2.04 6 2.57 6 3.148c0 .44-.103.945-.31 1.514a11.095 11.095 0 0 1-.742 1.569A20.785 20.785 0 0 1 3.31 8.62L3 9l-.31-.379a20.785 20.785 0 0 1-1.64-2.39 11.095 11.095 0 0 1-.74-1.569C.102 4.092 0 3.588 0 3.148c0-.577.134-1.107.402-1.59A3.105 3.105 0 0 1 1.485.422C1.945.14 2.45 0 3 0z"></path>
              </svg>
              Vancouver
          </span>
        </div>
        <div className="sidebar__logo">
          <img className="logo" alt="Avatar" src='https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShaggyMullet&accessoriesType=Round&hairColor=BrownDark&facialHairType=MoustacheFancy&facialHairColor=Red&clotheType=ShirtVNeck&clotheColor=PastelYellow&eyeType=Wink&eyebrowType=Angry&mouthType=Default&skinColor=Light'
          />
        </div>
    	</div>
    );
  }
}

export default App;
