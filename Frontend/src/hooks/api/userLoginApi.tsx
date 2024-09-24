import { useHttpMethodContext } from '../../context/HttpMethodProvider';
import { ApiResponseData } from '../../types/api';

const useLoginApi = () => {
    const { post } = useHttpMethodContext();

  const loginUser = async (
    username: string,
    password:string,
    showApiLoader = true): Promise<ApiResponseData> => {
    const response = await post('/users/authenticate-user', {username, password}, showApiLoader);

    return response;
  };

  return { loginUser };


}

export default useLoginApi