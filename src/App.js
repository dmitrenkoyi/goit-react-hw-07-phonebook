import Container from "./components/Container";
import Section from "./components/Section";
import Form from "./components/FormContacts";
import Filter from "./components/Filter";
import ContactsList from "./components/ContactsList";
import { useFetchContactsQuery } from "redux/phonebook/slice";

import styles from "components/Container/Container.module.scss";

function App() {
  const { data, isFetching } = useFetchContactsQuery();
  return (
    <Container>
      <div className={styles.App}>
        <Section title="Phonebook">
          <Form contacts={data} />
        </Section>
        <Section title="Contacts">
          <Filter />
          <ContactsList contacts={data} loading={isFetching} />
        </Section>
      </div>
    </Container>
  );
}

export default App;
