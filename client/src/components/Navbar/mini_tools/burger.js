import React from 'react';

const burger = () => {
    const divs =[1,2,3];
    
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
        <div style = {style}>
          {divs.map(item => {
              return <div style ={styleChild}></div>
          })}
              
        </div>
    );
}

export default burger;
