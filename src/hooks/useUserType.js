import { useSelector } from 'react-redux';

function useUserType() {
  return useSelector((state) => state.global.userType);
}
export default useUserType;