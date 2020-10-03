import React from 'react';

const Head = (props) => {
  React.useEffect(() => {
    document.title = props.title + ' | JSBrakes';
    document
      .querySelector("meta[name='description']")
      .setAttribute('content', props.description || '');
  }, [props]);
  return <div></div>;
};

export default Head;
