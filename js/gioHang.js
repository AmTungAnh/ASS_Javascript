document.addEventListener("DOMContentLoaded", function () {
    const gioHangTable = document.querySelector(".cart-items-table tbody");
    const cartTotal = document.querySelector(".cart-total");
    const checkoutButton = document.querySelector(".checkout-button");

    function renderCartItems() {
        const gioHang = JSON.parse(sessionStorage.getItem("gioHang")) || [];

        gioHangTable.innerHTML = '';

        let totalAmount = 0;

        gioHang.forEach((item, index) => {
            const stt = index + 1;
            const thanhTien = item.soLuong * parseFloat(item.gia);
            totalAmount += thanhTien;

            const newRow = document.createElement('tr');
            newRow.innerHTML = `
                <td>${stt}</td>
                <td>${item.ten}</td>
                <td><input type="number" value="${item.soLuong}" data-index="${index}" class="quantity-input"></td>
                <td>$${thanhTien.toFixed(2)}</td>
            `;

            gioHangTable.appendChild(newRow);
        });

        cartTotal.textContent = `Tổng cộng: $${totalAmount.toFixed(2)}`;
    }

    renderCartItems();

    checkoutButton.addEventListener('click', function () {
        sessionStorage.removeItem('gioHang');
        renderCartItems();
    });

    gioHangTable.addEventListener('input', function (event) {
        if (event.target.classList.contains('quantity-input')) {
            const index = parseInt(event.target.dataset.index);
            const newQuantity = parseInt(event.target.value);

            if (!isNaN(newQuantity) && newQuantity >= 0) {
                const gioHang = JSON.parse(sessionStorage.getItem("gioHang")) || [];
                gioHang[index].soLuong = newQuantity;
                sessionStorage.setItem("gioHang", JSON.stringify(gioHang));

                renderCartItems();
            }
        }
    });
})