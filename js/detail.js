document.addEventListener("DOMContentLoaded", function () {
    const product = JSON.parse(sessionStorage.getItem("detail"));

    if (!product) {
        alert("Không tìm thấy thông tin sản phẩm");
        window.location.href = "index.html";
        return;
    }

    const detailContainer = document.getElementById("detail-container");
    detailContainer.innerHTML = `
    <table>
        <tbody>
            <tr>
                <td>
                    <img class="product-image" src="${product.anh[0].ten}" alt="Product Image">
                </td>
            </tr>
            <tr>
                <td>
                    <h2>${product.ten}</h2>
                    <div class="product-detail">
                        <div class="product-info">
                            <p>Giá:<b> $${product.gia}</b></p>
                            <p>Số Lượng: <b>${product.soLuong}</b></p>
                            <p>Ưa thích: <b>${product.like ? 'Yêu thích' : 'Không thích'}</b></p>
                        </div>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
        
    `;
});
