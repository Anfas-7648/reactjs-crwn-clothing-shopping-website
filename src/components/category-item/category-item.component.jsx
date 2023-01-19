import "./category-item.styles.scss";
import { Link } from "react-router-dom";
const CategoryItem = ({ category }) => {
  const { imageUrl, title } = category;
  return (
    <div className="category-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <Link className="main-category-link" to={title}>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Link>
    </div>
  );
};

export default CategoryItem;
