let images = [];
images[0] = 'Resources/img1.jpg';
images[1] = 'Resources/img2.jpg';
images[2] = 'Resources/img3.jpg';
images[3] = 'Resources/gal4.jpg';
images[4] = 'Resources/gal2.jpg';
images[5] = 'Resources/gal3.jpg';
images[6] = 'Resources/gal1.jpg';
i = 0;

function imgSlideRight() {
    
    if (i < images.length - 1) {
        i++;
    }else {
        i = 0;
    }
    document.getElementById('imgsl').src = images[i];
    return i;
};

function imgSlideLeft() {

    if (i > 0) {
        i--;
    }else {
        i = images.length - 1 ;
    }
    document.getElementById('imgsl').src = images[i];
    return i ;
};


let rightButton = document.getElementById('right-button');
rightButton.onClick = function imgSlideRight() {
    
    if (i < images.length - 1) {
        i++;
    }else {
        i = 0;
    }
    document.getElementById('imgsl').src = images[i];
    return i;
};

let leftButton = document.getElementById('left-button');
leftButton.onClick = function imgSlideLeft() {

    if (i >= 0) {
        i--;
    }else {
        i = 0;
    }
    document.getElementById('imgsl').src = images[i];
    return i;
};
