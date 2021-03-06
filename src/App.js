import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

import PublicRoutes from './routes/publicRoutes'

function App(props) { 

  return (
    <div className="App">
      <PublicRoutes/>
      <Redirect path="/**" to="/#home"/>
    </div>
  );
}

export default App;
