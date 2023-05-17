import { Layout, Space } from "antd";
import PortfolioCard from "./PortfolioCard";
import portfolioData from "../../data/portfolioData";
import style from "./style/Portfolio.module.css";

const pageContent = portfolioData.map((item, index) => {
  return <PortfolioCard className={style.portfolio_card} data={item} key={index} />;
});

const Portfolio = () => {
  return (
    <Layout>
      <Layout.Content>
        <Space
          className={style.portfolio_space}
          direction="vertical"
          size="large"
          wrap={true}
        >
          {pageContent}
        </Space>
      </Layout.Content>
    </Layout>
  );
};

export default Portfolio;
