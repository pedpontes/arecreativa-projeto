import { ApiConsumer } from "../services/ApiConsumer";
import { FetchApiService } from "../services/FetchApiService";

const apiService = new FetchApiService();
const apiConsumer = new ApiConsumer(apiService);

export default apiConsumer;