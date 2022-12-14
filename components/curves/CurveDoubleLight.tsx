interface SVGColor {
  color: string;
}

const CurveDoubleLight = (content: SVGColor) => {
  const { color } = content;

  return (
    <svg
      width="1439"
      height="80"
      viewBox="0 0 1439 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1440 19.8845L1380 16.6475C1320 13.4105 1200 6.47408 1080 6.47407C960 6.47406 840 13.4105 720 26.8208C600 39.7688 480 60.1156 360 69.8265C240 79.9999 120 79.9999 60 79.9999L0 79.9999L6.99381e-06 3.81091e-06L60 9.05628e-06C120 1.43016e-05 240 2.47924e-05 360 3.52831e-05C480 4.57738e-05 600 5.62646e-05 720 6.67553e-05C840 7.7246e-05 960 8.77368e-05 1080 9.82275e-05C1200 0.000108718 1320 0.000119209 1380 0.000124454L1440 0.0001297L1440 19.8845Z"
        fill={color}
      />
    </svg>
  );
};

export default CurveDoubleLight;
