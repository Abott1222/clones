var currentColor = "#FFFFFF";

let squaresNodes = document.querySelectorAll('.container .row .cell');

document.body.addEventListener( 'click', function ( event ) {
	let elementClass = event.srcElement.className;
  if( elementClass === 'cell' ) {
    event.srcElement.style.background = currentColor;
  }else if(elementClass = "color") {
		let elementColor = event.srcElement.style.background;
		currentColor = elementColor;
		let currentColorViewer = document.querySelector(".currentColor");
		currentColorViewer.style.background = elementColor;
		
	};
} );


/*
let nodes = [...squaresNodes];

nodes.forEach( (tempNode) => {
	
	tempNode.addEventListener('click', function(event) {
		let tmpCell = event.target;
		tmpCell.style = "background:red";
	})
});
*/


const createCell = () => {
	let tmpCell = document.createElement("div");
	tmpCell.className = "cell";
	return tmpCell;
}

const createRow = () => {
	let tmpRow = document.createElement("div");
	tmpRow.className = "row";
	for(let c=0; c<40; c++) {
		tmpRow.appendChild(createCell());
	}
	return tmpRow;
}

const createCanvas = () => {
	let container = document.querySelector('.container');
	let tmpRow = document.createElement("div");
	tmpRow.className = "row";
	for(let r=0; r<30; r++) {
		container.appendChild(createRow());
	}
}

const createPallet = () => {
	const colors = ["#A7433B","#EE6256","#F07C74","#DD9D4D",
"#F7B056","#F8C685","#E7D84E","#FFF058",
"#69C14C","#84F25F","#ACF59E","#2C53AF",
"#3F78FC","#90AAFC","#5947AF","#8068FC",
"#B29FFD","#724298","#BD6FFD","#D5A1FD","#000000","#323232","#666666","#999999",
"#CCCCCC","#37231A","#4D3025","#6F4636",
"#8B695D","#A88F85","#FFFFFF"];
	let tmpPallet = document.createElement("div");
	tmpPallet.className = "row-pallet";
	colors.forEach( (hexColor) => {
		let color = document.createElement("div");
		color.className="color";
		color.style.background = hexColor;
		tmpPallet.appendChild(color);
	});
	let container = document.querySelector('.container');
	container.appendChild(tmpPallet);
}


const createColorViewer = () => {
	let wrapper = document.createElement("div");
	wrapper.className = "wrapper";
	
	let label = document.createElement("h3");
	label.innerHTML = "CURRENT COLOR >";
	wrapper.appendChild(label);
	let currentColor = document.createElement("div");
	currentColor.className = "currentColor";
	wrapper.appendChild(currentColor);
	let container = document.querySelector('.container');
	container.appendChild(wrapper);
	
}

createCanvas();
createPallet();
createColorViewer();
 



