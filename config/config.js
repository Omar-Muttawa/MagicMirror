/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "localhost", // Address to listen on, can be:
	                      // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	                      // - another specific IPv4/6 to listen on a specific interface
	                      // - "", "0.0.0.0", "::" to listen on any interface
	                      // Default, when address config is left out, is "localhost"
	port: 8080,
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], // Set [] to allow all IP addresses
	                                                       // or add a specific IPv4 of 192.168.1.5 :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	                                                       // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	language: "en",
	timeFormat: 24,
	units: "metric",

	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left"
		},
		{
			module: 'MMM-BackgroundSlideshow',
			position: 'fullscreen_below',
			config: {
				imagePaths: ['modules/MMM-BackgroundSlideshow/exampleImages/'],
				transitionImages: true,
				randomizeImageOrder: true
			}
		},
		{
	  module: 'MMM-LocalTransport',
	  header: 'to UCL Main Campus',
	  position: 'top_right',
	  config: {
	    api_key: 'AIzaSyCJRGDBuMrXD-3gEhxFmiFRq1QeCkC8Jic',
	    origin: '159 Cromwell Road',
	    destination: 'UCL Main Campus',
	    maximumEntries: 3,
	    maxWalkTime: 25,
	    displayWalkType: 'full',
	    maxModuleWidth: 500
	  	}
		},
		{
		module: 'MMM-LocalTransport',
		header: 'to Imperial College ThinkSpace',
		position: 'top_right',
		config: {
			api_key: 'AIzaSyCJRGDBuMrXD-3gEhxFmiFRq1QeCkC8Jic',
			origin: '159 Cromwell Road',
			destination: 'Imperial College ThinkSpace',
			maximumEntries: 3,
			maxWalkTime: 25,
			displayWalkType: 'full',
			maxModuleWidth: 500
			}
		},
		{
			module: 	'MMM-UKLiveBusStopInfo',
			position: 	'bottom_right',
			header:		'Cromwell Hospital',			//Optional - delete this line to turn OFF the header completely
			config: {
					atcocode: 		'490013096W', 		// ATCO code for specific bus stop
					app_id: 		'6f06b059', 				// TransportAPI App ID
					app_key: 		'dc0afd923cba38e76bdb83bd953d1a4e', 	            // TransportAPI App Key
					limit: 			5, 					// Optional - Maximum results to display.
			nextBuses: 		'yes',              	// Optional - Use expensive RealTime info from NextBuses
			showRealTime: 	true,          	// Optional - show realtime departure info
			showDelay: 		true              	// Optional - show delay in minutes based on Real Time info vs Time table
			}
		},
		// {
		// 	module: 'MMM-GoogleCast',
		// 	position: "bottom_left",
		// 	classes: "default everyone",
		// 	header: "Google Cast",
		// 	config: {
		// 		device: "54f1a1ef-fc19-8d00-2ab4-ce44b92d8a80",
		// 		hide: "true"
		// 	}
		// },
		{
			module: "MMM-Football-Fixtures",
			position: "bottom_left",
			config: {
        // both teams must be in the 'teams' list to show game
				leagues: {

					"La Liga Santander": "PD"
				},
        // one of the teams must be in the 'teams' list to show the game
        preferredLeagues: {
					"Champions League": "CL",
					"Premier League": "PL",
        },
				leaguesShowAllGames: {
					// "World Cup": "WC"
				},
				teams: [
					// England
  					// Prem
  					"Manchester City FC",
  					"Tottenham Hotspur FC",
  					"Chelsea FC",
  					"Manchester United FC",
  					"Arsenal FC",
  					"Liverpool FC",
					// Italy
					"Juventus Turin",
					// France
					"Paris Saint-Germain",
          "Paris Saint-Germain FC",
					"AS Monaco FC",
					"Olympique de Marseille",
					"Olympique Lyonnais",
					// Spain
					"FC Barcelona",
					"Real Madrid CF",

				],
				teamBadges: {
          'Arsenal FC': 'http://aux.iconspalace.com/uploads/arsenal-logo-icon-256.png',
          'Fulham FC': 'https://futhead.cursecdn.com/static/img/15/clubs_large/144.png',
          'Newcastle United FC': 'https://futhead.cursecdn.com/static/img/15/clubs_large/13.png',
          'Manchester United FC': 'http://aux2.iconspalace.com/uploads/manchester-united-logo-icon-256.png',
          'Cardiff City FC': 'https://i.pinimg.com/originals/9c/4f/ab/9c4fab30d606869d168c16d4a2e4d26b.png',
          'Tottenham Hotspur FC': 'http://aux2.iconspalace.com/uploads/tottenham-hotspur-logo-icon-256.png',
          'Huddersfield Town AFC': 'https://futhead.cursecdn.com/static/img/15/clubs_large/1939.png',
          'Watford FC': 'https://futhead.cursecdn.com/static/img/15/clubs_large/1795.png',
          'Brighton & Hove Albion FC': 'https://futhead.cursecdn.com/static/img/15/clubs_large/1808.png',
          'Manchester City FC': 'https://futhead.cursecdn.com/static/img/17/clubs/10.png',
          'West Ham United FC': 'http://aux2.iconspalace.com/uploads/west-ham-united-logo-icon-256.png',
          'Everton FC': 'https://futhead.cursecdn.com/static/img/15/clubs_large/7.png',
          'Chelsea FC': 'http://aux.iconspalace.com/uploads/chelsea-logo-icon-256.png',
          'Wolverhampton Wanderers FC': 'http://aux2.iconspalace.com/uploads/wolverhampton-wanderers-logo-icon-256.png',
          'Southampton FC': 'https://futhead.cursecdn.com/static/img/15/clubs_large/17.png',
          'Liverpool FC': 'http://aux.iconspalace.com/uploads/liverpool-fc-logo-icon-256.png',
          'Watford FC': 'https://futhead.cursecdn.com/static/img/15/clubs_large/1795.png',
          'Burnley FC': 'https://futhead.cursecdn.com/static/img/15/clubs_large/1796.png',
          'AFC Bournemouth': 'https://futhead.cursecdn.com/static/img/15/clubs_large/1943.png',
          'Leicester City FC': 'https://futhead.cursecdn.com/static/img/15/clubs_large/95.png',
          'Crystal Palace FC': 'https://futhead.cursecdn.com/static/img/15/clubs_large/1799.png',
          'Sunderland AFC': 'https://futhead.cursecdn.com/static/img/15/clubs_large/106.png',
          'Stoke City FC': 'https://futhead.cursecdn.com/static/img/15/clubs_large/1806.png',
          'Swansea City AFC': 'https://futhead.cursecdn.com/static/img/15/clubs_large/1960.png',
          'Hull City': 'https://futhead.cursecdn.com/static/img/17/items/badges/6000211.png',
          'Leeds United AFC': 'http://futhead.cursecdn.com/static/img/14/clubs/8.png',
          'AC Milan': 'https://futhead.cursecdn.com/static/img/15/clubs_large/47.png',
          'AS Roma': 'https://d1si3tbndbzwz9.cloudfront.net/soccer/team/11/logo.png',
          'Juventus FC': 'http://aux.iconspalace.com/uploads/juventus-logo-icon-256.png',
          'SSC Napoli': 'https://dbcdnk728du6i.cloudfront.net/teams/logos/128x128/2446-napoli.png',
					'SS Lazio': 'https://futhead.cursecdn.com/static/img/14/clubs/46.png',
					'FC Internazionale Milano': 'https://futhead.cursecdn.com/static/img/17/clubs/44.png',
          'Paris Saint-Germain': 'https://futhead.cursecdn.com/static/img/17/clubs/73.png',
          'Paris Saint-Germain FC': 'https://futhead.cursecdn.com/static/img/17/clubs/73.png',
					'AS Monaco FC': 'http://aux.iconspalace.com/uploads/as-monaco-logo-icon-256.png',
					'Olympique de Marseille': 'https://d1si3tbndbzwz9.cloudfront.net/soccer/team/85/logo.png',
					'Olympique Lyonnais': 'http://aux2.iconspalace.com/uploads/olympique-lyonnais-logo-icon-256.png',
          'FC Barcelona': 'http://aux.iconspalace.com/uploads/fc-barcelona-logo-icon-256.png',
					'Real Madrid CF': 'http://aux2.iconspalace.com/uploads/real-madrid-logo-icon-256.png',
					'Sevilla FC': 'http://aux2.iconspalace.com/uploads/sevilla-logo-icon-256.png',
					'Valencia CF': 'http://aux2.iconspalace.com/uploads/valencia-logo-icon-256.png',
					'Club Atlético de Madrid': 'https://pesstatsdatabase.com/PSD/PSD/Images/Clubs/Spain/Club-Atletico-de-Madrid.png',
          'FC Bayern München': 'https://d1si3tbndbzwz9.cloudfront.net/soccer/team/80/logo.png',
					'Borussia Dortmund': 'http://aux.iconspalace.com/uploads/borussia-dortmund-logo-icon-256.png',
          'FC Schalke 04': 'https://d1si3tbndbzwz9.cloudfront.net/soccer/team/120/logo.png',
          'RB Leipzig': 'http://en.fodb.net/img/club/Germany/100/RB-Leipzig.png',
          'PSV': 'http://aux2.iconspalace.com/uploads/psv-eindhoven-logo-icon-256.png',
          'BSC Young Boys': 'https://futhead.cursecdn.com/static/img/16/clubs/900.png',
          'Sport Lisboa e Benfica': 'http://www.futbol24.com/upload/team/Portugal/SL-Benfica-R.png',
          'FC Porto': 'http://aux.iconspalace.com/uploads/fc-porto-logo-icon-256.png',
          'FK Crvena Zvezda': 'http://cdn.staticneo.com/w/pes/1/19/Redstar.png'
				},
				apiKey: "47df154b6ab44fd9aff679c0eca9e6c2",
				displayMax: 10,
				daysAhead: 7,
        daysBehind: 2
			}
		},
	// 	{
	// 	  module: "MMM-MyScoreboard",
	// 	  position: "bottom_left",
	// 	  classes: "default everyone",
	// 	  header: "My Scoreboard",
	// 	  config: {
	// 	    showLeagueSeparators: true,
	// 	    colored: true,
	// 	    viewStyle: "oneLineWithLogos",
	// 	    sports: [
	// 	      {
	// 	        league: "ENG_PREMIERE_LEAGUE",
	// 	      },
	// 				{
	// 					league: "UEFA_CHAMPIONS",
	// 				},
	// 				{
	// 					league: "UEFA_EUROPA ",
	// 					teams: ["MUN"]
	// 				},
	// 	    ]
  // 		}
	// },

	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
