import Link from 'next/link';
import articleStyles from '../styles/Article.module.css';
import { Article } from '../types';

type Props = {
  article: Article;
};

const ArticleItem = ({ article }: Props) => {
  return (
    <Link href={`/article/${article.id}`}>
      <a className={articleStyles.card}>
        <h3>{article.title} &rarr; </h3>
        <p>{article.body}</p>
      </a>
    </Link>
  );
};

export default ArticleItem;
