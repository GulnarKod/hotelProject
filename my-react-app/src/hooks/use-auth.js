import {useSelector} from 'react-redux';
 function useAuth(){
    const{email,password}=useSelector(state=>state.user);
    return{
        // isAuth:!!id,
        email,
        password
    };
}
export default useAuth;