import ipad_pro_image from "~img/store-card-ipad-pro.jpg";
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

function Product() {
  const imgStyle = {
    height: "auto",
    width: "100%",
    borderRadius: "0.5rem",
  };
  // props.images = '12344'
  return (
    <StyledProductContainer $scale={1.5} $transitionDuration="0.5s">
      <img src={ipad_pro_image} alt="iPad Pro" style={imgStyle} />
      <div className={styles.productTextContainer}>
        <div className={styles["product-title"]}>iPad Pro</div>
        <div className={styles.productDetail}>磅礴的薄 RMB 8999 起</div>
      </div>
    </StyledProductContainer>
  );
}

export default Product;
