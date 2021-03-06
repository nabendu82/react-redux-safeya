import { Provider } from 'react-redux';
import './App.css';
import EggContainer from './components/EggContainer';
import HookChickenContainer from './components/HookChickenContainer';
import HookEggContainer from './components/HookEggContainer';
import ItemContainer from './components/ItemContainer';
import NewEggContainer from './components/NewEggContainer';
import UserContainer from './components/UserContainer';
import store from './redux/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <EggContainer />
        <HookEggContainer />
        <HookChickenContainer />
        <NewEggContainer />
        <ItemContainer egg />
        <ItemContainer />
        <UserContainer />
      </Provider>
    </div>
  );
}

export default App;
