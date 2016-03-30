$(document).ready(function() {
	var $headerContent   = $('#header-content'),
		$headerCenter    = $('#header-center'),
		$headerTitle     = $('#header-title').children('a'),
		$background      = $('#background'),
		$projectPicLeft  = $('#project-pic-left'),
		$projectPicRight = $('#project-pic-right'),
		homeDescription            = $('#home-description').text(),
		homeTitle                  = $('#home-title').text(),
		photogrammatronDescription = $('#photogrammatron-description').text(),
		photogrammatronTitle       = $('#photogrammatron-title').text(),
		tylerslistDescription      = $('#tylerslist-description').text(),
		tylerslistTitle            = $('#tylerslist-title').text(),
		goFishDescription          = $('#gofish-description').text(),
		goFishTitle                = $('#gofish-title').text(),
		chessDescription           = $('#chess-description').text(),
		chessTitle                 = $('#chess-title').text();

	//responsive
	if ($('#mobile-navbar').css('display') === 'table') {
		$('.home').on('click touch', function () {
			$('.gofish').animate({height: '100px'});
			$('.chess').animate({height: '100px'});
			$('.tylerslist').animate({height: '100px'});
			$('.photogrammatron').animate({height: '100px'});
			$headerCenter.animate({height: '789px'});
		})
		$('.photogrammatron').on('click touch', function () {
			$('.gofish').animate({height: '100px'});
			$('.chess').animate({height: '100px'});
			$('.tylerslist').animate({height: '100px'});
			$headerCenter.animate({height: '0px'});
			$('.photogrammatron').animate({height: '1050px'});
		});	
		$('.tylerslist').on('click touch', function () {
			$('.gofish').animate({height: '100px'});
			$('.photogrammatron').animate({height: '100px'});
			$('.chess').animate({height: '100px'});
			$headerCenter.animate({height: '0px'});
			$('.tylerslist').animate({height: '850px'});
		});	
		$('.gofish').on('click touch', function () {
			$('.chess').animate({height: '100px'});
			$('.photogrammatron').animate({height: '100px'});
			$('.tylerslist').animate({height: '100px'});
			$headerCenter.animate({height: '0px'});
			$('.gofish').animate({height: '1075px'});
		});	
		$('.chess').on('click touch', function () {
			$('.gofish').animate({height: '100px'});
			$('.photogrammatron').animate({height: '100px'});
			$('.tylerslist').animate({height: '100px'});
			$headerCenter.animate({height: '0px'});
			$('.chess').animate({height: '950px'});
		});
	}
	//full-screen
	if ($('#mobile-navbar').css('display') === 'none') {
		$('.photogrammatron').on('click', function () {	
			typeOver($headerContent, photogrammatronDescription);
			typeOver($headerTitle, photogrammatronTitle);
			if ($projectPicRight.css('display') === 'block') {
				$projectPicRight.fadeOut(1000, function () {
						$projectPicLeft.fadeOut(1000, function () {
						$projectPicLeft.children('a').children('img').attr('src', '/photog.jpg');
						$headerTitle.attr('href', 'http://glacial-harbor-3799.herokuapp.com/');
						$projectPicLeft.children('a').attr('href', 'http://glacial-harbor-3799.herokuapp.com/');
						$projectPicLeft.fadeIn(1000);
						$headerCenter.css('float', 'right');
					});		
				})
			}
			else {
				$projectPicLeft.fadeOut(1000, function () {
					$projectPicLeft.children('a').children('img').attr('src', '/photog.jpg');
					$headerTitle.attr('href', 'http://glacial-harbor-3799.herokuapp.com/');
					$projectPicLeft.children('a').attr('href', 'http://glacial-harbor-3799.herokuapp.com/');
					$projectPicLeft.fadeIn(1000);
					$headerCenter.css('float', 'right');
				});
			}
		})

		$('.tylerslist').on('click', function () {	
			typeOver($headerContent, tylerslistDescription);
			typeOver($headerTitle, tylerslistTitle);
			if ($projectPicRight.css('display') === 'block') {
				$projectPicRight.fadeOut(1000, function () {
					$projectPicLeft.fadeOut(1000, function () {
						$projectPicLeft.children('a').children('img').attr('src', '/tylerslist.jpg');
						$headerTitle.attr('href', 'http://tylerslist.elasticbeanstalk.com');
						$projectPicLeft.children('a').attr('href', 'http://tylerslist.elasticbeanstalk.com');
						$projectPicLeft.fadeIn(1000);
						$headerCenter.css('float', 'right');
					});
				})
			}
			else {
				$projectPicLeft.fadeOut(1000, function () {
					$projectPicLeft.children('a').children('img').attr('src', '/tylerslist.jpg');
					$headerTitle.attr('href', 'http://tylerslist.elasticbeanstalk.com');
					$projectPicLeft.children('a').attr('href', 'http://tylerslist.elasticbeanstalk.com');
					$projectPicLeft.fadeIn(1000);
					$headerCenter.css('float', 'right');
				});	
			}
		})

		$('.home').on('click', function () {	
			if ($projectPicLeft.css('display') === 'block') {
				typeOver($headerContent, homeDescription);
				typeOver($headerTitle, homeTitle);
				$projectPicLeft.fadeOut(1000, function () {
					$headerCenter.css('float', '');
				});
			}

			if ($projectPicRight.css('display') === 'block') {
				typeOver($headerContent, homeDescription);
				typeOver($headerTitle, homeTitle);
				$projectPicRight.fadeOut(1000, function () {
					$headerCenter.css('float', '');
				});
			}
			$headerTitle.attr('href', '');
		})	

		$('.gofish').on('click', function () {	
			typeOver($headerContent, goFishDescription);
			typeOver($headerTitle, goFishTitle);

			if ($projectPicLeft.css('display') === 'block') {
				$projectPicLeft.fadeOut(1000, function () {
					$projectPicRight.fadeOut(1000, function () {
						if ($projectPicRight.children('a').children('img').hasClass('chessPic')) {
							$projectPicRight.children('a').children('img').removeClass('chessPic');
						}
						$projectPicRight.children('a').children('img').attr('src', '/goFishScreen.jpeg');
						$headerTitle.attr('href', '/goFish/');
						$projectPicRight.children('a').attr('href', '/goFish/');
						$projectPicRight.fadeIn(1000);
						$headerCenter.css('float', 'left');
					});
				})
			}
			else {
				$projectPicRight.fadeOut(1000, function () {
					if ($projectPicRight.children('a').children('img').hasClass('chessPic')) {
						$projectPicRight.children('a').children('img').removeClass('chessPic');
					}
					$projectPicRight.children('a').children('img').attr('src', '/goFishScreen.jpeg');
					$headerTitle.attr('href', '/goFish/');
					$projectPicRight.children('a').attr('href', '/goFish/');
					$projectPicRight.fadeIn(1000);
					$headerCenter.css('float', 'left');
				});	
			}
		})

		$('.chess').on('click', function () {	
			typeOver($headerContent, chessDescription);
			typeOver($headerTitle, chessTitle);
			if ($projectPicLeft.css('display') === 'block') {
				$projectPicLeft.fadeOut(1000, function () {
					$projectPicRight.fadeOut(1000, function () {
						$projectPicRight.children('a').children('img').attr('src', '/chessPic.jpg');
						$headerTitle.attr('href', 'https://github.com/tylerprobst/Chess');
						$projectPicRight.children('a').attr('href', 'https://github.com/tylerprobst/Chess');
						$projectPicRight.children('a').children('img').addClass('chessPic');
						$projectPicRight.fadeIn(1000);
						$headerCenter.css('float', 'left');
					});
				})
			}
			else {
				$projectPicRight.fadeOut(1000, function () {
					$projectPicRight.children('a').children('img').attr('src', '/chessPic.jpg');
					$headerTitle.attr('href', 'https://github.com/tylerprobst/Chess');
					$projectPicRight.children('a').attr('href', 'https://github.com/tylerprobst/Chess');
					$projectPicRight.children('a').children('img').addClass('chessPic');
					$projectPicRight.fadeIn(1000);
					$headerCenter.css('float', 'left');
				});	
			}
		})
	}

	$('#resume').hover(function () {
		$('#resume').css({fontSize: '25px'});
	}, function () {
		$('#resume').css({fontSize: '10px'});
	})

	$('#email').hover(function () {
		$('#email').css({fontSize: '25px'});
	}, function () {
		$('#email').css({fontSize: '10px'});
	})		 

	$('#github').hover(function () {
		$('#github').css({fontSize: '45px', padding: '41px', color: 'white'});
	}, function () {
		$('#github').css({fontSize: '25px', padding: '50px'});
	})

	$('#linkedin').hover(function () {
		$('#linkedin').css({fontSize: '45px', padding: '41px', color: 'white'});
	}, function () {
		$('#linkedin').css({fontSize: '25px', padding: '50px'});
	})	
		 
});

function typeOver($el, string) {
	var source = $el.text(),
		length = Math.max(source.length, string.length),
		idx = 0;

	var interval = setInterval(function () {
		$el.text(helper(string, idx++));
		
	}, 3);

	function helper (target, idx) {
		source = source.slice(0, idx) + (target[idx] || ' ') + source.slice(idx + 1);

		if (idx === length)
			clearInterval(interval);


		return source;
	}
}
