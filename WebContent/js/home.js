/**
 * Js for home page.
 */

function init() {
	YUI().use('node', function (Y) {
		var body = Y.one('.am-body'),
			container = body.one('.am-container'),
			containerHeight = body.get('offsetHeight'),
			containerWidth = body.get('offsetWidth');

		container.setStyles({
			'height': containerHeight,
			'width' : containerWidth
		});

		function alignName() {
			var nameNode = container.one('.name'),
				nameNodeHeight = nameNode.get('offsetHeight'),
				nameNodeWidth = nameNode.get('offsetWidth');

			nameNode.setXY([
			    (containerWidth - nameNodeWidth) / 2,
			    (containerHeight - nameNodeHeight) / 2
			]);

			nameNode.setStyle('display', 'block');
		}

		alignName();
	});
}