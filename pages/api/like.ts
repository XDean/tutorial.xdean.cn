import {apiHandler} from "common/api/handler";
import {stringToBoolean} from "../../common/util/base";
import {getLike, setLike} from "../../common/api/impl/like";


export default apiHandler({
  handler: {
    GET: async ({helper}) => {
      const articleId = helper.museQuery('articleId')
      const userId = helper.getUserId()
      return await getLike({
        objId: `tutorial/${articleId}`,
        userId: userId,
      })
    },
    POST: async ({helper}) => {
      const articleId = helper.museQuery('articleId')
      const userId = helper.getUserId()
      const like = stringToBoolean(helper.museQuery('value', 'true'))
      await setLike({
        objId: `tutorial/${articleId}`,
        userId: userId,
        like: like,
      })
      return null
    }
  }
})