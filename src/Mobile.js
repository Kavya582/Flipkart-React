function Mobile(props){
    return(
        <>
        <div className="container">
            <div className="sub-container1">
                 <img src={props.src} className="img"></img>
            </div>
        
            <div className="sub-container2">
            <h2 className="heading">{props.title}</h2>  
            <ul>
                <li>{props.list1}</li><br/>
                <li>{props.list2}</li><br/>
                <li>{props.list3}</li><br/>
                <li>{props.list4}</li><br/>
                <li>{props.list5}</li><br/>
               
               
            </ul> 
           
            </div>

            <div className="sub-container3">
                <h1 className="head"> &#8377;{props.price}</h1>
                <img src={props.img} height="20" width="80" className="para"></img><br/><br/>
                <p className="para1"> &#8377;{props.para1}</p>
                <p className="para2">{props.para2}</p>
                <p className="para3">{props.para3}</p>
                <p className="para2">{props.para4}</p>
                <p className="para3">{props.para5}</p>
            </div>
        </div>
           
            
           
             
            </>

    );
}

export default Mobile;