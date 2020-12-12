import ari from "../logos/ARI.png";
import atl from "../logos/ATL.png";
import bal from "../logos/BAL.png";
import buf from "../logos/BUF.png";
import car from "../logos/CAR.png";
import chi from "../logos/CHI.png";
import cin from "../logos/CIN.png";
import cle from "../logos/CLE.png";
import dal from "../logos/DAL.png";
import den from "../logos/DEN.png";
import det from "../logos/DET.png";
import gb from "../logos/GB.png";
import hou from "../logos/HOU.png";
import ind from "../logos/IND.png";
import jax from "../logos/JAX.png";
import kc from "../logos/KC.png";
import lac from "../logos/LAC.png";
import lar from "../logos/LAR.png";
import lv from "../logos/LV.png";
import mia from "../logos/MIA.png";
import min from "../logos/MIN.png";
import ne from "../logos/NE.png";
import no from "../logos/NO.png";
import nyg from "../logos/NYG.png";
import nyj from "../logos/NYJ.png";
import phi from "../logos/PHI.png";
import pit from "../logos/PIT.png";
import sea from "../logos/SEA.png";
import sf from "../logos/SF.png";
import tb from "../logos/TB.png";
import ten from "../logos/TEN.png";
import wsh from "../logos/WSH.png";

const Logo = (team) => {
	const imgs = [
		{ img: ari, code: "ARI" },
		{ img: atl, code: "ATL" },
		{ img: bal, code: "BAL" },
		{ img: buf, code: "BUF" },
		{ img: car, code: "CAR" },
		{ img: chi, code: "CHI" },
		{ img: cin, code: "CIN" },
		{ img: cle, code: "CLE" },
		{ img: dal, code: "DAL" },
		{ img: den, code: "DEN" },
		{ img: det, code: "DET" },
		{ img: gb, code: "GB" },
		{ img: hou, code: "HOU" },
		{ img: ind, code: "IND" },
		{ img: jax, code: "JAX" },
		{ img: kc, code: "KC" },
		{ img: lac, code: "LAC" },
		{ img: lar, code: "LAR" },
		{ img: lv, code: "LV" },
		{ img: mia, code: "MIA" },
		{ img: min, code: "MIN" },
		{ img: ne, code: "NE" },
		{ img: no, code: "NO" },
		{ img: nyg, code: "NYG" },
		{ img: nyj, code: "NYJ" },
		{ img: phi, code: "PHI" },
		{ img: pit, code: "PIT" },
		{ img: sea, code: "SEA" },
		{ img: sf, code: "SF" },
		{ img: tb, code: "TB" },
		{ img: ten, code: "TEN" },
		{ img: wsh, code: "WSH" },
	];
	const image = imgs.find((i) => i.code === team).img;
	return image;
};

export default Logo;
