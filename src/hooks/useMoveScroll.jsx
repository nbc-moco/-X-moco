import React, { useRef, useEffect, useState } from 'react';

//hook
function useMoveScroll(name = null) {
  const element = useRef();

  useEffect(() => {
    console.log(element.current);
  }, [element]);

  const onMoveToElement = () => {
    element.current && element.current.scrollIntoView({ block: 'start' });
  };
  return { name, element, onMoveToElement };
}

export default useMoveScroll;
