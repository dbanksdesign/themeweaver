export default {
	timer: null,

	stop: function () {
		clearTimeout(this.timer);
	},
	
	scrollToPosition: function(offset, targetY, callback) {
		var settings = {
			duration: 1000,
			easing: {
				outQuint: function (x, t, b, c, d) {
					return c*((t=t/d-1)*t*t*t*t + 1) + b;
				}
			}
		};
		var startTime = Date.now();
		var percentage = 0;

		if (this.timer) {
			clearInterval(this.timer);
		}

		function step () {
			var yScroll;
			var elapsed = Date.now() - startTime;

			if (elapsed > settings.duration) {
				clearTimeout(this.timer);
			}

			percentage = elapsed / settings.duration;

			if (percentage > 1) {
				clearTimeout(this.timer);

				if (callback) {
					callback();
				}
			} else {
				yScroll = settings.easing.outQuint(0, elapsed, offset, targetY, settings.duration);
				document.getElementById('page-content').scrollTo(0, yScroll);
				this.timer = setTimeout(step, 10);
			}
		}

		this.timer = setTimeout(step, 10);
	},
	
	scrollToTop: function(callback) {
		var offset = window.pageYOffset;
		var targetY = - offset;
		this.scrollToPosition(offset, targetY, callback);
	},

	scrollTo: function (id, scrollableId, offset, callback) {
		offset = offset || 0;
		var node = document.getElementById(id);
		if (node) {
			var nodeTop = node.offsetTop;
			var scrollable = document.getElementById(scrollableId);
			var scrollTop = scrollable.scrollTop;
			var delta = nodeTop - scrollTop - offset;
			this.scrollToPosition(scrollTop, delta, callback);
		}
	}
};
