// React is loaded and is available as React and ReactDOM
// imports should NOT be used
const Product = props => {
  const plus = () => {
    // Call props.onVote to increase the vote count for this product
    props.onVote('+', props.index)

  };
  const minus = () => {
    // Call props.onVote to decrease the vote count for this product
    props.onVote('-', props.index)
  };
  return (
    <li>
      <span>{/* Product name */props.name}</span> - <span>votes: {/* Number of votes*/props.votes}</span>
      <button onClick={plus}>+</button>{" "}
      <button onClick={minus}>-</button>
    </li>
  );
};

const GroceryApp = (props) => {

  let [products, setProducts] = React.useState(props.products);

  const onVote = (dir, index) => {
    // Update the products array accordingly ...
    const updatedProducts = [...products];
    if (dir === '+') {
      updatedProducts[index].votes = updatedProducts[index].votes + 1;
      setProducts(updatedProducts);
    } else {
      updatedProducts[index].vote = updatedProducts[index].votes - 1;
      setProducts(updatedProducts);
    }

  };
  const listItems = products.map((product, ind) => {
    <Product
      key={product.name}
      index={ind}
      name={product.name}
      votes={product.votes}
      onVote={onVote} />
  }
  )

  return (
    <ul>
      {/* Render an array of products, which should call onVote when + or - is clicked */

        products.map((product, ind) => {
          <Product
            key={product.name}
            index={ind}
            name={product.name}
            votes={product.votes}
            onVote={onVote} />

        }
        )
      }
    </ul>
  );
}

document.body.innerHTML = "<div id='root'></div>";

ReactDOM.render(<GroceryApp
  products={[
    { name: "Oranges", votes: 0 },
    { name: "Bananas", votes: 0 }
  ]}
/>, document.getElementById('root'));

let plusButton = document.querySelector("ul > li > button");
if (plusButton) {
  plusButton.click();
}
console.log(document.getElementById('root').outerHTML)




// const Product = props => {
//   const plus = () => {
//     // Call props.onVote to increase the vote count for this product
//     props.onVote('+', props.index);
//   };
//   const minus = () => {
//     // Call props.onVote to decrease the vote count for this product
//     props.onVote('-', props.index);
//   };
//   return (
//     <li>
//       <span>{props.name}</span> - <span>votes: {props.votes}</span>
//       <button onClick={plus}>+</button>{" "}
//       <button onClick={minus}>-</button>
//     </li>
//   );
// };

// class GroceryApp extends React.Component {

//   // Finish writing the GroceryApp class

//   constructor(props) {
//     super(props);
//     this.state = {
//       products: this.props.products
//     }
//   }

//   onVote = (dir, index) => {
//     // Update the products array accordingly ...
//     const updatedProducts = [...this.state.products];
//     if (dir === '+') {
//       updatedProducts[index].votes = updatedProducts[index].votes + 1;
//       this.setState({
//         products: updatedProducts
//       })
//     }
//     else {
//       updatedProducts[index].votes = updatedProducts[index].votes - 1;
//       this.setState({
//         products: updatedProducts
//       })
//     }
//   };

//   render() {
//     console.log(this.state.products);
//     return (
//       <ul>
//         {
//           this.state.products.map((item, ind) => {
//             return <Product key={item.name} index={ind} onVote={this.onVote} name={item.name} votes={item.votes}></Product>;
//           })
//         }
//       </ul>
//     );
//   }
// }

// document.body.innerHTML = "<div id='root'></div>";

// ReactDOM.render(<GroceryApp
//   products={[
//     { name: "Oranges", votes: 0 },
//     { name: "Apples", votes: 0 },
//     { name: "Bananas", votes: 0 }
//   ]}
// />, document.getElementById('root'))
