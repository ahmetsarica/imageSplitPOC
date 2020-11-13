import logo from './logo.svg';
import React from 'react';
import ReactDOM from 'react-dom';
import Draggable from 'react-draggable';
import './App.css';
import Image from './image.jpg';


class App extends React.Component {

    state = {
        bottomImagePosition: -300,
        topImagePosition:0,
        dropAreaHeight: 300,
        topImageContainer: 300,
        bottomImageContainer: 300,
    };
    handleStop = (e, ui) => {
        const { y } = ui;
        if (y < 150) {
            this.setState({
                topImageContainer: y,
                bottomImageContainer: 150 + (150 - y),
                bottomImagePosition: 40 - y,
            })
        } else {
            this.setState({
                topImageContainer: y,
                bottomImageContainer: 300-y,
                bottomImagePosition: 40 - y,
            })
        }
    };

    render(){
        const { bottomImagePosition, dropAreaHeight, topImagePosition, topImageContainer, bottomImageContainer } = this.state;
        debugger
        return (
            <div className="container">
                <div style={{height: dropAreaHeight + 'px'}} className="drop-area">
                    <div style={{height: topImageContainer+'px'}} className="top-image-container">
                        <img style={{top: topImagePosition + 'px'}} src={Image} className="top-image" />
                    </div>
                    <div style={{height: bottomImageContainer+'px'}} className="bottom-image-container">
                        <img style={{top: bottomImagePosition + 'px'}} src={Image} className="bottom-image" />
                    </div>
                </div>
                <Draggable
                    defaultPosition={{x: 0, y: 0}}
                    position={null}
                    scale={1}
                    onStop={this.handleStop}>
                    <div className="drag-item">
                        <div>Drag from here</div>
                    </div>
                </Draggable>
            </div>
        );
    }
}

export default App;
