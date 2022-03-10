import {useSelector} from 'react-redux';

function useUserType() {
  return useSelector(state => state.homelyHub.userType);
}
export default useUserType;
