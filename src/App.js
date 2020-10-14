import React from "react";
import "./App.css";
import ListItems from "./ListItems";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

library.add(faTrash);

// function App() {
//   return (
//     <div className="App">

//     </div>
//   );
// }

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      currentItem: {
        text: "",
        key: "",
      },
    };
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.UpToDate = this.UpToDate.bind(this);
  }
  handleInput(e) {
    this.setState({
      currentItem: {
        text: e.target.value,
        key: Date.now(),
      },
    });
  }
  addItem(e) {
    e.preventDefault();
    const newItem = this.state.currentItem;
    console.log(newItem);
    if (newItem.text !== "") {
      const items = [...this.state.items, newItem];
      this.setState({
        items: items,
        currentItem: {
          text: "",
          key: "",
        },
      });
    }
  }
  deleteItem(key) {
    const filteredItems = this.state.items.filter((item) => item.key !== key);
    this.setState({
      items: filteredItems,
    });
  }
  // setUpdate(text, key){
  //   const items = this.state.items;
  //   items.map(item => {
  //     if(item.key === key)
  //     item.text= text;
  //   })
  //   this.setState({
  //     items: items
  //   })
  // }
  UpToDate(text, key) {
    console.log("items:" + this.state.items);
    const items = this.state.items;
    items.map((item) => (item.text = item.key === key ? text : ""));
    this.setState({
      items: items,
    });
  }
  render() {
    return (
      <div className="todoApp">
        <h2>Todo App build on React</h2>
        <header>
          <form id="todoList" onSubmit={this.addItem}>
            <input
              type="text"
              placeholder="Enter Task"
              value={this.state.currentItem.text}
              onChange={this.handleInput}
            />
            <button type="submit">Add</button>
          </form>
        </header>
        <ListItems
          items={this.state.items}
          deleteItem={this.deleteItem}
          UpToDate={this.UpToDate}
        />
      </div>
    );
  }
}

export default App;
