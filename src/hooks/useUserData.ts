// hooks/useUserData.ts
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUserDetails, clearUserDetails } from '@/redux/slices/user';
import { RootState } from '@/redux/store';
import { fetchUserByEmail } from '@/requests/users';
import { getUserEmailFromToken } from '@/lib/jwtTokenControl';

export const useUserData = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);

  useEffect(() => {
    const email = getUserEmailFromToken()
    console.log(`User email: ${email}`);
    if (email) {
        fetchUserByEmail(email)
        .then((data) => {
            console.log("Fetched User Data",data);
            dispatch(setUserDetails({ email: data.email, name: data.name }));
        })
        .catch((error) => {
            console.error('Failed to fetch user:', error);
            dispatch(clearUserDetails());
        });
    }
  }, [dispatch, user.isAuthenticated]);

  return user;
};
