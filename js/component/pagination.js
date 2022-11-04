const listProduct = $('.feature--card');
const paginationElement = $('.pagination');

//Trang hiện tại cho mặc định là 1
let currentPage = 1;
// Số sản phẩm cho 1 trang là 6
let perPage = 6;

// hàm hiển thị danh sách sản phẩm
/**
 * đầu vào:
 * - items: danh sách sản phẩm
 * - wrapper: DOM phần tử ở html để hiển thị danh sách sản phẩm
 * - row_per_page: số phần tử hiển thị ở mỗi trang
 * - page: trang hiện tại
 */
function DisplayList(items, wrapper, products_per_page, page){
    let htmlContent = '';
    // vì currentPage là 1 nên phải trừ đi 1 vì danh sách các sản phẩm là mảng và bắt đầu bằn 0
    page--;

    // start: ví dụ, products_per_page: 6, page:1
    // start = 0;
    // end = 0 + 6 = 6;
    // paginationItems: lấy từ vị trí thứ 0 đến vị trí thứ 6 trong mảng để in ra giao diện
    let start = products_per_page * page;
    let end = start + products_per_page;
    let paginationItems = items.slice(start, end);

    for(let i = 0; i < paginationItems.length; i++) {
        let item = paginationItems[i];
        htmlContent += `
            <div class="col-lg-4 col-md-6">
                <div class="feature__card">
                    <div class="feature__image">
                    <img src=${item.image} alt="" />
                    <div class="feature__desc">
                        <h5>${item.name}</h5>
                        <p>${item.description.length > 80 ? item.description.substr(0, 80) + '...' : item.description}</p>
                    </div>
                    </div>
                    <div class="feature__bottom">
                    <a id= "buy" class="btn" href="/page/detail.html?id=${item.id}">Buy now</a>
                    <span>${item.price}</span>
                    </div>
               
                </div>
            </div>`;
    }
    wrapper.innerHTML = htmlContent;
}

function SetUpPagination(items, wrapper, products_per_page){
    wrapper.innerHTML = '';
    // tổng số trang : tổng số sản phẩm chia cho số sản phẩm hiển thị ở 1 trang
    // có 19 sản phẩm => page_count = 19 / 6 = 4
    let page_count = Math.ceil(items.length / products_per_page);
    for(let i = 1; i <= page_count; i++){
        let btn = PaginationButton(i, items);
        wrapper.appendChild(btn);
    }
}

function PaginationButton(page, items){
    let button = document.createElement('button');
    button.innerHTML = page;
    if(currentPage == page){
        button.classList.add('active');
    }
    button.addEventListener('click', () => {
        //vd: Nếu trang hiện tại là trang 2 thì hiển thị sản phẩm trang 2
        currentPage = page;
        DisplayList(items, listProduct, perPage, currentPage)

        let currentBtn = $('.pagination button.active');
        currentBtn.classList.remove('active');

        button.classList.add('active');
    })
    return button;
}


