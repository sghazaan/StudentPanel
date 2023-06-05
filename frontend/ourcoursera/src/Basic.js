import { useNavigate } from 'react-router-dom';
const Basic = () => {
    const navigate = useNavigate();
    const handleLogin = () => {
        navigate('/login');
    }
    return(
        <div>
             <button className="btn btn-danger m-2" onClick={handleLogin}>Go To Log in Page</button>
        </div>
    )
}
export default Basic;