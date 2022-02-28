const SvgGradients = () => {
  const makeStopStyle = (color, opacity) => {
    return { stopColor: color, stopOpacity: opacity };
  };

  return (
    <svg style={{width: 0, height: 0, display: 'block' }}>
      <defs>
        <linearGradient id="svg-insta-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={makeStopStyle('rgb(133, 66, 198)', '1')} />
          <stop offset="50%" style={makeStopStyle('rgb(230, 64, 80)', '1')} />
          <stop offset="100%" style={makeStopStyle('rgb(253, 186, 89)', '1')} />
        </linearGradient>
        <linearGradient id="svg-twitter-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={makeStopStyle('rgb(114, 192, 248)', '1')} />
          <stop offset="0%" style={makeStopStyle('rgb(29, 155, 240)', '1')} />
        </linearGradient>
      </defs>
    </svg>
  )
};

export default SvgGradients;