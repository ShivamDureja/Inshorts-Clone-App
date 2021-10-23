import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { getNews } from "../service/api.js";
import Article from "./Article.jsx";

const Articles = () => {
  const [news, setNews] = useState([]);
  const [page,setPage] = useState(0);

  const dailyNews = async () => {
    try {
      let response = await getNews(page);
      setNews([...news, ...response.data]);
      
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    dailyNews();
  }, [page]);
  return (
    <InfiniteScroll dataLength={news.length}
    next={()=>setPage(page=> page+1)}
    hasMore={true}
    >
      {news?.length > 0 && news.map((article) => <Article article={article} />)}
    </InfiniteScroll>
  );
};

export default Articles;
