function makeHeader() {	
	let headerCode = 
	    '<header>'                                                                                                                          + '\n' +
	    '<link rel="stylesheet" href="https://nightlinks-nyc.com/nightStyle.css">'                                                          + '\n' +
	    '<div id="header-image" style="border-bottom:solid 4px var(--myMidGray);">'                                                         + '\n' +
	    '<a href="https://nightlinks-nyc.com" style="line-height:0px;padding:0;margin:0;float:left;">'                                      + '\n' +
	    '<img src="https://nightlinks-nyc.com/images/Nightlink%20banner.jpg" style="width:100%;border-bottom:solid 4px var(--myMidGray);">' + '\n' +
	    '</a>'                                                                                                                              + '\n' +
	    '</div>'                                                                                                                            + '\n' +
	    '</header>'                                                                                                                         + '\n' +
	    '<br style="clear: both;">'                                                                                                         + '\n';
	document.write(headerCode);
}
makeHeader();
