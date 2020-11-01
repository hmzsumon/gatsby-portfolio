import React, { useEffect } from 'react';

const Achievement = () => {
  useEffect(() => {
    document.title = "Achievement"
  }, []);

  return (
    <div className="container" >
      <div className="row ">
        <div className="col">
          <img className="w-100" src="https://i.ibb.co/6JX11H0/pro-certi.png" alt="certificate manik roy" />
        </div>
      </div>
    </div>
  );
};

export default Achievement;
