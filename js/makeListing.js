function makeListing(imgLoc, name, desc, socials) {
	let listingHTML = '\n\n' + 
		'<tr class="visualListingRow">' + 
		'<td class="imageCell">' +
		'<img class="listingImg" src="' + imgLoc + '"' +
		'</td>' +
		'<td class="descriptionCell">' +
		'<p class="listingName">' + name + '</p>' +
		'<p class="listingDesc">' + desc + '</p>'; 	
	
	for (social in socials) {
		listingHTML += '<p class="social">';
		listingHTML += '<img class="socialIcon" src="https://www.w3schools.com/html/img_girl.jpg">';
		listingHTML += '<a class="socialLink" href="' + 'https://www.w3schools.com/' + '">' + 'social.friendly' + '</a>';		
		listingHTML += '</p>';
	}
	
	listingHTML += '</td>';
	listingHTML += '</tr>';
	listingHTML += '\n\n';
	document.write(listingHTML);
}

/*
EXAMPLE INFO
const fled_imgLoc = 'https://katcottrell.github.io/vampire-interviews/images/icons/ig_icon.png';
const fled_name = 'Fledermischief';
const fled_desc = 'Sample description.';
const fled_ig0 = {platform:"ig", url:"google.com", friendly:"@google"};
const fled_socials = [fled_ig0];
makeListing(fled_imgLoc, fled_name, fled_desc, fled_socials);
*/
