exports.formatDate = (date = new Date()) => {
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  month = ("0" + month).slice(-2);
  day = ("0" + day).slice(-2);
  return year + "年" + month + "月" + day + "日 ";
};
