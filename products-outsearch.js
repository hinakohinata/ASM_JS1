var input = document.getElementById('search-product');
input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
     event.preventDefault();
     
     document.getElementById("srch-prod").click('search_products()');
     alert('êi')
    }
  });