exports.checkOne = function(x) {
  if (!x) throw new Error();
};

const checkList = exports.checkList = function(xs) {
  for (var i=0; i<xs.length; ++i)
    checkOne(xs[i]);
};
