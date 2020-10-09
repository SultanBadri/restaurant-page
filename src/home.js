const renderHomePage = (() => {
  //container
  const contentContainer = document.querySelector("#content");

  const home = document.createElement("div");
  home.classList.add("tab-content")
  home.innerHTML = `<div id="home" class="active" data-tab-content>
  <div class="hero">
    <h1>Come on down for some delicious cuisine!</h1>
    <p>Tasty and affordable!</p>
    <div class="btn-container">
      <a data-tab-target="#menu" class="order-now">Order Now</a>
    </div>
  </div>
  <div class="info">
    <div class="address">
      <span><i class="fi-xnsuxl-map-marker-solid"></i></span>
      <p>1024 Oakwood Ave<br />San Diego, CA 22434</p>
    </div>
    <div class="hours">
      <span><i class="fi-cnsuhl-clock-solid"></i></span>
      <p>
        <span>Mon-Thurs:</span>8am-8pm<br /><span>Fri-Sun:</span
        >8am-11pm
      </p>
    </div>
  </div>
</div>`;

  contentContainer.appendChild(home);
})();

export { renderHomePage };
