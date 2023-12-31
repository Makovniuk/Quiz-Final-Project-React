/* eslint-disable promise/catch-or-return */
const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    // eslint-disable-next-line promise/always-return
    import('web-vitals').then(({
      getCLS, getFID, getFCP, getLCP, getTTFB,
    }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
