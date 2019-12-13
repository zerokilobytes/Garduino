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

  function showSection(section) {
    document.querySelector(section).style.display = 'block';
  }

  function showReadings() {
    document.querySelectorAll('.pagesection').forEach(
      element => element.style.display = 'none'
    );
    showSection('#readings');
  }


  sidebarToggle.addEventListener('click', toggleSidebar);


  document.querySelector('#dashboardMenu').addEventListener('click', function () {
    document.querySelectorAll('.pagesection').forEach(
      element => element.style.display = 'none'
    );
    showSection('#readings');
  });

  document.querySelector('#chartsMenu').addEventListener('click', function () {
    document.querySelectorAll('.pagesection').forEach(
      element => element.style.display = 'none'
    );
    showSection('#linecharts');
  });

  document.querySelector('#notificationMenu').addEventListener('click', function () {
    document.querySelectorAll('.pagesection').forEach(
      element => element.style.display = 'none'
    );
    showSection('#notifications');
  });

  document.querySelector('#eventsMenu').addEventListener('click', function () {
    document.querySelectorAll('.pagesection').forEach(
      element => element.style.display = 'none'
    );
    showSection('#events');
  });

  
  showReadings();
})(); 