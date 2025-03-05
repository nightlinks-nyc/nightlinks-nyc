let absGallery = 'https://nightlinks-nyc.com/';

// GALLERIES
const photos_wanted = ["photos_wanted.jpg",           "about.html#contact",
                       "photos_wanted.jpg",           "about.html#contact",
                       "photos_wanted.jpg",           "about.html#contact"]
const homeCategories = ["home/cosmetology.JPG",       "categories/cosmetology.html",
                        "home/events-and-venues.JPG", "categories/events-and-venues.html",
                        "home/merchants.JPG",         "categories/merchants.html",
                        "home/music-and-audio.JPG",   "categories/music-and-audio.html",
                        "home/occult.JPG",            "categories/occult.html",
                        "home/performing-arts.JPG",   "categories/performing-arts.html",
                        "home/photo-and-video.JPG",   "categories/photo-and-video.html",
                        "home/production.JPG",        "categories/production.html",
                        "home/stem.JPG",              "categories/stem.html",
                        "home/visual-arts.JPG",       "categories/visual-arts.html",
                        "home/writing.JPG",           "categories/writing.html",
                        "home/other.JPG",             "categories/other.html"]

function makeGallery(galList) {
    let galleryCode = '\n';
    for (let fileNameIdx = 0; fileNameIdx < galList.length; fileNameIdx = fileNameIdx + 2) {
      let linkIdx = fileNameIdx + 1;
      galleryCode += '<a href="' + absGallery + galList[linkIdx] + '">';
      galleryCode += '<img class="thirds" src="' + absGallery + 'images/' + galList[fileNameIdx] + '">';
      galleryCode += '</a>';
    }
    document.write(galleryCode);
}
