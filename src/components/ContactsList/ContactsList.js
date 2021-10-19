import { useSelector } from "react-redux";
import Loader from "react-loader-spinner";
import { useDeleteContactMutation } from "redux/phonebook/slice";
import { getFilter, getVisibleContacts } from "redux/phonebook/selectors";

import styles from "./ContactsList.module.scss";

const ContactsList = ({ contacts, loading }) => {
  const [deleteContact] = useDeleteContactMutation();
  const keyWord = useSelector(getFilter);

  const filterEl = getVisibleContacts(contacts, keyWord);

  return (
    <ul className={styles.List}>
      {loading && (
        <div className={styles.Loader}>
          <Loader type="Puff" color="#3f51b5" width={50} />
        </div>
      )}
      {filterEl &&
        filterEl.map(({ id, name, number }) => (
          <li key={id}>
            {name}: {number}
            <button
              className={styles.Btn}
              type="button"
              onClick={() => deleteContact(id)}
            >
              Delete
            </button>
          </li>
        ))}
    </ul>
  );
};

export default ContactsList;
