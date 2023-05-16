import { Layout, Space } from "antd";
import {
  GithubOutlined,
  CodeOutlined,
  AppstoreOutlined,
  Html5Outlined,
  UserOutlined,
  StarOutlined,
} from "@ant-design/icons";
import HomeCard from "./HomeCard";
import categoryMatrix from "../common/categoryMatrix";
import style from "./style/Home.module.css";

const Home = () => {
  return (
    <Layout>
      <Layout.Content className={style.lw_home_content}>
        <Space
          className={style.lw_home_space}
          direction="horizontal"
          size="middle"
          wrap={true}
          align="start"
        >
          <HomeCard
            title={
              <span>
                <UserOutlined className={style.lw_home_card_icon} />
                {categoryMatrix.PORTFOLIO}
              </span>
            }
            extra={categoryMatrix.PORTFOLIO}
          />
          <HomeCard
            title={
              <span>
                <Html5Outlined className={style.lw_home_card_icon} />
                {categoryMatrix.COMPONENTS}
              </span>
            }
            extra={categoryMatrix.COMPONENTS}
          />
          <HomeCard
            title={
              <span>
                <AppstoreOutlined className={style.lw_home_card_icon} />
                {categoryMatrix.APPLICATIONS}
              </span>
            }
            extra={categoryMatrix.APPLICATIONS}
          />
          <HomeCard
            title={
              <span>
                <CodeOutlined className={style.lw_home_card_icon} />
                {categoryMatrix.LEETCODES}
              </span>
            }
            extra={categoryMatrix.LEETCODES}
          />
          <HomeCard
            title={
              <span>
                <GithubOutlined className={style.lw_home_card_icon} />
                {categoryMatrix.GITHUB}
              </span>
            }
            extra={categoryMatrix.GITHUB}
          />
          <HomeCard
            title={
              <span>
                <StarOutlined className={style.lw_home_card_icon} />
                {categoryMatrix.MORE}
              </span>
            }
            extra={categoryMatrix.MORE}
          />
        </Space>
      </Layout.Content>
    </Layout>
  );
};

export default Home;