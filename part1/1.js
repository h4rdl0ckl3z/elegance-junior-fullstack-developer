function findMissingNumber(arr) {
    for (let i = 1; i < arr.length; i++) {      //ลูปอาเรย์
        if (arr[i] - arr[i - 1] !== 1) {        //เงื่อนไข ตำแหน่งอาเรย์ หลัง - ก่อนหน้า ต้องไม่เท่ากับ 1
            return arr[i - 1] + 1;              //คืนค่า ตำแหน่งอาเรย์ + 1 ค่าที่หายไปในอาเรย์
        }
    }
    return 'None';      //คืนค่าเป็น None หากเข้าเงื่อนไข เท่ากับ 1
}

// const numbers = [1, 2, 4, 5, 6];        //3
// const numbers = [10, 11, 12, 14];       //13
const numbers = [3, 4, 5, 6, 7];        //None
const missingNumber = findMissingNumber(numbers);
console.log(missingNumber);
