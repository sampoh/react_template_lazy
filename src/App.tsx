import React, { Suspense, lazy } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import {Fragment} from 'react'

import './App.css';
import Loading from './components/loading';

// import Top from './components/top';
// import PageA from './components/page_a';
// import PageB from './components/page_b';
// import PageC from './components/page_c';
// import Links from './components/links';
//↓遅延ロード化
const Top = lazy(() => import('./components/top'));
const PageA = lazy(() => import('./components/page_a'));
const PageB = lazy(() => import('./components/page_b'));
const PageC = lazy(() => import('./components/page_c'));
const Links = lazy(() => import('./components/links'));


function App() {
  return (
	<Fragment>

		<Router>
			<Suspense fallback={<Loading />}>
				<Routes>
					{/* <Route>で個々のルーティングを定義する */}
					<Route path="/" element={<Top />} />
					<Route path="/pagea" element={<PageA />} />
					<Route path="/pageb" element={<PageB />} />
					<Route path="/pagec" element={<PageC />} />
				</Routes>
			</Suspense>
		</Router>

		<Links />

	</Fragment>
  );
}

export default App;
