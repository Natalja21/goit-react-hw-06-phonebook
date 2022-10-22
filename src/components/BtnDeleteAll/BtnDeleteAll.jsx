import stl from './BtnDeleteAll.module.css';
import { useDispatch } from 'react-redux';
import { deleteAllContacts } from 'redux/slice';

const BtnDeleteAll = () => {
  const dispatch = useDispatch();
  return (
    <button
      className={stl.btn}
      type="button"
      onClick={() => dispatch(deleteAllContacts([]))}
    >
      Delete All
    </button>
  );
};

export default BtnDeleteAll;
