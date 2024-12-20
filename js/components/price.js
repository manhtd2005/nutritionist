export function priceList() {
  const checkbox = document.querySelector(".pricing__switch--input");
  if (checkbox) {
    checkbox.addEventListener("change", function () {
      const item = document.querySelectorAll(".pricing__item");

      const price = document.querySelectorAll(".pricing__item--price");
      const hidden = document.querySelectorAll(
        ".pricing__item--price__hidden"
      );

      if (checkbox.checked) {
        // Đổi màu thẻ item
        item.forEach(function (e) {
          e.classList.add("pricing__item--check");
        });

        //Gạch ngang giá gốc
        price.forEach(function (e) {
          e.style.textDecoration = "line-through";
        });

        // Hiện giá km
        hidden.forEach(function (e) {
          e.style.display = "initial";
        });
      } else {
        // Xóa màu thẻ item
        item.forEach(function (e) {
          e.classList.remove("pricing__item--check");
        });

        // Hiển thị lại Giá gốc
        price.forEach(function (e) {
          e.style.textDecoration = "none";
        });

        // Xóa giá km
        hidden.forEach(function (e) {
          e.style.display = "none";
        });
      }
    });
  }
}
