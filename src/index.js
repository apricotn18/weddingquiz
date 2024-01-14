import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./reset.scss";
import "./style.scss";
import image1 from "./img/1.jpg";
import image2 from "./img/2.jpg";
import image4 from "./img/4.jpg";
import image5 from "./img/5.jpg";
import image7 from "./img/7.jpg";
import image8 from "./img/8.jpg";
import imageNoren from "./img/noren.png";
import imageTitle from "./img/quiztitle.png";
import imageA from "./img/A.png";
import imageB from "./img/B.png";
import imageC from "./img/C.png";
import imageD from "./img/D.png";

const list = [
	{
		image: image1,
		text: "【表参道駅 A2出口】から地上に出ます。",
	},
	{
		image: image2,
		text: "地上へ上がると、すぐ右手にApple Storeがあります。真っすぐ進み、Apple Storeの角を右に曲がってください。",
	},
	{
		image: image4,
		text: "約100m先の左手にflying tigerがあります。その角を左に曲がってください。",
	},
	{
		image: image5,
		text: "曲がるとすぐ左手にAfternoon Teaがあります。Afternoon Teaの前にあるT字路を右に曲がってください。",
	},
	{
		image: image7,
		text: "約100m先の右手に杉養蜂園があります。その角を右に曲がってください。",
	},
	{
		image: image8,
		text: "左手に「CHARMANT SCENA」という看板が見えます。到着です！！",
	}
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<BrowserRouter>
		<Routes>
			<Route path="" Component={Quiz} />
		</Routes>
	</BrowserRouter>
);

function Home () {
	return (
		<>
			<div className="map">
				<a href="https://maps.app.goo.gl/4UDZJjF2KyMrZHZM9">
					<span>Google Mapはこちら</span>
				</a>
			</div>
			<div className="wrapper">
				<header>
					<h1><span>笠原家・野崎家</span><br />シャルマンシーナ東京 道案内</h1>
				</header>
				<ul>
					{list.map((item, index) =>
					<li key={index}>
						<div><img src={item.image} width="540" alt="道案内" /></div>
						<p>{item.text}</p>
					</li>
					)}
				</ul>
			</div>
		</>
	);
}

function Quiz () {
	return (
		<>
			<div className="quiz">
				<header className="quizHeader">
					<img src={imageNoren} className="noren" width="540" alt="幼少期当てクイズ" />
					<h1 className="title"><img src={imageTitle} width="540" alt="幼少期当てクイズ" /></h1>
					<div className="textWrapper">
						<div className="text">新郎新婦がペアになっている幼少期の写真はどれでしょう？<br /><span>受付エリアにある投票箱へ投票してください</span></div>
					</div>
				</header>
				<ul>
					<li className="A">
						<div><img src={imageA} width="540" alt="" /></div>
					</li>
					<li className="B">
						<div><img src={imageB} width="540" alt="" /></div>
					</li>
					<li className="C">
						<div><img src={imageC} width="540" alt="" /></div>
					</li>
					<li className="D">
						<div><img src={imageD} width="540" alt="" /></div>
					</li>
				</ul>
				<div className="hint">ヒント：新郎には兄、新婦には弟妹がいます</div>
			</div>
		</>
	);
}