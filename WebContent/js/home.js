/**
 * Js for home page.
 */

function init() {
	YUI().use('node', 'transition', function (Y) {
		var body = Y.one('.am-body'),
			container = body.one('.am-container'),
			containerHeight = body.get('offsetHeight'),
			containerWidth = body.get('offsetWidth');

		container.setStyles({
			'height': containerHeight,
			'width' : containerWidth
		});

		function renderName() {
			var nameNode = Y.Node.create('<div class="name">Amrinder Singh' +
				'<span class="title">Full Stack Engineer</span>' +
				'</div>');

			nameNode.setXY([
			    (containerWidth) / 2,
			    (containerHeight) / 2
			]);

			container.append(nameNode);
			container.one('.name').transition({
				duration: 1, // seconds
				easing: 'ease',
				width: '554px',
				opacity: 1,
				height: {
					delay: 1,
					duration: 0.5,
					value: '64px',
					easing: 'ease'
				},
				top: {
					delay: 1,
					duration: 0.5,
					value: (containerHeight - 64) / 2 + 'px', 
					easing: 'ease'
				},
				left: {
					delay: 0,
					duration: 1,
					value: (containerWidth - 554) / 2 + 'px',
					easing: 'ease'
				},
				color: {
					delay: 2,
					duration: 1,
					value: 'black',
					easing: 'ease'
				},
				border: {
					delay: 2,
					duration: 1,
					value: 'white thin solid',
					easing: 'ease'
				}
			});
		}

		renderName();
	});
}