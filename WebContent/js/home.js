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

		function renderInfo () {
			var node = Y.Node.create('<div class="info-container"></div>'),
				infoNode = Y.Node.create('<div class="info-box shrinked"><div class="pic"></div>' +
						'<div class="info-content">I am Amrinder Singh.</br>' +
						'A Full Stack Engineer,</br>' +
						'Specializing in UI/UX Developement.</br>' +
						'I Gratuated from</br>Thapar University and</br>' +
						'currently living in</br>Chandigarh' +
						'</div><div class="info-icon"></div></div>'),
				infoBox = null;
				
			infoNode.setStyle('height', containerWidth);
			node.append(infoNode);
			container.append(node);
			infoBox = container.one('.info-box');
			container.one('.info-container').transition({
				delay: 2,
				duration: 1,
				opacity: '1',
				easing: 'ease',
			});
			container.delegate('click', function () {
				if (infoBox.hasClass('shrinked')) {
					infoBox.transition({
						duration: 1,
						left: '0px',
						easing: 'ease',
					});
					infoBox.addClass('expanded');
					infoBox.removeClass('shrinked');
				} else if (infoBox.hasClass('expanded')) {
					infoBox.transition({
						duration: 1,
						left: '-251px',
						easing: 'ease',
					});
					infoBox.addClass('shrinked');
					infoBox.removeClass('expanded');
				}
			}, '.info-icon');
		}
		
		renderName();
		renderInfo();
	});
}