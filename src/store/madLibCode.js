/********************************************************************************/
/*										
/*	Functions to get items from a madlib and do replace		
/*										
********************************************************************************/

function getItems(madlib) {
  let mad = madlib.content;
  let rslt = [];
  mad.replace(/\[([^\])]*)\]/g, function(mat, p1) {
    rslt.push(p1);
  });
  return rslt;
}

function replaceItems(madlib, items) {
  let options = getItems(madlib);
  let mad = madlib.content;
  let i = 0;
  let r = mad.replace(/\[([^\])]*)\]/g, function() {
    if (items[i] === undefined) {
      return `<mark>${options[i++]}</mark>`;
    } else return `<strong>${items[i++]}</strong>`;
  });
  return r;
}

function highlight(madlib) {
  let options = getItems(madlib);
  let mad = madlib.content;
  let i = 0;
  let r = mad.replace(/\[([^\])]*)\]/g, function() {
    return `<mark>${options[i++]}</mark>`;
  });
  return r;
}
module.exports = { getItems, replaceItems, highlight };
