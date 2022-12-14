interface SVGColor {
  color: string;
}

const CurveMedium = (content: SVGColor) => {
  const { color } = content;

  return (
    <svg
      width="1440"
      height="156"
      viewBox="0 0 1440 156"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 83.3264L79.5224 100.279C160.119 117.745 320.239 152.164 480.358 155.76C640.478 158.842 799.522 131.615 959.642 110.553C1119.76 90.0047 1279.88 76.1345 1360.48 69.4562L1440 62.7779V0.618774H1360.48C1279.88 0.618774 1119.76 0.618774 959.642 0.618774C799.522 0.618774 640.478 0.618774 480.358 0.618774C320.239 0.618774 160.119 0.618774 79.5224 0.618774H0V83.3264Z"
        fill={color}
      />
    </svg>
  );
};

export default CurveMedium;
