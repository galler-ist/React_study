import "./App.css";
import {
  useRef,
  useState,
  useReducer,
  useCallback,
  createContext,
  useMemo,
} from "react";
import ContactEditor from "./components/ContactEditor";
import ContactList from "./components/ContactList";

const mockData = [
  {
    id: 0,
    name: "이정환",
    contact: "king199777@gmail.com",
  },
];

function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];
    case "REMOVE":
      return state.filter((item) => item.id !== action.targetId);
    default:
      return state;
  }
}

export const ContactsStateContext = createContext();
export const ContactsDispatchContext = createContext();

function App() {
  // const [contacts, setContacts] = useState(mockData);
  const [contacts, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(1);

  const onCreate = useCallback((name, contact) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        name,
        contact,
      },
    });
  }, []);

  // App.jsx
  const onRemove = useCallback((targetId) => {
    dispatch({
      type: "REMOVE",
      targetId,
    });
  }, []);

  const memoizedDispatch = useMemo(() => {
    return { onCreate, onRemove };
  }, []);

  return (
    <div className="App">
      <h2>Contact List</h2>
      <ContactsStateContext.Provider value={contacts}>
        <ContactsDispatchContext.Provider value={memoizedDispatch}>
          <section>
            <ContactEditor />
          </section>
          <section>
            <ContactList />
          </section>
        </ContactsDispatchContext.Provider>
      </ContactsStateContext.Provider>
    </div>
  );
}

export default App;
