const converter = (str) => {
  try {
    if (/^[1-9]\d*$/.test(str) && str > 0) return Number(str);
    throw new Error('Некорректный ввод');
  } catch (e) {
    return e;
  }
};

export default converter;
