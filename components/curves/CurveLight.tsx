interface SVGColor {
  color: string;
}

const CurveLight = (content: SVGColor) => {
  const { color } = content;

  return (
    <svg
      width="1439"
      height="166"
      viewBox="0 0 1439 166"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 19.6356L120 13.7335C240 7.83128 480 -4.81624 720 1.92911C960 7.83128 1200 32.2831 1320 44.0875L1440 55.8918V165.504H1320C1200 165.504 960 165.504 720 165.504C480 165.504 240 165.504 120 165.504H0V19.6356Z"
        fill={color}
      />
    </svg>
  );
};

export default CurveLight;
