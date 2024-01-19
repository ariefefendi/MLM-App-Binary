import React from "react";
import { Helmet } from "react-helmet";

const head = (props) => {
  let R = props.MainModel;
  return (
    <div className='application'>
      <Helmet>
        <meta charSet='utf-8' />
        <title>{R.title}</title>
      </Helmet>
    </div>
  );
};

export default head;
