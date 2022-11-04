const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

let productList = [];
const getProduct = () => {
    axios({
        url: 'https://shop.cyberlearn.vn/api/Product',
        method: 'GET'
    })
        .then((response) => {
            productList = response.data.content;
            console.log(productList);
            DisplayList(productList, listProduct, perPage, currentPage);
            SetUpPagination(productList, paginationElement, perPage)
        })
        .catch((error) => {
            console.log(error);
        })
}

const renderTable = () => {
    let htmlContent = '';
    for (let product in productList) {
        let productIndex = productList[product];

        htmlContent += `
            <div class="col-lg-4 col-md-6">
                <div class="feature__card">
                    <div class="feature__image">
                    <img src=${productIndex.image} alt="" />
                    <div class="feature__desc">
                        <h5>${productIndex.name}</h5>
                        <p>${productIndex.description.length > 80 ? productIndex.description.substr(0, 80) + '...' : productIndex.description}</p>
                    </div>
                    </div>
                    <div class="feature__bottom">
                    <button class="btn">Buy now</button>
                    <span>${productIndex.price}</span>
                    </div>
               
                </div>
            </div>`;
        $('.feature__card').innerHTML = htmlContent;
    }
}



getProduct()