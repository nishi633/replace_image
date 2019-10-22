var images = [
  "http://daisukeono.com/assets/images/photo.png",
  "https://www.lantis.jp/image.php?id=f4165cba759b0eccd6448d4e72b4d9ad&g=artist&size=180"
];

var tags = document.getElementsByTagName("img");
for (var i = 0; i < tags.length; i++) {
  tags[i].src = images[Math.floor(Math.random()*images.length)];
  console.log(tags[i].src);
}

