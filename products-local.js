class Product {
    constructor(id, name, price, description, image) {
      this.id = id;
      this.name = name;
      this.price = price;
      this.description = description;
      this.image = image;
    }
    chuyensanphamthanhhtm(){
      var html='';
      html+=`<div class="item">
             <div class="item-thumb">
                <img class= "product-img" src="${this.image}" alt=''>
                    
                </div>
                <a href="./product-detail.html?id=${this.id}"><h5 class="item-title">${this.name}</h5></a>
                <div class="item-price">
                    <span class="item-price-origin">${this.price} đ</span></br>
                <button class= "btn btn-primary"> Đưa vào giỏ hàng </button>
               </div>
            </div>`
  
      return html
    }
  }
  class StoreProduct {
    constructor() {
      this.products = [];
    }
    add(product) {
      for (let i = 0; i < this.products.length; i++) {
        const currentProduct = this.products[i];
        if (currentProduct.id === product.id) {
          return false;
        }
      }
      this.products.push(product);
      return true;
    }
    update(product) {
      for (let i = 0; i < this.products.length; i++) {
        const currentProduct = this.products[i];
        if (currentProduct.id === product.id) {
          this.products[i] = product;
          return true;
        }
      }
      return false;
    }
    getById(id) {
      for (let i = 0; i < this.products.length; i++) {
        const currentProduct = this.products[i];
        if (currentProduct.id == id) {
          return currentProduct;
        }
      }
      //c1
      return null;
    }
    remove(id) {
      console.log(this.products);
      for (let i = 0; i < this.products.length; i++) {
        const currentProduct = this.products[i];
        if (currentProduct.id == id) {
          this.products.splice(i, 1);
          return true;
        }
      }
      return false;
    }
    save() {
      if (this.products.length > 0) {
        const data = JSON.stringify(this.products);
        localStorage.setItem("products", data);
      }
    }
    getData() {
      const data = JSON.parse(localStorage.getItem("products"));
      if (data) {
        const listProduct = [];
        for (let i = 0; i < data.length; i++) {
          const user = new Product(
            data[i].id,
            data[i].name,
            data[i].price,
            data[i].description,
            data[i].image
          );
          listProduct.push(user);
        }
        this.products = listProduct;
      }
    }
  
    getProduct() {
      return this.products;
    }
    sapXepTheoGia( type){
      if( type){
        this.products.sort((a, b) => a.price - b.price)
      }else{
        this.products.sort((a, b) => b.price - a.price)
      }
    }
    chuyendanhsachsanphamthanhhtm(){
      
      let result='<div class="items">';
      for(let i=0;i<this.products.length;i++){
        result+=this.products[i].chuyensanphamthanhhtm();
      }
      result+='</div>'
      return result;
    }
    search_product(find){
      let result='<div class="items">';
      let dem=0;
      for(let i=0;i<this.products.length;i++){
        if(this.products[i].name.search(find)){
          result+=this.products[i].chuyensanphamthanhhtm();
          dem++;
        }        
      }
      console.log('kq srch',result)
      result+='</div>'
      if(dem==0){
        result='Không có sản phẩm!'
      }
      return result;
    }
  }
  
  store = new StoreProduct();
  
  store.getData();

  const product = new Product("ip3","Tam Quốc Diễn Nghĩa - Bộ 2 Tập (Tái Bản 2020)","331500","Nhà cung cấp:Đông A  Tác giả:La Quán Trung Nhà xuất bản:NXB Văn Học  Hình thức bìa:Bìa Mềm","https://cdn0.fahasa.com/media/catalog/product//i/m/image_195509_1_40337.jpg");
  store.add(product);  store.save();
  
  const product1 = new Product( "ip4","Harry Potter Và Hòn Đá Phù Thuỷ - Tập 1 (Tái Bản 2017)",  "120150",  "Nhà cung cấp:NXB Trẻ        Tác giả:J.K.Rowling        Nhà xuất bản:NXB Trẻ         Hình thức bìa:Bìa Mềm      ","https://cdn0.fahasa.com/media/catalog/product//n/x/nxbtre_thumb_21542017_035423.jpg");
  store.add(product1);  store.save();
  
  const product2 = new Product("ip1",'Quán Rượu Dị Giới Nobu - Tập 1 - Tặng Kèm Bookmark Giấy Hình Món Ăn',  "40000", "Nhà cung cấp: NXB Trẻ Tác giả: Natsuya Semikawa Nhà xuất bản: NXB Trẻ  Hình thức bìa: Bìa Mềm","https://cdn0.fahasa.com/media/catalog/product//n/x/nxbtre_full_05362022_093608.jpg");
  store.add(product2);store.save();
  
  const product3 = new Product("ip2",  "Nhà Có 5 Nàng Dâu - Tập 1", "25000", "Nhà cung cấp:Nhà Xuất Bản Kim Đồng  Tác giả:Negi Haruba Nhà xuất bản:NXB Kim Đồng  Hình thức bìa:Bìa Mềm", "https://cdn0.fahasa.com/media/catalog/product//n/h/nha-co-5-nang-dau---tap-1.jpg");
  store.add(product3);  store.save();

  /** xu ly form */
  
  function renderTable(products) {
    let content = "";
    for (let i = 0; i < products.length; i++) {
      const item = products[i];
      content += `
        <tr>
                    <td>${item.id}</td>
                    <td>${item.name}</td>
                    <td>${item.description}</td>
                    <td>${item.price}</td>
                    <td style="width: 30%;"><img class= "product-img-table" src="${item.image}" alt=''></td>
                    <td>
                      <button type="button" class="btn-nhap" onclick="onEdit('${item.id}')">edit</button>
                      <button type="button" class="btn-nhap" onclick="onRemove('${item.id}')">remove</button>
                      <a href="./product.html?id=${item.id}">xem</a>

                      </td>
                  </tr>
        `;
    }
    document.getElementById("tableBody").innerHTML = content;
  }
  
  renderTable(store.getProduct());
  document
    .getElementById("frmProductCreate")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      const id = document.getElementById("id").value;
      const name = document.getElementById("name").value;
      const price = document.getElementById("price").value;
      const description = document.getElementById("description").value;
      const image = document.getElementById("image").value;
      if (
        id === "" ||
        name === "" ||
        description === "" ||
        image === "" ||
        price === ""
      ) {
        alert("Vui lòng nhập đầy đủ thông tin");
        return;
      } else {
        const product = new Product(id, name, price, description, image);
        const isCreate = store.add(product);
        console.log("isCreate", isCreate);
        if (isCreate) {
          alert("thêm thành công");
          store.save();
          renderTable(store.getProduct());
        } else {
          alert("thêm thất bại");
        }
      }
    });
  
  function onRemove(id) {
    const isRemove = store.remove(id);
    if (isRemove) {
      alert("xóa thành công");
      store.save();
      renderTable(store.getProduct());
    } else {
      alert("xóa thất bại");
    }
  }
  
  function onEdit(id) {
    var myModal = new bootstrap.Modal(
      document.getElementById("modalProductEdit"),
      {
        keyboard: false,
      }
    );
    // get detail
    const product = store.getById(id);
    document.getElementById("prodId").value = product.id;
    document.getElementById("prodName").value = product.name;
    document.getElementById("prodPrice").value = product.price;
    document.getElementById("prodDescription").value = product.description;
    document.getElementById("prodImage").value = product.image;
    myModal.show();
  }
  
  document
    .getElementById("frmProductEdit")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      const id = document.getElementById("prodId").value;
      const name = document.getElementById("prodName").value;
      const price = document.getElementById("prodPrice").value;
      const description = document.getElementById("prodDescription").value;
      const image = document.getElementById("prodImage").value;
      if (
        id === "" ||
        name === "" ||
        description === "" ||
        image === "" ||
        price === ""
      ) {
        alert("Vui lòng nhập đầy đủ thông tin");
        return;
      } else {
        const product = new Product(id, name, price, description, image);
        const isUpdate = store.update(product);
        if (isUpdate) {
          alert("cập nhật  thành công");
          store.save();
          renderTable(store.getProduct());store.getData()
          console.log(store)
        } else {
          alert("cập nhật thất bại");
        }
      }
    });

    document.getElementById('btn-sort-gia-tang').addEventListener('click',function(){
      store.sapXepTheoGia(true);
      store.save()
      renderTable(store.getProduct());
  })
  

  document.getElementById('btn-sort-gia-giam').addEventListener('click',function(){
      store.sapXepTheoGia(false);
      store.save()
      renderTable(store.getProduct());
  })

function search_products(){
  let find=document.getElementById("search-product");
  
  window.location = "./product-detail-search.html"
  console.log(store.search_product(find))
  var nodeProducts=document.getElementById('products1');
    
  nodeProducts.innerHTML=store.search_product(find);alert("nô nnoo")
  // window.addEventListener('load', function(event){
  //   event.preventDefault()
  // })
}


