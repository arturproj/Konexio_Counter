import React from 'react';

class Text extends React.Component{

    render(){   
        return(
            <>
                <h1 style={{backgroundColor: "#80808070"}}>Counter</h1>
                <h2>{this.props.text}</h2>          
            </>          
        );
    }

}

export default Text;