function makeFooter() {
	let absFoot = 'https://nightlinks-nyc.com/images/icons/';
	let linkAttributes = 'target="_blank" rel="noopener noreferrer" style="color:transparent;"';
  
	let footerCode =                                                                                      '\n' +
	    '<footer>'                                                                                      + '\n' +
	    '<p class="footer-text"> Website by Kat | '                                                     + '\n' +
	    
	    '<a href="https://www.instagram.com/nightlinks_nyc" ' + linkAttributes + '>'                    + '\n' +
	    '<img src="' + absFoot + 'ig_icon.png" class="footer-icon" alt="Instagram">'                    + '\n' +
	    '</a>'                                                                                          + '\n' +
	    
	    '<a href="https://www.facebook.com/profile.php?id=61573576092944" ' + linkAttributes + '>'      + '\n' +
	    '<img src="' + absFoot + 'fb_icon.png" class="footer-icon" alt="Facebook">'                     + '\n' +
	    '</a>'                                                                                          + '\n' +
	    
	    '<a href="https://discord.gg/ZCPzyWTqBN" ' + linkAttributes + '>'                               + '\n' + 
	    '<img src="' + absFoot + 'discord_icon.png" class="footer-icon" alt="Discord">'                 + '\n' +
	    '</a>'                                                                                          + '\n' +
	    
	    '<a href="mailto:nightlinks.nyc@gmail.com" ' + linkAttributes + '>'                             + '\n' + 
	    '<img src="' + absFoot + 'mail_icon.png" class="footer-icon" alt="Email">'                      + '\n' +
	    '</a>'                                                                                          + '\n' +
	    
	    '</p>'                                                                                          + '\n' +
	    '</footer>'                                                                                     + '\n';
  
	document.write(footerCode);
}
makeFooter();
