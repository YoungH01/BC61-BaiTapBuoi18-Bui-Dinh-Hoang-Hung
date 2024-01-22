var arr = [];
var arrQuest9=[];
// var dataUseCompare=0;
var getNumber = document.getElementById("getNumber");
var showNumber = document.getElementById("showNumber");
var ansSumPos = document.getElementById("ansSumPos");
var countPos = document.getElementById("countPos");
var ansMin =document.getElementById("ansMin");
var minPos=document.getElementById("minPos");
var lastEven=document.getElementById("lastEven");
var item1=document.getElementById("item1");
var item2=document.getElementById("item2");
// var index2=1;
var ansSwap=document.getElementById("ansSwap");
var ansSort=document.getElementById("ansSort");
var ansPrime=document.getElementById("ansPrime");
var getNumberQuest9=document.getElementById("getNumberQuest9");
var showNumberQuest9=document.getElementById("showNumberQuest9");
var ansInter=document.getElementById("ansInter");
var ansCompare=document.getElementById("ansCompare");

const dropdownMenu = document.querySelector(".dropdown-menu");
const drop2 = document.querySelector(".drop2");
const drop3 = document.querySelector(".drop3");
const drop4 = document.querySelector(".drop4");
const drop5 = document.querySelector(".drop5");
const drop6 = document.querySelector(".drop6");
const drop7 = document.querySelector(".drop7");
const drop8 = document.querySelector(".drop8");
const drop9 = document.querySelector(".drop9");
const drop10 = document.querySelector(".drop10");





//Prevent dropdown from closing when clicking inside it
dropdownMenu.addEventListener("click", (event) => {
    event.stopPropagation();
});

drop2.addEventListener("click", (event) => {
    event.stopPropagation();
});
drop3.addEventListener("click", (event) => {
    event.stopPropagation();
});
drop4.addEventListener("click", (event) => {
    event.stopPropagation();
});
drop5.addEventListener("click", (event) => {
    event.stopPropagation();
});
drop6.addEventListener("click", (event) => {
    event.stopPropagation();
});
drop7.addEventListener("click", (event) => {
    event.stopPropagation();
});
drop8.addEventListener("click", (event) => {
    event.stopPropagation();
});
drop9.addEventListener("click", (event) => {
    event.stopPropagation();
});
drop10.addEventListener("click", (event) => {
    event.stopPropagation();
});
function addNumber() {
    arr.push(Number(getNumber.value));
    var ans = "";
    for (let i = 0; i < arr.length; i++) {
        if (i != 0) ans += ", ";
        ans += arr[i].toString();
    }
    showNumber.innerHTML = ans;
}
function sumPositiveNumber() {
    var ans = 0, len = arr.length, ansString = "";
    for (let i = 0; i < len; i++) {
        if (arr[i] > 0) ans += arr[i];
    }
    ansString = ("Tổng số dương: " + ans.toString());
    ansSumPos.innerHTML = ansString;
}
function countPositiveNumber() {
    var ans = 0, ansString = ""
    for (const value of arr) {
        if (value > 0) ans += 1;
    }
    // dataUseCompare=ans;
    ansString = ans.toString();
    countPos.innerHTML = ansString;
}
function findMinNumber() {
    if(arr.length==0){
        ansMin.innerHTML="Số nhỏ nhất: undefined";
        return;
    }
    var ans = arr[0],ansString="";
    for (const value of arr) {
        if (ans > value) ans = value;
    }
    ansString="Số nhỏ nhất: "+ans.toString();
    ansMin.innerHTML= ansString;
    return;
}
function findMinPosNumber() {
    if(arr.length==0){
        minPos.innerHTML="Số dương nhỏ nhất: undefined"
        return;
    }
    var ans = 0, check = 0,ansString="";
    for (const value of arr) {
        if (value > 0) {
            if (check == 0) ans = value;
            if (check != 0 && ans > value) ans = value;
            check++;
        }
    }
    ansString="Số dương nhỏ nhất: "+ ans.toString();
    minPos.innerHTML=ansString;
}
function findLastEvenNumber() {
    if(arr.length==0){
        lastEven.innerHTML="Số chẵn cuối cùng: undefined"
        return;
    }
    var ans = 0,ansString="";
    for (const value of arr) {
        if (value % 2 == 0) {
            ans = value;
        }
    }
    ansString="Số chẵn cuối cùng: "+ans.toString();
    lastEven.innerHTML=ansString;
}
function swapNumber(){
    var index1=Number(item1.value);
    var index2=Number(item2.value);
    var len = arr.length,ansString="";
    if(len==0){
        ansSwap.innerHTML="Mảng bị rỗng, bạn nhập số vô!";
        return;
    }
    if(index1<0 || index1>=len){
        ansSwap.innerHTML="Vị trí thứ nhất của bạn bị sai";
        return;
    }
    if(index2<0 || index2>=len){
        ansSwap.innerHTML="Vị trí thứ hai của bạn bị sai";
        return;
    }
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
    for (let i = 0; i < len; i++) {
        if (i != 0) ansString += ", ";
        ansString += arr[i].toString();
    }
    // ansString=count.toString();
    ansSwap.innerHTML=ansString;
    // count++;
}
function selectionSort() {
    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]; // Swap elements
    }
    var ans = "";
    for (let i = 0; i < arr.length; i++) {
        if (i != 0) ans += ", ";
        ans += arr[i].toString();
    }
    ansSort.innerHTML = ans;
}
function isPrime(number) {
    if (number <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}
function findFirstPrime() {
    var ans = 0,ansString="";
    for (let i = 0; i < arr.length; i++) {
        if (isPrime(arr[i]) == true) {
            ans = arr[i];
            break;
        }
    }
    if (ans == 0) ansString="Không tìm thấy số nguyên tố";
    else ansString="Số nguyên tố đầu tiên là: " +ans.toString();
    ansPrime.innerHTML=ansString;
}
function addNumberQuest9(){
    arrQuest9.push(Number(getNumberQuest9.value));
    var ans = "";
    for (let i = 0; i < arrQuest9.length; i++) {
        if (i != 0) ans += ", ";
        ans += arrQuest9[i].toString();
    }
    showNumberQuest9.innerHTML = ans;
}
function countInteger() {
    var ans = 0,ansString="";
    for (let i = 0; i < arrQuest9.length; i++) {
        if (arrQuest9[i] - Math.floor(arrQuest9[i]) == 0) ans += 1;
    }
    ansString="Số nguyên: "+ ans.toString();
    ansInter.innerHTML=ansString;
}
function compareNumber() {
    var posNumber = 0,navNumber = 0,ansString="";
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) navNumber += 1;
        if(arr[i]>0) posNumber+=1;
    }
    if (posNumber > navNumber) ansString= "Số âm < Số dương";
    else if (posNumber < navNumber) ansString= "Số âm > Số dương";
    else ansString = "Số âm = Số dương";
    ansCompare.innerHTML= ansString;
}

