import React from 'react'
export class Home extends React.Component{

    constructor(props){
        super();
        this.state ={
            age: props.firstAge,
            status:0,
            homeLink:props.initialStateHomeLink

        } 
    }
    onChangeLink(){

        this.props.ChangeLink(this.state.homeLink)
    }

    onMakeMeOlder(){

    this.setState({
            age:this.state.age+3
    });
    }
    onHandleChange(event){
        this.setState({
        homeLink:event.target.value
    })
    }

    componentWillMount(){
        console.log("componentWillMount heey 1 ");
        
    }
    componentDidMount(){
        console.log("component did mount heey 1 ");
        
    }
    componentWillUpdate(){
        console.log("component will update ");
    }

    componentDidUpdate(){
        console.log("component did update ");
    }
    componentWillMount(){
        console.log("component Will Unmount ");
        
    }
render(){
    
    var texthere = "some cool text :  Hello Morocco "
    return(
        <div>
            <p>{texthere}</p>
            
            <p>Hey  {this.props.user.firstName} your Age is : {this.state.age}</p>
            <p>Make Me older </p>
                <p><b>Last Name: </b> {this.props.user.lastName}</p>
                <p><b>country</b> {this.props.user.country}</p>
                <div>
                        <h4>Hobbies</h4>
                        <ul>
                          {this.props.user.hobbies.map((hobby,i)=><li key={i}> {hobby} </li>)}
                        </ul>
                </div>   
                <button onClick={()=>this.onMakeMeOlder()} className="btn btn-primary">Make Me Older Please</button>
            <hr/>
            <button className="btn btn-primary" onClick={this.props.great}>Say Hello </button> 
            <hr/>           
            <input type="text" value={this.state.homeLink} onChange={(event)=>this.onHandleChange(event)}/>
            <button className="btn btn-primary" onClick={this.onChangeLink.bind(this)}>Change Header Link</button>            
            <hr/>
      
        </div>

    );

}


}
