import React, {Component} from "react";

class MyClassComponent extends Component{

    state = {
        number: 0,
        fixed: 0
    };

    render(){
        const {number, fixed} = this.state;
        return(
            <div>
                <h1>{number}</h1>
                <h2>(안바뀜){fixed}</h2>
                <button onClick={() => {
                    this.setState(prevState =>{
                        return {
                            number: prevState.number + 1
                        };
                        }, () => {
                    console.log('테스트');
                    console.log(this.state);
                    }
                );
                }}
                >+1
                </button>
            </div>
        );
    }
}

export default MyClassComponent;