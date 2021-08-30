import {apiHandler} from "common/api/handler";
import {getRead} from "../../common/api/impl/read";


export default apiHandler({
  handler: {
    GET: async ({helper}) => {
      const articleId = helper.museQuery('articleId')
      const userId = helper.getUserId()
      return getRead({
        objId: `tutorial/${articleId}`,
        userId: userId,
      })
    },
  }
})