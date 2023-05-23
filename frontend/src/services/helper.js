export const cleanObj = (obj) => {
    for (var key in obj) {
      if (obj[key] === null || obj[key] === "" || obj[key] === undefined) {
        delete obj[key];
      }
    }
    return obj;
  };