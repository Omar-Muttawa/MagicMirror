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
	    module: 'MMM-TFL-Stops',
	    position: 'top_right',
	    header: 'Earls Court',
	    config: {
	        appId: "7ceeef13",
	        appKey: "41cc18035a20804ea311cdf5e070b88c",
	        stops: [
	            {
	                naptanId: "940GZZLUECT",
									direction: "inbound"
	            }
	        ],
	        timeOffset: 300,
	        animationSpeed: 1000,
	        fade: false,
	        fadePoint: 0.25,
	        limit: 5,
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
	// 	{
	// 	  module: "MMM-MyScoreboard",
	// 	  position: "top_right",
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
