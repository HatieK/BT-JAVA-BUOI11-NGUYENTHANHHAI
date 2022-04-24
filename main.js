// Bài Tập 1
// Input: Lương một ngày, số ngày làm

// Process: 1. Lấy được Input, incomePerDay = 500000
// workingDays = 5
// 2. Tạo biến var salary chứa lương tính được
// 3. Tính lương:  incomePerDay * workingDays
// 4. Log ra kết quả màn hình 

// Output: Tiền lương

var incomePerDay = 500000;
var workingDays = 5;

var salary; 

salary = incomePerDay * workingDays

console.log("Tổng lương tháng này là:" , salary);



// Bài Tập 2
// Input: Nhập vào 5 số thực

// Process: 1. Lấy được Input:
//  average 1 = 7
//  average 2 = 8
//  average 3 = 12
//  average 4 = 15
//  average 5 = 17
// 2. Tạo biến var averageNumber chứa đáp án 
// 3. Tính số trung bình: 
// (average 1 + average 2 + average 3 + average 4 + average 5)/5
// 4. Log ra kết quả màn hình 

// Output: Tính ra kết quả trung bình

var average1 = 7;
var average2 = 8;
var average3 = 12;
var average4 = 15;
var average5 = 17;

var averageNumber;

averageNumber = (average1 + average2 + average3 + average4 + average5)/5

console.log("Đáp án của 5 số trung bình là:" , averageNumber );


// Bài Tập 3
// Input: Nhập vào số tiền USD, nhập vào giá USD hiện nay

// Process: 1. Lấy được Input
// inputUsd = 10
// priceUsd = 23500
// 2. Tạo biến convertUsd chứa đáp án
// 3. Tính số tiền sau chuyển đổi
// inputUsd * priceUsd
// 4. Log ra kết quả màn hình

// Ouput: tính ra số tiền USD

var inputUsd = 10
var priceUsd = 23500

var convertUsd;

convertUsd = inputUsd * priceUsd

console.log("Đáp án của số tiền USD là:" , convertUsd)

// Bài Tập 4
// Input: Nhập vào chiều dài, chiều rộng của HCN

// Process: 1. Lấy được Input
// widthValue = 15
// lengthValue = 25
// 2. Tạo biến valueCircum và valueSquare chứa đáp án
// 3. Tính diện tích: widthValue * lengthValue 
//      Tính chu vi : (widthValue + lengthValue ) * 2
// 4. Log ra kết quả màn hình

// Output: tính ra kết quả chu vi diện tích

var widthValue = 15;
var lengthValue = 25;

var valueCircum;

valueCircum = (widthValue + lengthValue ) * 2;

var valueSquare;

valueSquare = widthValue * lengthValue;

console.log("Đáp án chu vi:" , valueCircum)

console.log("Đáp án diện tích:" ,valueSquare  )


// Bài tập 5
// Input: Tạo một biến số Number nhập số cần tính
// Tạo biến soHangDonVi để tính hàng đơn vị
// Tạo biến soHangChuc để tính hàng chục
// Tạo biến sum xuất kết quả

// Process: 1. soHangDonVi = Number % 10;
// 2. soHangChuc =(number - soHangDonVi)/10;
// 3. sum = soHangDonVi + soHangChuc

// Output: Xuất ra tổng của 2 ký tự số vừa nhập.


var number = 345
var soHangDonVi = number % 10;
var soHangChuc = (number - soHangDonVi)/10;
var sum = soHangDonVi + soHangChuc

console.log(sum)