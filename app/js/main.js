(function () {
  "use strict";
  var sidebarToggle = document.querySelector('#sidebarToggle');
  var sidebar = document.querySelector('.sidebar');

  
  function toggleSidebar(e) {
    e.preventDefault();
    document.body.classList.toggle('active');
    sidebar.classList.toggle('toggled');
    sidebarToggle.classList.toggle("expanded");
  }

  sidebarToggle.addEventListener('click', toggleSidebar);
})(); 