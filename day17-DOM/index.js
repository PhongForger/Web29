function isTable(node) {
  return node.tagName === "TABLE";
}

const table = Array.from(document.body.children).find(isTable);

const rows = table.rows;

for (let i = 0; i < rows.length; i++) {
  rows[i].cells[i].style.backgroundColor = "red";
  rows[i].cells[rows.length - i - 1].style.backgroundColor = "red";
}

// Môi trường chạy mã JS trong trình duyệt được cung cấp bởi đối tượng Window
// Môi trường chạy mã JS trong trình duyệt cung cấp cho mình một số API (các đối tượng BOM, DOM)
// để làm việc/ thao tác với cửa sổ trình duyệt, với nội dung hiện thị

// Cấu trúc phân cấp đối tượng:
// Node: Tất cả mọi thứ đều là node
// document: Cũng là một node
// Element: Chỉ bao gồm các node là thẻ HTML (h1, h2, img,...)

// Mỗi một thẻ HTML thì có một interface riêng, mô tả các thuộc tính và phương thức của riêng nó,
//  ví dụ HTMLTableElement, HTMLImageElement, HTMLAnchorElement,...

// NodeList và HTMLCollection (kết quả trả về của một số thuộc tính/ phương thức tìm kiếm phần tử)
// không phải là mảng, chỉ có thể duyệt qua bằng vòng lặp for, hoặc chuyển thành mảng thông qua Array.from
