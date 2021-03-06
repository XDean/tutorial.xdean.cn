import { faReact } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Topic } from '../topic';
import { BasicArticleSetEN } from './articles-en/basic';
import { AdvancedArticleSet } from './articles/advanced';
import { BasicArticleSet } from './articles/basic';
import { MistakeArticleSet } from './articles/mistake';
import { ProjectArticleSet } from './articles/project';

export const ReactTopic: Topic = {
  id: 'react',
  name: 'React',
  draft: false,
  Icon: () => (
    <FontAwesomeIcon icon={faReact}
                     className={'text-react animate-spin-slow duration-1000 hover:ring-2 ring-react !w-[36px] !h-[36px] rounded-[18px]'}/>
  ),
  articles: [
    {
      sets: [
        BasicArticleSet,
        ProjectArticleSet,
        AdvancedArticleSet,
        MistakeArticleSet,
      ],
    },
    {
      locale: 'en',
      sets: [
        BasicArticleSetEN,
      ],
    },
  ],
};