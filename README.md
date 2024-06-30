# js-lab-105
### Lab105 Array: เช็คobjectว่าง
ให้เขียนฟังก์ชัน checkEmptyObj(obj) เพื่อเช็คว่า obj เป็น object ว่างหรือไม่

```JavaScript
console.log(checkEmptyObj({})); // true
console.log(checkEmptyObj({ name: "John", age: 30 })); // false
console.log(checkEmptyObj(null)); // false
console.log(checkEmptyObj([])); // false
console.log(checkEmptyObj(123)); // false
```
