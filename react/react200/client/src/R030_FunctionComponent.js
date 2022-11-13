import React, {useState, useEffect} from "react";

function R030_FunctionComponent(props){
    const [contents, setContents] = useState(props.contents);
    
    useEffect(()=>{
        console.log('useEffect');
    })
    return(
        <>
            <h2>{contents}</h2>
            <button onClick={()=> setContents('[THIS IS HOOK]')}>Hook버튼</button><br/>
            <button onClick={()=> setContents('[THIS IS MOON]')}>MOON버튼</button>
        </>
    )
}


export default R030_FunctionComponent;