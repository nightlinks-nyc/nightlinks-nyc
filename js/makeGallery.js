let absGallery = 'https://nightlinks-nyc.com/';

// GALLERIES
const photos_wanted = ["photos_wanted.jpg", "nightlinks-nyc.com/about.html#contact",
                       "photos_wanted.jpg", "nightlinks-nyc.com/about.html#contact",
                       "photos_wanted.jpg", "nightlinks-nyc.com/about.html#contact"]
const homeCategories = ["home/cosmetology.JPG",       "cosmetology.html",
                        "home/events-and-venues.JPG", "events-and-venues.html",
                        "home/merchants.JPG",         "merchants.html",
                        "home/music-and-audio.JPG",   "music-and-audio.html",
                        "home/occult.JPG",            "occult.html",
                        "home/performing-arts.JPG",   "performing-arts.html",
                        "home/photo-and-video.JPG",   "photo-and-video.html",
                        "home/production.JPG",        "production.html",
                        "home/stem.JPG",              "stem.html",
                        "home/visual-arts.JPG",       "visual-arts.html",
                        "home/writing.JPG",           "writing.html",
                        "home/other.JPG",             "other.html"]

function makeGallery(galList) {
    let galleryCode = '\n';
    for (let fileNameIdx = 0; fileNameIdx < galList.length; fileNameIdx = fileNameIdx + 2) {
      let linkIdx = fileNameIdx + 1;
      galleryCode += '<a href="' + absGallery + 'categories/' + galList[linkIdx] + '">';
      galleryCode += '<img class="thirds" src="' + absGallery + 'images/' + galList[fileNameIdx] + '">';
      galleryCode += '</a>';
    }
    document.write(galleryCode);
}
