import React, { Component } from "react";
import { store } from "../store/itemstore"
import Item from "./item"
export class Inputfield extends React.Component {
    constructor(props) { 
        super(props);
    }
    
    dispatch(event) {
        event.preventDefault();
        let item = new Item(this.name.value, this.product.value, this.price.value);
        store.dispatch({ type: "ADD", payload: { object: item } });
    }
  render() {
      return (
          <form onSubmit={this.dispatch.bind(this)}>
            <h2>ENTER YOU NAME</h2>
              <input ref={(input) =>this.name=input } type="text" className="form-control" placeholder="Enter your name" />
            <h2>ENTER YOUR PRICE</h2>
            <input ref={(input) =>this.product=input } type="text"  className="form-control" placeholder="Enter your product" />
            <h2>ENTER PRODUCT PRICE</h2>
            <input ref={(input) =>this.price=input } type="text"  className="form-control" placeholder="Enter product price" />
            <button type="submit" className="btn btn-primary" >SAVE</button>  
        </form>
    );
  }
}
