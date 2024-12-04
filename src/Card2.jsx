import './App.css';
import { Fragment } from 'react';
function Headr() {
    return (
        <Fragment>
            <div  >
                <ul className='headr'>
                    <li className='sl'><button className='btnstyl'>home</button></li>
                    <li className='sl'><button className='btnstyl'>menu</button></li>
                    <li className='sl'><button className='btnstyl'>plant trees</button></li>
                    <li className='sl'><button className='btnstyl'>about us</button></li>
                </ul>


            </div>

        </Fragment>

    );
}
export default Headr;
