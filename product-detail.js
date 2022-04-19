











window.addEventListener('load', function(event){
    //lay id tu url query string
    
    const params = new URLSearchParams(window.location.search)
    const id = params.get('id');
    const product = store.getById(id);
    if(product){
        document.getElementById('image').src= product.image;
        document.getElementById('name').textContent= product.name;
        document.getElementById('price').textContent= product.price+ ' đ'
        document.getElementById('description').textContent= product.description
    }
    console.log('product', product)
})

