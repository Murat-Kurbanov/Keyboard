import React, {Component} from 'react';
import './Keyboard.css'
import connect from "react-redux/es/connect/connect";

class Keyboard extends Component {
    render() {
        return (
            <div className='Calculator'>
                <div className='screen' >
                    <div className={this.props.isright ? 'green' : 'white'}>
                        <h1>{this.props.stars}</h1>
                    </div>
                </div>
                <button onClick={ this.props.addNumber}>1</button>
                <button onClick={ this.props.addNumber}>2</button>
                <button onClick={ this.props.addNumber}>3</button>
                <button onClick={ this.props.addNumber}>4</button>
                <button onClick={ this.props.addNumber}>5</button>
                <button onClick={ this.props.addNumber}>6</button>
                <button onClick={ this.props.addNumber}>7</button>
                <button onClick={ this.props.addNumber}>8</button>
                <button onClick={ this.props.addNumber}>9</button>
                <button onClick={ this.props.removeNumber}>C</button>
                <button onClick={ this.props.addNumber}>0</button>
                <button onClick={ this.props.correctPassword}>E</button>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        stars: state.stars,
        isright: state.isright
    }
};

const mapDispatchToProps = dispatch => {
  return {
      addNumber: (e) => dispatch({type: 'ADD_NUMBER', value:e.target.innerText}),
      removeNumber: () => dispatch({type: 'REMOVE_NUMBER'}),
      correctPassword: () => dispatch({type: 'CORRECT_PASSWORD'})
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Keyboard);