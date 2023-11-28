
import { Fragment, useEffect } from 'react';
import Head from './Component/Head';
import Productlist from './Component/Heder/ProdcutList/Productlist';
import { useDispatch, useSelector } from 'react-redux';
import { fetchuser } from './redux/cart';

function App() {
  // fetching data using axios
  const {userDetails} = useSelector((state)=> state.cart)
  const dispatch = useDispatch()
    useEffect(()=>{
      dispatch(fetchuser())
    },[])
    console.log(userDetails);
  return (
    <div>
      <Fragment>
     <pre style={{color : "white"}}>{JSON.stringify(userDetails, undefined,4)}</pre>
        <Head/>
        <Productlist/>
      </Fragment>
    </div>
  );
}

export default App;
