import { useState, useEffect } from 'react';
import { getAllProducts } from '../../api';
import CategoryList from '../../components/categoryList/CategoryList';



const Home = () => {

  const [product, setProduct] = useState([]);
  const [sortFlag, setSortFlag] = useState(true);


  // useEffect(() => {
  //   getAllProducts().then((data) => {
  //     setProduct(data.products)
  //     //console.log(data.products);
  //   })
  // }, []);
  // //console.log(product, 'product');

  useEffect(() => {
    getAllProducts().then((data) => {
      setProduct(data.products);
    });
  }, []);

  // const priceArr = product.map(elPrice => {
  //   console.log(elPrice);
  //   return elPrice;
  // })

  // const sortByPrice = () => {
  //   product.sort((a, b) => {
  //     return a - b;
  //   });
  //   console.log(product);
  //   setProduct([...product]);
  //   setSortFlag(!sortFlag);
  // }

  const sortByPrice = () => {
    product.sort((a, b) => {
      if (sortFlag) {
        if (a.price < b.price) {
          return -1;
        } else if (a.price > b.price) {
          return 1;
        }
      } else {
        if (a.price > b.price) {
          return -1;
        } else if (a.price < b.price) {
          return 1;
        }
      }
      return 0;
    });
    //console.log(product);
    setProduct([...product]);
    //console.log(sortFlag);
    setSortFlag(!sortFlag);
  }

  const sortByDefault = () => {
    //console.log(product);
    getAllProducts().then((data) => {
      setProduct(data.products);
    });
  }

  const options = [
    { value: 'datark', label: '' },
    { value: 'price', label: 'sort price' },
    { value: 'default', label: 'sort default' }
  ];



  const optionTags = options.map((el, index) => {
    return <option value={el.value} key={index}>{el.label}</option>
  });



  const func = (e) => {
   console.log('hjgf');
  }
  

  return (
    <div className='Home'>
      Home
      <button onClick={sortByPrice}>Sort by Price</button>
      <button onClick={sortByDefault}>Sort by default</button>
      <select>
        {/* {optionTags} */}
        {/* {console.log(optionTags)} */}

        <option value="datark">yntri</option>
        <option value="price" onClick={(e)=>func(e)}>price</option>
        <option value="default">default</option>
      </select>
      <CategoryList product={product} />
    </div>
  )
}

export default Home;

