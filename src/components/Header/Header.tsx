import './style.css';
import pin from "../../assets/Pin.png";
import seacrh from "../../assets/search_icon.png";
import basket from "../../assets/basket.png";
import profile from "../../assets/image_17.png";

export function Header() {
	return (
		<header className="header">
			<div className="logo">
				<span>react</span>
			</div>
			<div className="location">
				<a href={"#"}>
					<img src={pin} alt="location" />
					<span>Александровск-Сахалинский</span>
				</a>
			</div>
			<div className="search">
				<input type={"text"} placeholder={"Поиск бренда, товара, категории..."} />
				<button>
					<img src={seacrh} alt="seacrh" />
				</button>
			</div>
			<div className="basket">
				<a href={"/basket"}>
					<img src={basket} alt="basket" />
					<span className="counter">7</span>
				</a>
			</div>
			<div className="profile">
				<a href={"#"}>
					<img src={profile} alt="profile" />
				</a>
			</div>
		</header>
	);
}
