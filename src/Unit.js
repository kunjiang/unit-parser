
function Unit( digit, unit ) {
  this._digit = digit;
  this._unit = unit;
}

Unit.prototype.toString = function () {
  return `${ this._digit }${ this._unit }`;
};

Unit.prototype.parse = function ( unit ) {

};

Unit.__unitConfig__ = {
  _names: [ 'K', 'M' ],
  _steps: [ 1000, 1000 ],
};

Unit.config = function ( unitNames, unitSteps ) {

};
