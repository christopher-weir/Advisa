
import { render } from 'react-dom';
import Product from './components/product'; // eslint-disable-line no-unused-vars


render( (
    <div id="widget-wrap">
        <Product
            title={'Imaginary Product'}
            hero={'https://placeholdit.imgix.net/~text?txtsize=70&txt=1000×666&w=1000&h=666'}
            total={500}/>
    </div>

), document.getElementById( 'app' ) );
