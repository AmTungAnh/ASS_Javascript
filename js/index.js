const sanPham = [
    {
        id: 1,
        anh: [
            {
                ten: "image/1_Lee Kang In_man_black_1.avif"
            },
            {
                ten: "image/1_Lee Kang In_man_black_2.avif"
            },
            {
                ten: "image/1_Lee Kang In_man_black_.avif"
            }
        ],
        ten: "Sản phẩm 1",
        gia: "1000",
        soLuong: 100,
        like: true
    },
    {
        id: 2,
        anh: [
            {
                ten: "image/2_Mbappé_man_black_1.avif"
            },
            {
                ten: "image/2_Mbappé_man_black_2.avif"
            },
            {
                ten: "image/2_Mbappé_man_black_3.avif"
            }
        ],
        ten: "Sản phẩm 2",
        gia: "1000",
        soLuong: 100,
        like: false
    },
    {
        id: 3,
        anh: [
            {
                ten: "image/13_Hakimi_Man_Yellow_1.avif"
            },
            {
                ten: "image/13_Hakimi_Man_Yellow_2.avif"
            },
            {
                ten: "image/13_Hakimi_Man_Yellow_3.avif"
            }
        ],
        ten: "Sản phẩm 3",
        gia: "200000",
        soLuong: 100,
        like: true
    },
    {
        id: 4,
        anh: [
            {
                ten: "image/14-Vitinha-Man-Yellow-1.avif"
            },
            {
                ten: "image/14-Vitinha-Man-Yellow-2.avif"
            },
            {
                ten: "image/14-Vitinha-Man-Yellow-3.avif"
            }
        ],
        ten: "Sản phẩm 4",
        gia: "6000000",
        soLuong: 100,
        like: false
    },
    {
        id: 5,
        anh: [
            {
                ten: "image/1_Lee Kang In_man_black_1.avif"
            },
            {
                ten: "image/1_Lee Kang In_man_black_2.avif"
            },
            {
                ten: "image/1_Lee Kang In_man_black_.avif"
            }
        ],
        ten: "Sản phẩm 5",
        gia: "100000",
        soLuong: 100,
        like: true
    },
    {
        id: 6,
        anh: [
            {
                ten: "image/29-Danilo -Woman-White-1.avif"
            },
            {
                ten: "image/29-Danilo -Woman-White-2.avif"
            },
            {
                ten: "image/29-Danilo -Woman-White-3.avif"
            }
        ],
        ten: "Sản phẩm 6",
        gia: "70000",
        soLuong: 100,
        like: false
    },
    {
        id: 7,
        anh: [
            {
                ten: "image/36-Lee Kang In -Woman -Blue-1.avif"
            },
            {
                ten: "image/36-Lee Kang In -Woman -Blue-2.avif"
            },
            {
                ten: "image/36-Lee Kang In -Woman -Blue-3.avif"
            }
        ],
        ten: "Sản phẩm 7",
        gia: "100000",
        soLuong: 100,
        like: true
    },
    {
        id: 8,
        anh: [
            {
                ten: "image/37-Mbappé -Woman -Blue-1.avif"
            },
            {
                ten: "image/37-Mbappé -Woman -Blue-2.avif"
            },
            {
                ten: "image/37-Mbappé -Woman -Blue-3.avif"
            }
        ],
        ten: "Sản phẩm 8",
        gia: "400000",
        soLuong: 100,
        like: true
    },
    {
        id: 9,
        anh: [
            {
                ten: "image/1_Lee Kang In_man_black_1.avif"
            },
            {
                ten: "image/1_Lee Kang In_man_black_2.avif"
            },
            {
                ten: "image/1_Lee Kang In_man_black_.avif"
            }
        ],
        ten: "Sản phẩm 9",
        gia: "100000",
        soLuong: 100,
        like: true
    },
    {
        id: 10,
        anh: [
            {
                ten: "image/1_Lee Kang In_man_black_1.avif"
            },
            {
                ten: "image/1_Lee Kang In_man_black_2.avif"
            },
            {
                ten: "image/1_Lee Kang In_man_black_.avif"
            }
        ],
        ten: "Sản phẩm 10",
        gia: "10000",
        soLuong: 100,
        like: true
    }
]
sessionStorage.setItem("sanPham", JSON.stringify(sanPham));
const productContainer = document.querySelector('.product-container');

const sanPhamSession = JSON.parse(sessionStorage.getItem("sanPham"));

function toggleLike(productId) {
    const productIndex = sanPham.findIndex((product) => product.id === productId);

    if (productIndex !== -1) {
        sanPham[productIndex].like = !sanPham[productIndex].like;

        const likeButton = document.querySelector(`[data-id="${productId}"]`);
        likeButton.innerHTML = `
            ${sanPham[productIndex].like ? '<i class="fa-solid fa-heart"></i>' : '<i class="fa-regular fa-heart"></i>'}
        `;
    }
}

function detail(id) {
    const sanPhamDetail = sanPham.find((item) => item.id === id);
    sessionStorage.setItem("detail", JSON.stringify(sanPhamDetail));
    window.location.href = "detail.html";
}

document.addEventListener("DOMContentLoaded", function () {
    const sanPham = JSON.parse(sessionStorage.getItem("sanPham"));
    const productContainer = document.querySelector('.product-container');

    function addToCart(id) {
        const gioHang = JSON.parse(sessionStorage.getItem("gioHang")) || [];
        const timSanPham = gioHang.find((item) => item.id === id);
    
        if (timSanPham) {
            timSanPham.soLuong += 1;
        } else {
            const timSanPham2 = sanPham.find((item) => item.id === id);
            gioHang.push({ ...timSanPham2, soLuong: 1 });
        }
    
        sessionStorage.setItem("gioHang", JSON.stringify(gioHang));
    }

    function renderProduct(product) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        productCard.innerHTML = `
            <img src="${product.anh[0].ten}" alt="Product Image">
            <h3>${product.ten}</h3>
            <p>Giá: $${product.gia}</p>
            <div class="product-buttons">
                <button onclick="detail(${product.id})"><i class="fa-solid fa-plus"></i></button>
                <button class="cart-button"><i class="fa-solid fa-cart-shopping"></i></button>
                <button onclick="toggleLike(${product.id})" data-id="${product.id}">
                    ${product.like ? '<i class="fa-solid fa-heart"></i>' : '<i class="fa-regular fa-heart"></i>'}
                </button>
            </div>
        `;

        productContainer.appendChild(productCard);

        const cartButton = productCard.querySelector('.cart-button');
        cartButton.addEventListener('click', function () {
            addToCart(product.id);
        });
    }

    sanPham.forEach(renderProduct);
});

let slideIndex = 1;
showSlides(slideIndex);

function changeSlide(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("slide");

    if (n > slides.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
}
