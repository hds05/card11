
import './App.css';
import { Fragment } from 'react';
import Card from './Card';
import Headr from './Card2';



function App() {
  return (
    <Fragment>

      <div className="App">
        <div className='full'>  <Headr />  </div>
        <div>
          <div className='center'>
            <div className='stl'>
              <img className='img' src="logo192.png " />
              <div>
                <h1 style={{ color: 'white', marginTop:'30x' }}> Name : welcome</h1>
                <h2>learn react</h2>
              </div>

              {/* <Card /> */}

            </div>
          </div>
        </div>
      </div>

    </Fragment>

  );
}

export default App;
