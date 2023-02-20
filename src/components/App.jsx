import { useSelector, useDispatch } from 'react-redux'
import { getClicksValue, update } from 'redux/clicksSlice';



    

export const App = () => {
  const dispatch = useDispatch(); // для того щоб відправити action
  const numberOfClicks = useSelector(getClicksValue)
  //console.log(numberOfClicks)
  return (
    <div>
      <h1> Number of clicks: {numberOfClicks}</h1>
      <button type="button" onClick={() => dispatch(update(5))}>Add 5 clicks</button>
      <button type="button" onClick={() => dispatch(update(10))}>Add 10 clicks</button>
      <button type="button" onClick={() => dispatch(update(20))}>Add 20 clicks</button>
    </div>
  );
};
