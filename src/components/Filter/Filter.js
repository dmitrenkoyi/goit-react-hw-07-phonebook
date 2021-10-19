import { useSelector, useDispatch } from "react-redux";
import { filterUpdate } from "redux/phonebook/actions";
import { getFilter } from "redux/phonebook/selectors";

import styles from "./Filter.module.scss";

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const onChange = (e) => dispatch(filterUpdate(e.target.value));

  return (
    <label className={styles.Filter}>
      Find contacts by name
      <input type="text" name="filter" value={filter} onChange={onChange} />
    </label>
  );
};

export default Filter;
