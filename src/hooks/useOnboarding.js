import { useSelector, useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { toggleOnboardingAction } from '../store/StoreSlice';

function useOnBoardingStatus() {
  const dispatch = useDispatch();
  const isFirstLauched = useSelector(state => state.global.isFirstLauched);

  const toggleOnboardingStatus = useCallback(
    payload => {
      dispatch(toggleOnboardingAction(payload));
    },
    [dispatch],
  );

  return { isFirstLauched, toggleOnboardingStatus };
}

export default useOnBoardingStatus;
