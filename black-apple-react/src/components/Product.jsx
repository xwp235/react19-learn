import ipad_pro_image from "~img/store-card-ipad-pro.jpeg";
// import "@/main.css";
import styled from "styled-components";

import styles from "./Product.module.css";
// css-in-js 方式实现组件样式
const StyledProductContainer = styled.div`
  position: relative;
  max-width: 28rem;
  transition: transform
    ${({ $transitionDuration = "0.3s" }) => $transitionDuration} ease-in-out;

  &:hover {
    transform: scale(${({ $scale = 1 }) => $scale});
    cursor: pointer;
  }
`;

function Product({ image, title, detail, onProductClick }) {
  const imgStyle = {
    height: "auto",
    width: "100%",
    borderRadius: "0.5rem",
  };
  return (
    <StyledProductContainer
      $scale={1.5}
      $transitionDuration="0.5s"
      onClick={() => onProductClick(title)}
    >
      <img src={image} alt="iPad Pro" style={imgStyle} />
      <div className={styles.productTextContainer}>
        <div className={styles["product-title"]}>{title}</div>
        <div className={styles.productDetail}>{detail}</div>
      </div>
    </StyledProductContainer>
  );
}

export default Product;
