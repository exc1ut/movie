import Slider from "react-slick";
import styles from "../styles/HomeCarousel.module.scss";

interface Props {
  children: React.ReactNode;
}

function Arrow(props: any) {
  const { className, onClick } = props;
  return (
    <div className={`${className} ${styles.actionArrow}`} onClick={onClick} />
  );
}

const settings = {
  className: "center",
  centerMode: true,
  infinite: true,
  centerPadding: "60px",
  autoplay: true,
  slidesToShow: 3,
  speed: 500,
  nextArrow: <Arrow />,
  prevArrow: <Arrow />,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 960,
      settings: {
        centerMode: false,
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export const HomeCarousel: React.FC<Props> = ({ children }) => {
  return <Slider {...settings}>{children}</Slider>;
};
