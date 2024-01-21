import React from "react";
import ReactDOM from "react-dom/client";
import "./reset.scss";
import "./style.scss";
import imageNoren from "./img/noren.png";
import imageTitle from "./img/quiztitle.png";
import imageA from "./img/A.png";
import imageB from "./img/B.png";
import imageC from "./img/C.png";
import imageD from "./img/D.png";
import imageFlower from "./img/flower.png";
import imageHint2 from "./img/hint2.jpg";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<>
		<Quiz />
	</>
);

function Quiz () {
	return (
		<>
			<div className="quiz">
				<header className="quizHeader">
					<img src={imageNoren} className="noren" width="540" alt="幼少期当てクイズ" />
					<h1 className="title"><img src={imageTitle} width="540" alt="幼少期当てクイズ" /></h1>
				</header>
				<div className="textWrapper">
					<div className="text">
						新郎新婦がペアになっている幼少期の写真はどれでしょう？
						<span>受付エリアにある投票箱へ投票してください</span>
						<a href="#hint">ヒントはこちら</a>
					</div>
				</div>
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
				<div class="blankborder">
					<p class="borderinner"></p>
				</div>
				<div id="hint" className="hint1">
					<h2><img src={imageFlower} className="flower" width="16" alt="" />ヒント1<img src={imageFlower} className="flower" width="16" alt="" /></h2>
					<p>新郎には兄 新婦には弟妹がいます</p>
				</div>
				<div className="hint2">
					<h2><img src={imageFlower} className="flower" width="16" alt="" />ヒント2<img src={imageFlower} className="flower" width="16" alt="" /></h2>
					<p>現在の新郎新婦の写真</p>
					<div className="hintimagewrapper"><img src={imageHint2} className="hintimage" width="16" alt="" /></div>
				</div>
			</div>
			<footer>
				<small>ささやかですが景品を用意しています<br />ぜひご参加ください！</small>
			</footer>
		</>
	);
}