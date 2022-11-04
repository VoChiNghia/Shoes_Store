let product;
let quantity = 1;
const getProductDetail = () =>{
    var urlParams = new URLSearchParams(window.location.search); //string => object
    var productId = urlParams.get("id");
    console.log(urlParams.get("id"));

    axios({
        url:`https://shop.cyberlearn.vn/api/Product/getbyid?id=${productId}`,
        method: 'GET'
    })

    .then((res) => {
        product = res.data.content;
        console.log(product);
        renderDetail();

    })
    .catch((err) => {
        console.log(err);

    })
}

const renderDetail = () => {
    let li = '';

    $('#desc--name').innerHTML = product.name;
    $('#desc--image').src = product.image;
    $('#desc--description').innerHTML = product.description;
    $('#price').innerHTML = product.price  + '$';
    product.size.map((index) => {
        li += `<li><span>${index}</span></li>`
    });
    $('#size').innerHTML = li;

    $('#quantity').innerHTML =  quantity;
}


$('#increase').addEventListener('click', function () {
    if(quantity > product.quantity) {
        return product.quantity
    }
    else {
        quantity++;
    }
    $('#quantity').innerHTML = quantity;
    $('#price').innerHTML = quantity * product.price + '$';

})

$('#decrease').addEventListener('click', function () {
    if(quantity < 1) {
        return 
    }
    
    if(quantity < product.quantity && quantity > 1) {
        quantity--
    }
    $('#quantity').innerHTML = quantity;
    $('#price').innerHTML = product.price * quantity + '$';

})

getProductDetail();



