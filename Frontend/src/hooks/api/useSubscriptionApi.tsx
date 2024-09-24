import { useHttpMethodContext } from '../../context/HttpMethodProvider';
import { ApiResponseData } from '../../types/api';

const useSubscriptionApi = () => {
    const { get } = useHttpMethodContext();

  const getAllSubscription = async (showApiLoader = true): Promise<ApiResponseData> => {
    const response = await get('/subscription/plans', showApiLoader);

    // Add a parser if required

    return response;
  };

  return { getAllSubscription };


}

export default useSubscriptionApi