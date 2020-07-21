import React from 'react';

class Text extends React.Component{

    render(){   
        return(
            <>
                <h1 style={{backgroundColor: "#80808070", fontSize: "0.5rem"}}>{this.props.title}</h1>
                <h2 style={{fontSize: "0.3rem"}}>{this.props.text}</h2>          
            </>          
        );
    }

}

export default Text;