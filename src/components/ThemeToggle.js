import React, { 
    // Component,
    useContext 
} from 'react'
import { ThemeContext } from '../context/ThemeContext';

// export class ThemeToggle extends Component {
//     static contextType = ThemeContext;
//     render() {
//         const{toggleTheme} = this.context;
//         return (
//             <button onClick={toggleTheme}>Toggle the Theme</button>
//         )
//     }
// }

const ThemeToggle = () => {
    const {toggleTheme} = useContext(ThemeContext);
    return (
        <button onClick={toggleTheme}>Toggle the Theme</button>
    )
}

export default ThemeToggle