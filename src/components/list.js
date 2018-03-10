import React from 'react';
import { connect } from 'react-redux';
import { ListItem } from './listitem';
export const List = (props) => { 
    return (
        <div>
            {props.items.map((item) => <ListItem key={item.id} object={item} />)}
        </div>
    ) ;
}
const Map = state => { 
    return {
        items : state.product
    }
}
export default connect(Map)(List);