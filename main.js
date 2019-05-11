function bold() {
	 document.getElementById("text").style.fontWeight = 'bold';
	}
function italic(){
document.getElementById("text").style.fontStyle='italic';}

function underline(){
	document.getElementById("text").style.textDecoration='underline';}

function fontff(listtaille) {
	document.getElementById("text").style.fontSize=listtaille.value;
}

function fontss(listfont) {
	document.getElementById("text").style.fontFamily=listfont.value;
}
