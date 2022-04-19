window.addEventListener('load', function(event){
    //lay id tu url query string
    var nodeProducts=document.getElementById('products');
    
    nodeProducts.innerHTML=store.chuyendanhsachsanphamthanhhtm(store)
    
  })



  