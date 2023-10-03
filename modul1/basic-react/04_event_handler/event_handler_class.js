import React, {Component} from 'React'


class MyButton extends Component{
    render(){
        return (
            <div>
                <button onClick={()=>alert('clicked')}>
                    click me!!
                </button>
            </div>
        );
    }
}

export default MyButton