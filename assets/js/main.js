/* =======================================================
* Created by : Group 3
* Name of Group : Rahmat Suci Setyanto, Risky Luthfan Maladzi, Wibowo Mulyo, Muhammad Arief Hidayatullah
* Date : 27 June 2023
* Template by : BootstrapMade.com
* License: https://bootstrapmade.com/license/
======================================================== */

//Soal Hukum I Newton
var jawaban1 = document.getElementById("jawaban1")
var button1 = document.getElementById("button1")
  button1.addEventListener("click", function(event){
    event.preventDefault();
    var massaInput = document.getElementById("massa1");
    var massa1 = massaInput.value;

    if (isNaN(parseFloat(massa1))) {  
      jawaban1.innerHTML = "<h3>PENYELESAIAN</h3><p>Silahkan input massa pada soal terlebih dahulu!</p><br>";
    } else {
      var gravity = 10;
      var berat = massa1 * gravity;
      jawaban1.innerHTML = `
      <h3>PENYELESAIAN</h3>
      <h5>Diketahui :</h5>
        <p>m = ${massa1}</p>
        <p>g = ${gravity}</p><br>
      <h5>Ditanya :</h5>
        <p>T?</p><br>
      <h5>Jawab :</h5>
      <h6>Mencari berat balok</h6>
        <p>w = m x g</p>
        <p>w = ${massa1} x ${gravity}</p>
        <p>w = ${berat}</p><br>
      <h6>Mencari tegangan tali</h6>
        <p>ΣF = 0</p>
        <p>T - w = 0</p>
        <p>T - ${berat} = 0</p>
        <p>T = ${berat} </p><br>
      <h5>Jadi, jika balok diam maka tegangan tali nya sebesar ${berat} N</h5><br>
      `;
    }
  });

//Soal Hukum II Newton
var jawaban2 = document.getElementById("jawaban2")
var button2 = document.getElementById("button2")
  button2.addEventListener("click", function(event){
    event.preventDefault();
    var massaInput = document.getElementById("massa2");
    var massa2 = massaInput.value;
    var percepatanInput = document.getElementById("percepatan");
    var percepatan = percepatanInput.value;

    if (isNaN(parseFloat(massa2)) && isNaN(parseFloat(percepatan))) {  
      jawaban2.innerHTML = "<h3>PENYELESAIAN</h3><p>Silahkan input massa dan percepatan pada soal terlebih dahulu!</p><br>";
    } 
    else if (isNaN(parseFloat(massa2))) {  
      jawaban2.innerHTML = "<h3>PENYELESAIAN</h3><p>Silahkan input massa pada soal terlebih dahulu!</p><br>";
    } 
    else if (isNaN(parseFloat(percepatan))) {  
      jawaban2.innerHTML = "<h3>PENYELESAIAN</h3><p>Silahkan input percepatan pada soal terlebih dahulu!</p><br>";
    } 
    else {
      var gaya = massa2 * percepatan;
      jawaban2.innerHTML = `
      <h3>PENYELESAIAN</h3>
      <h5>Diketahui :</h5>
        <p>m = ${massa2}</p>
        <p>a = ${percepatan}</p><br>
      <h5>Ditanya :</h5>
        <p>F?</p><br>
      <h5>Jawab :</h5>
        <p>F = m x a</p>
        <p>F = ${massa2} x ${percepatan}</p>
        <p>F = ${gaya}</p><br>
      <h5>Jadi, gaya yang diberikan pada mobil-mobilan tersebut adalah sebesar ${gaya} N</h5><br>
      `;
    }
  });
  
//Soal Hukum III Newton
var jawaban3 = document.getElementById("jawaban3")
var button3 = document.getElementById("button3")
  button3.addEventListener("click", function(event){
    event.preventDefault();
    var gayaInput = document.getElementById("gaya");
    var gaya = gayaInput.value;

    if (isNaN(parseFloat(gaya))) {  
      jawaban3.innerHTML = "<h3>PENYELESAIAN</h3><p>Silahkan input gaya pada soal terlebih dahulu!</p><br>";
    } 
    else {
      jawaban3.innerHTML = `
      <h3>PENYELESAIAN</h3>
        <p>Berdasarkan Hukum Newton III, setiap aksi memiliki reaksi yang sebanding dengan besaran yang sama tetapi berlawanan arah. Dalam kasus ini, ketika pesepeda mengayuh sepedanya dengan gaya ${gaya} N, pegangan setang sepeda akan memberikan gaya reaksi yang sama besar tetapi berlawanan arah kepada tangan pesepeda.</p><br>
        <p>Jadi, gaya reaksi yang diterima oleh tangan pesepeda dari pegangan setang sepeda adalah ${gaya} N dengan arah yang berlawanan.</p><br>
        <p>Perlu diingat bahwa Hukum Newton III berlaku untuk gaya-gaya aksi dan reaksi yang terjadi antara dua objek yang berbeda. Dalam contoh ini, gaya aksi adalah gaya yang dilakukan oleh tangan pesepeda pada pegangan setang sepeda, sedangkan gaya reaksi adalah gaya yang diterima oleh tangan pesepeda dari pegangan setang sepeda.</p><br>
      `;
    }
  });


(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos,
      behavior: 'smooth'
    })
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('body').classList.toggle('mobile-nav-active')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let body = select('body')
      if (body.classList.contains('mobile-nav-active')) {
        body.classList.remove('mobile-nav-active')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Preloader
   */
  let preloader = select('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove()
    });
  }

  /**
   * Hero type effect
   */
  const typed = select('.typed')
  if (typed) {
    let typed_strings = typed.getAttribute('data-typed-items')
    typed_strings = typed_strings.split(',')
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }

  /**
   * Skills animation
   */
  let skilsContent = select('.skills-content');
  if (skilsContent) {
    new Waypoint({
      element: skilsContent,
      offset: '80%',
      handler: function(direction) {
        let progress = select('.progress .progress-bar', true);
        progress.forEach((el) => {
          el.style.width = el.getAttribute('aria-valuenow') + '%'
        });
      }
    })
  }

  /**
   * Porfolio isotope and filter
   */
  window.addEventListener('load', () => {
    let portfolioContainer = select('.portfolio-container');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item'
      });

      let portfolioFilters = select('#portfolio-flters li', true);

      on('click', '#portfolio-flters li', function(e) {
        e.preventDefault();
        portfolioFilters.forEach(function(el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        portfolioIsotope.on('arrangeComplete', function() {
          AOS.refresh()
        });
      }, true);
    }

  });

  /**
   * Initiate portfolio lightbox 
   */
  const portfolioLightbox = GLightbox({
    selector: '.portfolio-lightbox'
  });

  /**
   * Initiate portfolio details lightbox 
   */
  const portfolioDetailsLightbox = GLightbox({
    selector: '.portfolio-details-lightbox',
    width: '90%',
    height: '90vh'
  });

  /**
   * Portfolio details slider
   */
  new Swiper('.portfolio-details-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Testimonials slider
   */
  new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });

  /**
   * Initiate Pure Counter 
   */
  new PureCounter();

})()