export const textToLine = (text) => {
  return text.split(" ").map((item) => {
    return (
      <div key={item} className='text-line'>
        <p className='text-in-side'>{item}</p>
      </div>
    );
  });
};
