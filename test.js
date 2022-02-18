// Плагин TV
(function() {
	'use strict';

	function tvtv_n(object) {
		var audio = new Audio();
		var network = new Lampa.Reguest();
		var scroll = new Lampa.Scroll({
			mask: true,
			over: true,
			step: 250
		});
		var items = [];
		var html = $('<div></div>');
		var body = $('<div class="category-full"></div>');
		var info;
		var last;
		var catalogs = [{
        title: 'Основные',
        url: 'http://llpp.xyz/v/kinoboom/'
      },{
        title: '4K',
        url: 'http://llpp.xyz/v/4k/'
      }, {
        title: 'Детские',
        url: 'http://llpp.xyz/v/det/'
      }, {
        title: 'Спорт Test',
        url: 'http://llpp.xyz/v/spot/'
      }, {
        title: 'Кино',
        url: 'http://llpp.xyz/v/kin/'
      }, {
        title: 'Музыкальные',
        url: 'http://llpp.xyz/v/muz/'
      }, {
        title: 'Познавательные',
        url: 'http://llpp.xyz/v/pos/'
      }, {
        title: 'Развлекательные',
        url: 'http://llpp.xyz/v/raz/'
      }, {
        title: 'Спортивные',
        url: 'http://llpp.xyz/v/spo/'
      }, {
        title: 'Релакс',
        url: 'http://llpp.xyz/v/rel/'
      }, {
        title: 'Украинские',
        url: 'http://llpp.xyz/v/ukrl/'
      }];
		this.create = function() {
			var _this = this;
			this.activity.loader(true);
			network.silent(object.url, this.build.bind(this), function() {
				var empty = new Lampa.Empty();
				html.append(empty.render());
				_this.start = empty.start;
				_this.activity.loader(false);
				_this.activity.toggle();
			});
			return this.render();
		};
		this.append = function(data) {
			var _this3 = this;
			var name = null;
			var playlist = [];
			data.forEach(function(element) {
				var url_song = element.video;
				var name_song = element.name;
				if (name == null) name = name_song, audio.src = url_song;
				var card = Lampa.Template.get('card', {
					title: name_song,
					release_year: ''
				});
				playlist.push({
					title: name_song,
					url: url_song
				});
				card.addClass('card--category');
				card.find('.card__img').css({
					'cursor': 'pointer',
					'background-color': '#353535'
				}).width('auto').height('11em').attr('src', element.picture);
				card.on('hover:focus mouseover', function() {
					last = card[0];
					scroll.update(card, true);
					info.find('.info__title').text(name_song);
					info.find('.info__title-original').text(element.time + (element.quality ? ' / ' + element.quality : ''));
				});
				card.hover(function() {
					if ($(this).hasClass('focus')) $(this).removeClass('focus');
					else $(this).addClass('focus');
				}, function() {
					$(this).removeClass('focus');
				});
				card.on('hover:enter click', function() {
					$(this).addClass('focus');
					$('.title_plaing').text(name_song);
					card.find('.card--category').addClass('focus');
					if (url_song.indexOf('.m3u8') !== -1) {
						var video = {
							title: name_song,
							url: url_song
						};
						Lampa.Player.play(video);
						Lampa.Player.playlist(playlist);
					}
					else {
						var video = {
							title: name_song,
							url: url_song
						};
						Lampa.Player.play(video);
						Lampa.Player.playlist(playlist);
					}
				});
				body.append(card);
				items.push(card);
			});
			if (info.find('.title_plaing').text() == '') info.find('.title_plaing').text(name);
		};
		this.playing = function(ifs) {
			if (ifs == 'play') {
				audio.play();
				info.find('.title_plaing').removeClass('blink2');
				info.find('#plbut').removeClass('play').addClass('pause');
			}
			else {
				audio.pause();
				info.find('.title_plaing').addClass('blink2');
				info.find('#plbut').removeClass('pause').addClass('play');
			};
		};
		this.build = function(data) {
			var _this2 = this;
			Lampa.Background.change('http://llpp.xyz/r/back.jpg');
			var but_style = '<style>.blink2{-webkit-animation:blink2 1.5s linear infinite;animation:blink2 1.5s linear infinite}@-webkit-keyframes blink2{100%{color:rgba(34,34,34,0)}}@keyframes blink2{100%{color:rgba(34,34,34,0)}}.controll,.controll *{box-sizing:content-box;letter-spacing:0}.controll{transition: .5s linear;border:none;background-color:#353535;border-radius:50%;margin-top:40px;padding:15px;width:50;height:50;font-size:0;white-space:nowrap;text-align:center;cursor:pointer}.controll.pause{background-color: #353535;    border: none;    color: #000;}.controll,.controll .but_left,.controll .but_right,.controll:before{display:inline-block;vertical-align:middle;transition:border .2s,width .2s,height .2s,margin .2s, transition: 10s linear; }.controll.pause .but_left,.controll.pause .but_right{margin-left:-1px;margin-top:3px;border-left:20px solid #fff;border-top:0 solid transparent;border-bottom:0 solid transparent;height:45px;}.controll.pause .but_left{border-right:10px solid transparent}.controll.play .but_left{margin-left:7.666667px;margin-top:-3px;border-left:48.496px solid #b0b0b0;border-top:28px solid transparent;border-bottom:28px solid transparent;border-right:0 solid transparent;}.controll.play .but_right{margin-left:-48px;margin-top:-3px;border-left:48.496px solid #b0b0b0;border-top:28px solid transparent;border-bottom:28px solid transparent}.controll:hover, .controll.focus {background-color: #fff;    border: none;    color: #000;}.controll.play.focus{background-color: #fff;    border: none;    color: #000;} .controll.play {border-color:#cecece} .controll.focus .but_left,.controll.focus .but_right, .controll:hover .but_left,.controll:hover .but_right {border-left-color:#cecece}</style>';
			but_style += '<style>.stbut,.stbut *{box-sizing:content-box;letter-spacing:0}.stbut{transition: .5s linear; border: 0px solid #632B2B; background-color: #3e3e3e; border-radius: 5px; margin-top: 56px; padding: 10px 40px 10px 20px; width: 120px;   height: 30px;   font-size: 30px;   color: #fff;   white-space: nowrap;  cursor: pointer;}.stbut:hover, .stbut.focus{background-color: #fff;color: #1e1e1e;}</style>';
			Lampa.Template.add('info_radio', '<div class="info layer--width"><div class="info__left"><div class="info__title"></div><div class="info__title-original"></div><div class="info__create"></div></div><div class="info__right">  <div id="stantion_filtr"><div id="stbut" class="stbut selector">Категории</div></div>    <div id="player_radio">' + but_style + '</div></div></div>');
			info = Lampa.Template.get('info_radio');
			info.find('#plbut').on('hover:enter click', function() {
				audio.paused ? _this2.playing('play') : _this2.playing('pause');
			});
			info.find('#stbut').on('hover:enter click', function() {
				Lampa.Select.show({
					title: 'Стиль',
					items: catalogs,
					onSelect: function onSelect(a) {
						Lampa.Activity.push({
							url: a.url,
							title: a.title,
							component: 'tvtv_n',
							page: 1
						})
					},
					onBack: function onBack() {
						Lampa.Controller.toggle('content');
					}
				});
			});
			scroll.render().addClass('layer--wheight').data('mheight', info);
			html.append(info.append());
			html.append(scroll.render());
			this.append(data);
			scroll.append(body);
			this.activity.loader(false);
			this.activity.toggle();
		};
		this.start = function() {
			Lampa.Controller.add('content', {
				toggle: function toggle() {
					Lampa.Controller.collectionSet(scroll.render());
					Lampa.Controller.collectionFocus(last || false, scroll.render());
				},
				left: function left() {
					if (Navigator.canmove('left')) {
						Navigator.move('left');
					}
					else Lampa.Controller.toggle('menu');
				},
				right: function right() {
					Navigator.move('right');
				},
				up: function up() {
					if (Navigator.canmove('up')) {
						Navigator.move('up');
					}
					else {
						if (!$('#stbut').hasClass('focus') && !$('#plbut').hasClass('focus')) {
							if (!$('#stbut').hasClass('focus')) {
								Lampa.Controller.collectionSet(info);
								Navigator.move('right')
							}
						}
						else Lampa.Controller.toggle('head');
					}
				},
				down: function down() {
					if (Navigator.canmove('down')) Navigator.move('down');
					else Lampa.Controller.toggle('content');
				},
				back: function back() {
					Lampa.Activity.backward();
				}
			});
			Lampa.Controller.toggle('content');
		};
		this.pause = function() {
			audio.pause();
		};
		this.stop = function() {};
		this.render = function() {
			return html;
		};
		this.destroy = function() {
			network.clear();
			scroll.destroy();
			if (info) info.remove();
			html.remove();
			body.remove();
			audio = null;
			network = null;
			items = null;
			html = null;
			body = null;
			info = null;
		};
	}

	function starttvtv_n() {
		window.plugin_tvtv_N_ready = true;
		Lampa.Component.add('tvtv_n', tvtv_n);
		Lampa.Listener.follow('app', function(r) {
			if (r.type == 'ready') {
				var ico = '<svg width="16px" height="16px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" color="#fff" fill="currentColor" class="bi bi-tv"><path d="M2.5 13.5A.5.5 0 0 1 3 13h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zM13.991 3l.024.001a1.46 1.46 0 0 1 .538.143.757.757 0 0 1 .302.254c.067.1.145.277.145.602v5.991l-.001.024a1.464 1.464 0 0 1-.143.538.758.758 0 0 1-.254.302c-.1.067-.277.145-.602.145H2.009l-.024-.001a1.464 1.464 0 0 1-.538-.143.758.758 0 0 1-.302-.254C1.078 10.502 1 10.325 1 10V4.009l.001-.024a1.46 1.46 0 0 1 .143-.538.758.758 0 0 1 .254-.302C1.498 3.078 1.675 3 2 3h11.991zM14 2H2C0 2 0 4 0 4v6c0 2 2 2 2 2h12c2 0 2-2 2-2V4c0-2-2-2-2-2z"/></svg>';
				var menu_items = $('<li class="menu__item selector focus" data-action="radio_r"><div class="menu__ico">' + ico + '</div><div class="menu__text">ТВ</div></li>');
				menu_items.on('hover:enter', function() {
					Lampa.Activity.push({
						url: 'http://llpp.xyz/v/kinoboom/',
						title: 'Основные',
						component: 'tvtv_n',
						page: 1
					});
				});
				$('.menu .menu__list').eq(0).append(menu_items);
			}
		});
	}
	if (!window.plugin_tvtv_N_ready) starttvtv_n();
})();
