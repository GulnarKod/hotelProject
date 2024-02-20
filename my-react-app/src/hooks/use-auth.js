
import {useAppSelector} from 'react-redux'
 function useAuth() {
   const {email, token, id} = useAppSelector(state => state.user);
   console.log('is auth work', email, token, id)
   return {
       isAuth: !!email, 
       email,
       token,
       id,
   };
}
export default useAuth;