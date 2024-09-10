import { useLocation } from 'preact-iso';
import './style.css';

export function Header() {
	const { url } = useLocation();

	return (
		<header>
			<nav>
				<a href="/" class={url == '/' && 'active'}>
					Home
				</a>
				<a href="/404" class={url == '/404' && 'active'}>
					404
				</a>
				<a href="/testpage" class={url == '/testpage' && 'active'}>
					testpage
				</a>
			</nav>
		</header>
	);
}
