import styles from "./App.module.css";
import { ContactList } from "./components/ContactList";

function App() {
  return (
    <div className={styles.App}>
      <ContactList />
    </div>
  );
}

export default App;
