import React,{ Component } from 'react';
import { Router,Route,IndexRoute,useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';
import NProgress from 'nprogress';
import App from '../Containers/App';
import LocalList from '../Containers/LocalList';

var appHistory = useRouterHistory(createHashHistory)({ queryKey: false });

let Channel = (location,cb) => {
	require.ensure([],require => {
    	cb(null,require('../Containers/Channel.js').default);
  	},'channel');
};
let Search = (location,cb) => {
	require.ensure([],require => {
    	cb(null,require('../Containers/Search.js').default);
  	},'search');
};
let Lyric = (location,cb) => {
	require.ensure([],require => {
    	cb(null,require('../Containers/Lyric.js').default);
  	},'lyric');
};

const routes = (
	<Route path="/" component={App}>
		<IndexRoute component={LocalList} />
		<Route path="/locallist" component={LocalList} />
		<Route path="/search" getComponent={Search}/>
		<Route path="/channel/:id" getComponent={Channel} />
		<Route path="/lyric" getComponent={Lyric} />
	</Route>
);

export default class Root extends Component{
	render(){
		return <Router history={appHistory} routes={routes}/>;
	}
};