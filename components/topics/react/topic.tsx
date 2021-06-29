import {Topic} from "../topic";
import {BasicArticleSet} from "./articles/basic/articles";
import {ProjectArticleSet} from "./articles/project/articles";
import {AdvancedArticleSet} from "./articles/advanced/articles";
import {faReact} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

export const ReactTopic: Topic = {
  id: 'react',
  name: 'React',
  draft: false,
  Icon: () => (
    <FontAwesomeIcon icon={faReact}
                     className={'text-react animate-spin-slow duration-1000 h' +
                     'over:ring-2 ring-react !w-[36px] !h-[36px] rounded-[18px]'}/>
  ),
  articles: [
    BasicArticleSet,
    ProjectArticleSet,
    AdvancedArticleSet,
  ]
}