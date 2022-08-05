import { useLocation } from 'react-router-dom';

const useLayout = () => {
  const location = useLocation();
  return location.key;
};

export default useLayout;
