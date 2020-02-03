'use strict';
var gProjs = createProjs();



function getProjById(projId) {
    var selectedProj = gProjs.find(proj => {
        return projId === proj.id;
    });
    return selectedProj;
}


function getProjsToDisplay(){
    return gProjs;
}


function createProjs(){
    var projs = [
        createProj('mine sweeper', 'Mine Sweeper', 'Find those Mines!', '2020 edition of the classic Game + Extras',
         'img/portfolio/01-ms.jpg', ['Game', 'Mines'], 'https://rzalmon.github.io/mine-sweeper/'),
        createProj('touchNums', 'Touch Numbers', 'Press them fast!', 'Press the numbers in the correct order, do it as fast as you can',
         'img/portfolio/02-tn.jpg', ['Game', 'Numbers'], 'https://rzalmon.github.io/touch-nums/'),
        createProj('inPicture', 'In Picture', 'Think you can challenge Colombus?', 'Click on the right country',
         'img/portfolio/03-ip.jpg', ['Game', 'Geography'], 'https://rzalmon.github.io/in-picture/')
    ];
    return projs
}


function createProj(id, name, title, desc, url, labels, githubLink) {
    var proj = {
        id: id,
        name: name,
        title: title,
        desc: desc,
        url: url,
        publishedAt: Date.now(),
        labels: labels,
        githubLink: githubLink,
    }
    return proj;
}