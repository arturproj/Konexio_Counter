import React from 'react';
import Text from './Components/Text';
import Button from './Components/Button';

class App extends React.Component{


    constructor(state) {            
        super(state)
        this.state = {
            count: 1,
            secondCount: 1
        };
        document.title = "Counter";

        this.incrementCountF = this.incrementCountF.bind(this);
        this.decrementCountF = this.decrementCountF.bind(this);
        this.incrementCountS = this.incrementCountS.bind(this);
        this.decrementCountS = this.decrementCountS.bind(this);
    }

    incrementCountF(){
        if ( this.state.count === this.state.secondCount ) {
            let count = this.state.count+1;        
            let countS = this.state.secondCount+1;
            this.setState({
                count : ( count <= 100 ? count : 100 ),
                secondCount: ( countS <= 100 ? countS : 100 ),
            }) 
        }else{
            let count = this.state.count+1;    
            this.setState({
                count : ( count <= 100 ? count : 100 ),
            })   
        }
       
    }
    decrementCountF(){
        let count = this.state.count-1;
        this.setState({
            count : ( count >= 1 ? count : 1 )
        })        
    }
    incrementCountS(){
        let count = this.state.secondCount+1;
        this.setState({
            secondCount : ( count <= 100 ? count : 100 )
        })        
    }
    decrementCountS(){
        if ( this.state.count === this.state.secondCount ) {
            let count = this.state.count-1;
            let countS = this.state.secondCount-1;
            this.setState({
                count : ( count >= 1 ? count : 1 ),
                secondCount: ( countS >= 1 ? countS : 1 ),
            }) 
        }else{            
            let countS = this.state.secondCount-1;
            this.setState({                
                secondCount: ( countS >= 1 ? countS : 1 ),
            }) 
        }
       
    }

    render(){   
        return(
        <>
            <div className="row mx-0 text-center">

                <div className="col-sm-12 col-md-6 col-lg-4 mx-auto" style={{display : "grid"}}>
                <Text text={this.state.count} title="Kitchen TV" />
                <p style={{display: "flex"}}>                    
                    <Button stylesheetClass={["btn-success","w-50"]} name="+" clickAct={this.incrementCountF}/>
                    <Button stylesheetClass={["btn-danger","w-50"]} name="-" clickAct={this.decrementCountF} />
                </p>
                </div>
            </div>
            <div className="row mx-0 text-center">
                <div className="col-sm-12 col-md-6 col-lg-4 mx-auto" style={{display : "grid"}}>
                <Text text={this.state.secondCount}  title="Living room TV" />
                <p style={{display: "flex"}}>
                    <Button stylesheetClass={["btn-success","w-50"]} name="+" clickAct={this.incrementCountS}/>
                    <Button stylesheetClass={["btn-danger","w-50"]} name="-" clickAct={this.decrementCountS} />
                </p>
                </div>
            </div>
        </>
        );
    }

}

export default App;