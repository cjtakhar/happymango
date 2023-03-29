import { useNavigate } from 'react-router-dom';

export default function Header() {
    const navigate = useNavigate();
    const handleButtonClick = () => {
        navigate('/dash');
    }
    return(
        <div className="header-title">
            <h1>Happy Mango Studios</h1>
            <button className="btn-enter" onClick={handleButtonClick}>enter</button>
        </div>
    )
}