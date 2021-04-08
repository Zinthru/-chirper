import React, {Component} from 'react';



const ChirpPanels = ({setInputText,todos,setTodos,inputText})=>{
    
    
    const inputTextHandle=(e)=>{
        setInputText(e.target.value)
    }

    
    const addStatus = (e) => {
        e.preventDefault();
        setTodos([...todos,{text: inputText, completed: false}]);
        setInputText('');
    };



    


    return(
    <div className="container bootdey">
        <div className="row">
            <div className="col-md-8 col-sm-12">
                <div className="well"> 
                    <form role="form" className="form-horizontal">
                    <h4>Sertonin key generator</h4>
                    <div  className="form-group">
                        <input value={inputText} onChange={inputTextHandle} placeholder="This won't get shadowbanned :)" className="form-control"></input>
                    </div>
                    
                    <button onClick={addStatus} type="button" className="btn btn-success pull-right">Post</button><ul className="list-inline"><li><a href="#"><i className="glyphicon glyphicon-align-left"></i></a></li><li><a href="#"><i className="glyphicon glyphicon-align-center"></i></a></li><li><a href="#"><i className="glyphicon glyphicon-align-right"></i></a></li></ul>
                    </form>
                </div>
            </div>
        </div>
    </div>
    )
}



export default ChirpPanels;