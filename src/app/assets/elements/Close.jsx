const Close = (props) => {
  return (
    <svg viewBox='0 0 44 44' fill='none' {...props}>
      <rect
        width='60'
        height='2'
        transform='matrix(0.707107 0.707107 0.707107 -0.707107 0.0795898 1.49414)'
        fill='white'
      />
      <rect
        x='43.9209'
        y='1.49414'
        width='60'
        height='2'
        transform='rotate(135 43.9209 1.49414)'
        fill='white'
      />
    </svg>
  );
};

export default Close;
