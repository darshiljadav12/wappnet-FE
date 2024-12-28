import { AppProvider } from "./providers";
import { Contacts } from "./features";

const App = () => (
  <AppProvider>
    <Contacts />
  </AppProvider>
);

export default App;
