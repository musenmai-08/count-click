import { ChangeEvent, useState } from "react";

function App() {
	const button = document.querySelector("button");

	const [time, setTime] = useState(1);
	const handleChangeTime = (e: ChangeEvent<HTMLInputElement>) => {
		setTime(Number(e.target.value));
	};

	const [count, setCount] = useState(0);
	const handleClick = () => {
		if (time <= 0) {
			alert("秒数は1以上を設定してください");
			return;
		}
		setTimeout(() => {
			setCount((prev) => prev + 1);
			if (button) {
				button.disabled = true;
			}
		}, time * 1000);
	};

	const resetGame = () => {
		setCount(0);
		if (button) {
			button.disabled = false;
		}
	};

	return (
		<div>
			<input type="number" value={time} onChange={handleChangeTime} />
			<span>秒間クリックしまくれ！！</span>

			<h1>{count}</h1>

			<button onClick={handleClick}>click!</button>
			<button className="reset" onClick={resetGame}>
				reset
			</button>
		</div>
	);
}

export default App;
