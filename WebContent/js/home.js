/**
 * Js for home page.
 */

function init() {
	YUI().use('node', 'transition', 'event-mouseenter', function (Y) {
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
						'<div class="info-content">I am Amrinder Singh,</br>' +
						'A Full Stack Engineer</br>' +
						'Specializing in UI/UX Development.</br>' +
						'I Graduated from</br>Thapar University and</br>' +
						'currently living in</br>Chandigarh' +
						'</div><div class="info-icon"></div></div>'),
				infoBox = null,
				infoContainer = null;
				
			infoNode.setStyle('height', containerHeight);
			node.append(infoNode);
			container.append(node);
			infoBox = container.one('.info-box');
			infoContent = container.one('.info-content');
			
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
					
					infoContent.transition({
						duration: 1,
						opacity: 1,
						top: '275px'
					});
					infoBox.addClass('expanded');
					infoBox.removeClass('shrinked');
				} else if (infoBox.hasClass('expanded')) {
					infoBox.transition({
						duration: 1,
						left: '-251px',
						easing: 'ease',
					});
					
					infoContent.transition({
						duration: 1,
						opacity: 0,
						top: '325px'
					});
					
					infoBox.addClass('shrinked');
					infoBox.removeClass('expanded');
				}
			}, '.info-icon');
		}
		
		function renderMenu() {
			var node = Y.Node.create('<div class="navigate-down"></div>'),
				navNode = null;
			
			node.setStyles({
				bottom: '0px',
				left: (containerWidth - 48) / 2 + 'px',
			});
			
			container.append(node);
			
			container.one('.navigate-down').transition({
				delay: 2,
				duration: 1,
				opacity: '1',
				bottom: '30px',
				easing: 'ease'
			});
			container.one('.navigate-down').on('mouseenter', function () {
				container.one('.navigate-down').transition({
					duration: 0.1,
					bottom: '25px',
					easing: 'ease'
				});	
			});
			container.one('.navigate-down').on('mouseleave', function () {
				container.one('.navigate-down').transition({
					duration: 0.1,
					bottom: '30px',
					easing: 'ease'
				});	
			});
		}
		
		function renderButton(container, text) {
			var button = Y.Node.create('<div class="menu-button"></div>'),
				buttonFlip = Y.Node.create('<div class="button-back"></div>');
				
			buttonFlip.setHTML(text);
			container.append(button);
			container.append(buttonFlip);
			
			button.on('hover', function () {
				button.transition({
					duration: 1,
					width: '0px',
					easing: 'ease'
				});
				buttonFlip.transition({
					delay: 1,
					duration: 1,
					width: '100px',
					easing: 'ease'
				});
			});
		}
		renderName();
		renderInfo();
		renderMenu();
	});
}