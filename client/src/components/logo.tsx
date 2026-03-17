import { useNavigate } from 'react-router';

export const Logo = () => {
    const navigate = useNavigate();
    return <h1 onClick={() => navigate('/boards')}>TasksManager</h1>;
};
