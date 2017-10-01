import React, { Component } from 'react';
class Timeline extends Component {
    render() {
        const widget = (this.props.data).map(function(result){
            return (
             <div key={result._id} >
                <li>
                    <div className="content">
                        <p>{result.name+' '+result.lastName} <br/> {result.job + ' @ ' +result.ministry } </p>
                    </div>
                    <div className="timeline-badge"></div>
                    <div className="title">
                        <h3>{result.declarationDate}</h3>
                        <span>{result.declarationObject}</span>
                    </div>
                </li>
                 
               <br/>
             </div>)
           })
        return (

                        <div className="container">
                        <div className="row no-margin padding-onlybottom-lg">
                        <div className="col-md-12 padding-leftright-null">
                            <ul className="timeline">
                                {widget}
                            </ul>
                        </div>
                    </div>                            
                        </div>
                    
        );
    }
}

export default Timeline;