import {useSelector} from 'react-redux';

function useAuthUser() {
  return useSelector(state => state.homelyHub.authUser);
}
export default useAuthUser;