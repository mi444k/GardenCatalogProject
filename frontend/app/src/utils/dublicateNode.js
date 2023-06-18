export const duplicateNode = (parentId) => {
  const parent = document.getElementById(parentId);
  const clone = document.createElement('div');

  NodeList.prototype.forEach = Array.prototype.forEach;

  const children = parent.childNodes;
  children.forEach(function (item) {
    const cln = item.cloneNode(true);
    clone.appendChild(cln);
  });
  return clone;
};
