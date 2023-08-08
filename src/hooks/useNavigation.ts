import { useNavigate } from 'react-router-dom';

const useNavigation = () => {
  const navigate = useNavigate();

  // You can define any navigation logic or custom functions here if needed

  return { navigate };
};

export default useNavigation;
