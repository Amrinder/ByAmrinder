/**
 * Js for home page.
 */

function init() {
	YUI().use('node', 'transition', 'event-mouseenter', 'anim', 'event', function (Y) {
		var body = Y.one('.am-body'),
			container = body.one('.am-container'),
			containerHeight = body.get('offsetHeight'),
			containerWidth = body.get('offsetWidth') + 17,
			MENU_HTML = '<ul><li>Skills</li><li>Projects</li><li>Blog</li><li>Contact</li></ul>',
			skillAnim = getAnim(containerHeight),
			projectsAnim = getAnim(containerHeight * 2),
			blogAnim = getAnim(containerHeight * 3)
			contactAnim = getAnim(containerHeight * 4);

		body.setStyle('width', containerWidth);
		
		container.setStyles({
			'height': containerHeight,
			'width' : containerWidth
		});
		
		container.addClass('page');

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
				
			node.append(infoNode);
			body.append(node);
			infoBox = body.one('.info-box');
			infoContent = body.one('.info-content');
			
			body.one('.info-container').transition({
				delay: 2,
				duration: 1,
				opacity: '1',
				easing: 'ease'
			});
			
			body.delegate('click', function () {
				if (infoBox.hasClass('shrinked')) {
				
					infoBox.transition({
						duration: 1,
						left: '0px',
						easing: 'ease'
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
						easing: 'ease'
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
		
		function getAnim(height) {
			return new Y.Anim({
				node: '.am-body',
				to:{
					scroll: [0, height]
				},
				duration: 1,
				easing: Y.Easing.easeBoth
			});
		}
		
		function renderMenu() {
			var node = Y.Node.create('<div class="menu-container"></div>'),
				navNode = null;
				
			node.append(Y.Node.create(MENU_HTML));
			body.append(node);
			body.one('.menu-container').transition({
				delay: 2,
				duration: 1,
				opacity: '1',
				easing: 'ease'
			});
		}
	

		function renderPage(id, color) {
			var con = Y.Node.create('<div class="page" id="' + id + '"></div>');
			
			con.setStyles({
				'height': containerHeight,
				'width' : containerWidth,
				'background': color
			});
			
			body.append(con);
		}
		
		
		
		function renderPages() {
			renderPage('#skills', 'purple');
			renderPage('#projects', 'red');
			renderPage('#blog', 'yellow');
			renderPage('#contact', 'green');
		}
		
		function renderUI() {
			renderName();
			renderInfo();
			renderMenu();
			renderPages();
			body.set('scrollTop', 0);
		}
		
		function gotoSkills() {
			skillAnim.run();
		}
		
		function gotoContact() {
			contactAnim.run();
		}
		
		function gotoBlog() {
			blogAnim.run();
		}
		
		function gotoProjects() {
			projectsAnim.run();
		}
		
		function bindUI() {
			body.delegate('click', function (e) {
				var clickedItem = e.currentTarget.getHTML().toLowerCase();
				
				switch (clickedItem) {
				
				case 'skills': gotoSkills();
					break;
					
				case 'blog': gotoBlog();
					break;
					
				case 'contact': gotoContact();
					break;
					
				case 'projects': gotoProjects();
					break;
				}
			}, '.menu-container li', this);
		}
		
		renderUI();
		bindUI();
	});
}