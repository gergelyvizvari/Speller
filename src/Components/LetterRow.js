import React from 'react';

const letterRow = (props) => {
    
    let {item,ind} = props;

    return (
        <tr style={{width:'80%', borderBottom: 'solid 1px #efefef', backgroundColor: `${ind%2 === 0 ? 'transparent': '#efefef'} `}}>
        
            <td style={{width:50, verticalAlign: 'top', height:'30px', lineHeight:'30px' }}>
                {item.letter.toUpperCase()}
            </td>
            
            <td style={{textAlign:'left', verticalAlign: 'top',lineHeight:'30px' }}>
                <strong>{item.telephony.toUpperCase()}</strong>            
                {
                    item.pronunciation!=='' ? <span>&nbsp; / <small>{item.pronunciation}</small> / </span> : ''
                }
            </td>
        </tr>
    )
}

export default letterRow;