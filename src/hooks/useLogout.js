import {useDispatch} from 'react-redux'
import {useCallback} from "react";
import {logoutAction} from "../store/StoreActions";

function useLogout() {
  const dispatch = useDispatch()
  const logout = useCallback(() => dispatch(logoutAction()), [dispatch])
  return {logout}
}

export default useLogout