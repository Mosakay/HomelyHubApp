import { useSelector, useDispatch } from "react-redux";
import { useCallback } from "react";
import { toggleLoadingModalAction } from "../store/StoreSlice";

function useLoadingModal() {
  const dispatch = useDispatch();
  const isLoadingModal = useSelector((state) => state.global.isLoadingModal);

  const toggleLoadingModal = useCallback(
    (payload) => {
      dispatch(toggleLoadingModalAction(payload));
    },
    [dispatch]
  );

  return { isLoadingModal, toggleLoadingModal };
}

export default useLoadingModal;
