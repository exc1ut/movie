import React from 'react';

const burger = (props) => {
    const divs =[3,2,1];
    
    const style = {
        display: 'flex',
        flexDirection: 'column',
        height : '20px',
        justifyContent: 'space-between',
        margin:'0',
        

    }
    const styleChild = {
        width:'24px',
        borderRadius: '2px',
        backgroundColor:'grey',
        height: '4px',
    }
    return (
        <div style = {style} onClick = {props.click}>
          {divs.map(item => {
              return <span style = {{backgroundColor :'white' , width : `${item*8}px`, height:'2px'}} ></span>
          })}
              
        </div>
    );
}

export default burger;
