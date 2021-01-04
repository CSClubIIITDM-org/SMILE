import React from 'react';
import CumilativeInfo from '../partials/CumilativeInfo';
import SmallInfo from '../partials/SmallInfo';
import TextBox from '../partials/TextBox';
import ImgInfo from '../partials/ImgInfo';

const ComponentsPage = () => {
  return (
    <div className='container my-5'>
      <TextBox />
      <SmallInfo />
      <CumilativeInfo />
      <ImgInfo />
    </div>
  );
};

export default ComponentsPage;
