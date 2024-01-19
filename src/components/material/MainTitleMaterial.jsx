import { React, useState } from "react";

function App(props) {
  let R = props.RecordCard;

  const [Data, setData] = useState({
    Title: R.Title,
    url: R.url,
  });

  return (
    <>
      <div className='row mt-0 mb-3'>
        <div className='col'>
          <h6 className='title'>{Data.Title}</h6>
        </div>
        <div className='col-auto'>
          <a href={Data.url} className='small'>
            View all
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
