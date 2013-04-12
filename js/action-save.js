Action.Save = function() {
	Action.call(this);
}
Action.Save.prototype = Object.create(Action.prototype);

Action.Save.prototype.go = function(canvas, type, quality) {
	var promise = Action.prototype.go.call(this);

	promise.fulfill(canvas.toDataURL(type, quality));

	return promise;
}
