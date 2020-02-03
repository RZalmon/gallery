
function onInitPage() {
    renderProjs()
}

function renderProjs() {
    var projs = getProjsToDisplay();
    var strHTMLs = projs.map(proj => {
        return `
        <div class="col-md-4 col-sm-6 portfolio-item">
        <a class="portfolio-link" data-toggle="modal" onClick="onUpdateProjModal('${proj.id}')" href="#portfolioModal">
          <div class="portfolio-hover">
            <div class="portfolio-hover-content">
              <i class="fa fa-plus fa-3x"></i>
            </div>
          </div>
          <img class="img-fluid" src="${proj.url}" alt="">
        </a>
        <div class="portfolio-caption">
          <h4>${proj.name}</h4>
          <p class="text-muted">${proj.title}</p>
        </div>
      </div>
        `
    });
    var $elProjsContainer = $('.projs-container .row');
    strHTMLs.join('');
    $elProjsContainer.html(strHTMLs);
}

function onSubmitMsg(){
    var subject = $('#subject').val();
    var msg = $('#message').val();
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=ranzlmn@gmail.com&su=${subject}&body=${msg}`, '_blank');
    $('#subject').val('');
    $('#message').val('');
}

function onUpdateProjModal(projId) {
    var proj = getProjById(projId);
    $('.proj-name').text(proj.name);
    $('.proj-title').text(proj.title);
    $('.proj-img').attr('src', proj.url);
    $('.proj-desc').text(proj.desc);
    $('.proj-date span').text(formatDate(proj.publishedAt));
    $('.proj-labels span').text(proj.labels);
    $('.proj-labels span').text(proj.labels);
    $('.github-link').attr('href' ,proj.githubLink);
}

function formatDate(timeStamp) {
    var time = new Date(timeStamp)
    var times = time.toString().split(' ');
    var fixedTime = '';
    fixedTime += times[2] + ' ';
    fixedTime += times[1] + ' ';
    fixedTime += times[3] + ' ';
    return fixedTime
}