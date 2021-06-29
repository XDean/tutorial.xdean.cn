import {Topic} from "../topic";
import {BasicArticleSet} from "./articles/basic/articles";
import {ProjectArticleSet} from "./articles/project/articles";
import {AdvancedArticleSet} from "./articles/advanced/articles";
import {faReact} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

export const ReactTopic: Topic = {
  name: 'React',
  draft: false,
  topbar: {
    title: 'XDean的React教程',
    left: <FontAwesomeIcon icon={faReact} className={'text-react animate-spin-slow duration-1000'}/>
  },
  articles: [
    BasicArticleSet,
    ProjectArticleSet,
    AdvancedArticleSet,
  ]
}