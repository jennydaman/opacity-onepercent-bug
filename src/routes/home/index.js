import { h } from 'preact';
import style from './style';

const Home = () => (
	<div class={style.home}>
		<h1>Home</h1>
		<p>This is the Home component.</p>
		<div style="background-color: red">
			<img className={style.withOpacity} src="/assets/picture.png"/>
		</div>
	</div>
);

export default Home;
