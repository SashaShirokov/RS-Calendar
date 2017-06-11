let webpack = require('webpack');
let path = require('path');

module.exports = {
	entry: [
		'script!jquery/dist/jquery.min.js',
		'script!foundation-sites/dist/foundation.min.js',
		'./app/app.jsx'
	],
	externals: {
		jquery: 'jQuery'
	},
	plugins: [
		new webpack.ProvidePlugin({
			'$': 'jquery',
			'jQuery': 'jquery'
		})
	],
	output: {
		path: __dirname,
		filename: "./docs/bundle.js"
	},
	resolve: {
		root: __dirname,
		modulesDirectories: [
			'node_modules',
			'./app/components',
			'./app/api'
		],
		alias: {
		Main: 'app/components/main/Main.jsx',
		MainNav: 'app/components/main/MainNav.jsx',
		Schedule: 'app/components/schedule/Schedule.jsx',
		ScheduleNav: 'app/components/schedule/ScheduleNav.jsx',
		Month: 'app/components/schedule/month/Month.jsx',
		Weeks: 'app/components/schedule/month/Weeks.jsx',
		DayNames: 'app/components/schedule/month/DayNames.jsx',
		Day: 'app/components/schedule/month/Day.jsx',
		DayBanner: 'app/components/schedule/month/DayBanner.jsx',
		EventDescription: 'app/components/schedule/month/EventDescription.jsx',
		Week: 'app/components/schedule/week/Week.jsx',
		Today: 'app/components/schedule/week/Today.jsx',
		Curriculum: 'app/components/curriculum/Curriculum.jsx',
		CourseList: 'app/components/curriculum/CourseList.jsx',
		CourseItem: 'app/components/curriculum/CourseItem.jsx',
		CourseIntro: 'app/components/curriculum/CourseIntro.jsx',
		VideoList: 'app/components/curriculum/VideoList.jsx',
		LectureList: 'app/components/curriculum/LectureList.jsx',
		StyleGuideList: 'app/components/curriculum/StyleGuideList.jsx',
		Weather: 'app/components/weather/Weather.jsx',
		WeatherForm: 'app/components/weather/WeatherForm.jsx',
		WeatherMessage: 'app/components/weather/WeatherMessage.jsx',
		Timer: 'app/components/timer/Timer.jsx',
		Clock: 'app/components/timer/Clock.jsx',
		Controls: 'app/components/timer/Controls.jsx',
		FeedBack: 'app/components/feedback/FeedBack.jsx',
		FeedBackList: 'app/components/feedback/FeedBackList.jsx',
		FeedBackItem: 'app/components/feedback/FeedBackItem.jsx',
		FeedBackSearch: 'app/components/feedback/FeedBackSearch.jsx',
		AddFeedBack: 'app/components/feedback/AddFeedBack.jsx',
		FeedBackAPI: 'app/api/FeedBackAPI.jsx',
		CourseAPI: 'app/api/CourseAPI.jsx',
		About: 'app/components/About.jsx',
		openWeatherMap: 'app/api/openWeatherMap.jsx',
		eventsAPI: 'app/api/eventsAPI.jsx',
		ErrorModal: 'app/components/modals/ErrorModal.jsx',
		GetInTouch: 'app/components/modals/GetInTouch.jsx',
		applicationStyles: 'app/styles/app.scss',
		actions: 'app/actions/actions.jsx',
		reducers: 'app/reducers/reducers.jsx',
		configureStore: 'app/store/configureStore.jsx'
	},
		extensions: ["", ".js", ".jsx"]
	},
	module: {
		loaders: [
			{
				loader: "babel-loader",
				query: {
					presets: ["react", "es2015", "stage-0"]
				},
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/
			}
		]
	},
	sassLoader: {
		includePaths: [
			path.resolve(__dirname, './node_modules/foundation-sites/scss')
		]
	}
};
