
import Login from '../src/components/Auth/Login'
import Signup from '../src/components/Auth/Signup'
import Navbar from '../src/components/Nav'

const App = () => {
	return (
        <>
        <Navbar />
        <Signup />
        <Login />
    </>
    )
    
};

// App.propTypes = {
// 	title: PropTypes.string.isRequired,
// };

export default App;
