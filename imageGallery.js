/* const Product = props => {
  const plus = () => {
    // Call props.onVote to increase the vote count for this product
    props.onVote('+',props.index);
  };
  const minus = () => {
    // Call props.onVote to decrease the vote count for this product
    props.onVote('-',props.index);
  };
  return (
    <li>
      <span>{props.name}</span> - <span>votes: {props.votes}</span>
      <button onClick={plus}>+</button>{" "}
      <button onClick={minus}>-</button>
    </li>
  );
};

class GroceryApp extends React.Component {

   // Finish writing the GroceryApp class

   constructor(props){
   super(props);
   this.state = {
       products: this.props.products
   }
   }

  onVote = (dir, index) => {
    // Update the products array accordingly ...
    const updatedProducts = [...this.state.products];
    if(dir==='+'){
    updatedProducts[index].votes = updatedProducts[index].votes+1;
      this.setState({
        products: updatedProducts
      })
    }
    else {
      updatedProducts[index].votes = updatedProducts[index].votes-1;
        this.setState({
         products: updatedProducts
        })
    }
  };

  render() {
  console.log(this.state.products);
    return (
      <ul>
        {
          this.state.products.map((item,ind)=>{
            return <Product key={item.name} index={ind} onVote = {this.onVote} name={item.name} votes={item.votes}></Product>;
          })
        }
      </ul>
    );
  }
}

document.body.innerHTML = "<div id='root'></div>";

ReactDOM.render(<GroceryApp
  products={[
    { name: "Oranges", votes: 0 },
    { name: "Apples", votes: 0 },
    { name: "Bananas", votes: 0 }
  ]}
/>, document.getElementById('root')) */






// React is loaded and is available as React and ReactDOM
// imports should NOT be used
/*
function Image(props){
  return (
    <div className="image" index={props.index}>
                <img src={props.item} >
                <button className="remove" onClick={()=>{props.remove(props.index)};}>X </button>

    </div>
  );
}


class ImageGallery extends React.Component {

constructor(props){
  super(props);
  this.state = {links: this.props.links};
  this.remove = this.remove.bind(this);
}

remove(index){
  //create a copy of the state
  //splice out the piece i dont want
  //set state
  const linksCopy = this.state.links;
  linksCopy.splice(index,1);
  console.log(linksCopy);
  this.setState(links: linksCopy);
}
  render() {
    return (
      <div>
        {
          this.state.links.map((item, ind)=>{
            return (
              <Image index={ind} link={item} remove={this.remove}/>
            )
          })
        }
      </div>
    );
  }
}

document.body.innerHTML = "<div id='root'> </div>";

const rootElement = document.getElementById("root");
const links = ["https://goo.gl/kjzfbE", "https://goo.gl/d2JncW"];
ReactDOM.render(<ImageGallery links={ links } />,
                rootElement);
document.querySelectorAll('.remove')[0].click();
console.log(rootElement.innerHTML); */



class ImageGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = { links: props.links };
  }
  remove = url => {
    console.log(url)
    this.setState(state => ({
      links: state.links.filter(l => l !== url)
    }));
  };
  render() {
    const { links } = this.state;
    return (
      <div>
        {links.map((item, index) => {
          return (
            <div key={item} className="image">
              <img key={index} src={item} alt="" />{" "}
              <button className="remove" onClick={() => this.remove(item)}>
                X
              </button>
            </div>
          );
        })}
      </div>
    );
  }
}

document.body.innerHTML = "<div id='root'> </div>";

const rootElement = document.getElementById("root");
const links = ["https://goo.gl/kjzfbE", "https://goo.gl/d2JncW"];
ReactDOM.render(<ImageGallery links={links} />,
  rootElement);
document.querySelectorAll('.remove')[0].click();
console.log(rootElement.innerHTML);
