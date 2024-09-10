import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header/Header";
import { Label } from "../../components/Label";

export function Testpage() {
	return (
		<div class="home">
			<Header />
			<h2>Hello world!!!<Label text={"Подарок"} color={"blue"}/><Label text={"Игрушка"} color={"pink"}/></h2>
			<h2>Hello world!!!<Label text={"Мартышка"} color={"green"}/></h2>
			<h2>Hello world!!!<Label text={"Подарок"} color={"orange"}/></h2>
			<h2>Hello world!!!<Label text={"Подарок"} color={"pink"}/></h2>
			<h2>Hello world!!!</h2>
			<h2>Hello world!!!</h2>
			<h2>Hello world!!!</h2>
			<h2>Hello world!!!</h2>
			<h2>Hello world!!!</h2>
			<h2>Hello world!!!</h2>
            <Footer />
		</div>
	);
}
