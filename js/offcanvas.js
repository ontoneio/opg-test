// $(document).ready(function () {

//   $('[data-toggle="offcanvas"]').click(function () {
//     $('div.row-offcanvas-left').toggleClass('active')
//   });

// });

window.addEventListener('DOMContentLoaded', function() {
    const chapterBtn = document.querySelector('[data-toggle="offcanvas"]')
    const menuAndContent = document.querySelector('div.row-offcanvas-left')

    console.log('chapterBtn----->>>', chapterBtn )

    chapterBtn.addEventListener('click', function() {
      menuAndContent.classList.toggle('active')
    }) 
})