function makeListing(imgLoc, name, desc, socials) {
	let listingHTML = '\n\n' + 
		'<table class="listingTable"' +
		'<tbody class="listingTbody"' +
		'<tr class="visualListingRow">' + 
		'<td class="imageCell">' +
		'<img class="listingImg" src="' + imgLoc + '"' +
		'</td>' +
		'<td class="descriptionCell">' +
		'<p class="listingName">' + name + '</p>' +
		'<p class="listingDesc">' + desc + '</p>' +
		'</td>' +
		'<td class="socialsCell">'; 	
	
	for (social of socials) {
		listingHTML += '<p class="social">';
		listingHTML += '<img class="socialIcon" src="/images/icons/' + social.icon + '">';
		listingHTML += '<a class="socialLink" href="' + social.url + '">' + social.friendly + '</a>';		
		listingHTML += '</p>';
	}
	
	listingHTML += '</td>';
	listingHTML += '</tr>';
	listingHTML += '</tbody>';
	listingHTML += '</table>';
	listingHTML += '\n\n';
	document.write(listingHTML);
}

/*
EXAMPLE INFO
const fled_imgLoc = '/images/icons/ig_icon.png';
const fled_name = 'Fledermischief';
const fled_desc = 'Sample description.';
const fled_ig0 = {icon:"ig_icon.png", url:"https://google.com", friendly:"@google"};
const fled_socials = [fled_ig0];
makeListing(fled_imgLoc, fled_name, fled_desc, fled_socials);
*/
