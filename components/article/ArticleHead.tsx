import {ArticleData} from "../topics/topic";
import {Read} from "../../common/components/badge/Read";
import {Like} from "../../common/components/badge/Like";
import {Like as LikeState, Read as ReadState} from 'common/api/impl/domain'
import useSWR from "swr";
import {useCallback} from "react";
import {isSSR} from "../../common/util/next";

type Props = {
  article: ArticleData
}

export const ArticleHead = (props: Props) => {
  const {article} = props
  const articleId = isSSR() ? '' : window.location.href.split('?')[0]
  return (
    <div className={'space-y-2 mb-4'}>
      <div className={'text-4xl'}>
        {article.meta.title || article.meta.name}
      </div>
      <div className={'space-x-2'}>
        <ReadButton articleId={articleId}/>
        <LikeButton articleId={articleId}/>
      </div>
    </div>
  )
}


const LikeButton = ({articleId}: { articleId: string }) => {
  const like = useSWR<LikeState>(`/api/like?articleId=${articleId}`)
  const onLike = useCallback(() => {
    fetch(`/api/like?articleId=${articleId}&value=${(like.data?.you || 0) === 0}`, {
      method: 'POST'
    })
      .then(() => like.mutate())
    like.mutate(l => l === undefined ? {total: 1, you: true} : ({
      total: l.you ? l.total - 1 : l.total + 1,
      you: !l.you,
    }), false)
  }, [like, articleId])
  return (
    <Like total={like.data?.total || 0}
          like={!!like.data?.you}
          loading={like.data === undefined}
          onLike={onLike}
    />
  )
}

const ReadButton = ({articleId}: { articleId: string }) => {
  const read = useSWR<ReadState>(`/api/read?articleId=${articleId}`)
  return (
    <Read total={read.data?.total || 0}
          loading={read.data === undefined}
    />
  )
}