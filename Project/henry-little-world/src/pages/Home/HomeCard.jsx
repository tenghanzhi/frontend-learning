import { Card } from "antd";
import { Link } from "react-router-dom";
import categoryMatrix from "../common/categoryMatrix";
import style from "./style/HomeCard.module.css";

const HomeCard = (props) => {
  const { title, content, extra } = props;

  console.log(title);
  const cardTitle = title ? title : "New Card";
  const cardContents = content ? (
    content
  ) : (
    <span>This card is still WIP...</span>
  );
  const cardExtra = extra ? <Link to={extra.toLowerCase()}>More</Link> : null;

  return (
    <Card
      className={style.lw_homecard}
      title={cardTitle}
      extra={cardExtra}
      bordered={false}
    >
      {cardContents}
    </Card>
  );
};

export default HomeCard;
