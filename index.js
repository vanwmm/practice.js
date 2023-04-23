// tinh binh phuong cho tung so
let num = [3, 4, 5, 6, 4, 5, 6, 7, 7, 77];
let tich = [];
for (let i = 0; i < num.length ; i++) {
   tich.push(num[i] ** 2);
}
console.log("Binh phuong cua day so la: " + tich);


// tim so nguyen to
let num2 = [3, 5, 6, 6, 7, 8, 8, 8, 9, 9, 33];
let space2 = [];
for (let i = 0; i < num2.length ; i++) {
    for(let j=0; i<= Math.sqrt(num2[i]); j++){
        if(num2[i] % j ==0){
                space2.push(num2[i]);
        }
    }
        }
 
console.log("Cac so la so nguyen to" + space2 )


// tao mot gio hang hoa qua (ten qua, mau, noi san xuat, ngay het han, don vi phan phoi (ten don vi, dia  chi don vi))
// in ra sản phẩm theo format như sau
// STT: ???
// Tên sản phẩm: ???
// Giá: ???
// Ngày hết hạn: ???
// Đơn vị phân phối: tên đơn - địa  chỉ 
// - Thêm prompt:  Sửa ngày hết hạn theo index

let fruit1 = {
        name : "Cam",
        color : "Orange",
        price : "20000",
        origin : "VietNam",
        date : "20/05/2023",
        distributor : {
                company : "HN",
                address : "HaNoi",
        },
}

let fruit2 = {
        name : "Tao",
        color : "Red",
        price : "20000",
        origin : "My",
        date : "20/06/2023",
        distributor : {
                company : "DN",
                addresy : "DaNang",
        },
}

let fruit3 = {
        name : "Buoi",
        color : "green",
        price : "20000",
        origin : "ThaiLand",
        date : "20/07/2023",
        distributor : {
                company : "HCM",
                address : "HoChiMinh",
        },
}

let fruit4 = {
        name : "Mit",
        color : "Yellow",
        price : "20000",
        origin : "laos",
        date : "20/08/2023",
        distributor : {
                company : "HN",
                address : "HaNoi",
        },
}

let fruit5 = {
        name : "Hong Xiem",
        color : "Brown",
        price : "20000",
        origin : "VietNam",
        date : "20/08/2023",
        distributor : {
                company : "TH",
                address : "ThanhHoa",
        },
}

let cart = [fruit1,fruit2,fruit3,fruit4,fruit5];
for (let i = 0; i < cart.length; i++) {
    console.log("STT ", i+1);
    console.log('Tên sản phẩm: ', cart[i].name);
    console.log('Giá: ', cart[i].price);
    console.log('Ngày hết hạn: ', cart[i].date);
    console.log(`Đơn vị phân phối:  ${cart[i].distributor.company} - ${cart[i].distributor.address}`);
}

let person = prompt ("Nhap ngay sua doi");
for (let i = 0; i < cart.length; i++) {
    if(enter == i+1){
        let update = prompt('Nhap lai ngay het han moi: ');
        console.log(`Ngay het han moi cua ${cart[i].name}: `, update);
    }
}
