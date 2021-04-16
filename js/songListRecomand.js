window.addEventListener('load', function () {
    var listRPic = document.querySelectorAll('.listRPic');
    var listRPicImg = document.querySelectorAll('.listRPic img');
    console.dir(listRPic);
    for (let i = 0; i < listRPic.length; i++) {
        listRPic[i].addEventListener('mouseenter', function () {
            console.log('移入div');
            listRPic[i].style.background = 'url(../uploads/other.png) no-repeat -2px -408px';
        });
        listRPic[i].addEventListener('mouseleave', function () {
            console.log('移出div');
            listRPic[i].style.background = 'url(../uploads/other.png) no-repeat -119px -407px';
        });
    }
});