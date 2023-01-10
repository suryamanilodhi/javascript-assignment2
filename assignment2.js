// Write a program to search if a number exists in an array. If the number exists then return the position. 
// If it exists multiple time then return an array with all the positions. If the number doesn't exist then return -1;
// For example,
// Input: [1, 2, 3, 4, 5, 1, 3] and Search Elem: 4
// Output: 3
// Input: [1, 2, 3, 4, 5, 1, 3] and Search Elem: 1
// Output: [0, 5]
// Input: [1, 2, 3, 4, 5, 1, 3] and Search Elem: 7
// Output:-1


// function exists(arr,search){
//   var result=[];
//   for(var i=0; i<arr.length; i++){
//     if(arr[i]==search){
//       result.push(i);
//     }
//   }
//   if(result==""){
//     return -1;
//   }
//   else{
//     return result;
//   }
// }
// console.log(exists([1,2,3,4,5,1,3],1))



// Question 2:
// Write a program to print following pattern in the console.
// 54321
// 5432
// 543
// 54
// 5
// var n=5;
// for(var i=1; i<=n; i++){
//     var str=" ";
//     for(var j=n; j>=i; j--){
//         str=str+j;
//     }
//     console.log(str);
// }


// Question 3:
// Write a JavaScript program to sort an array in ascending order
// For example,
// Input: [3, 2, 1, 4, 5, 45]
// Output: [1, 2, 3, 4, 5, 45]

// function sort(arr){
//     for(var i=0; i<arr.length; i++){
//         var min=i;
//         for(var j=i+1; j<arr.length; j++){
//             if(arr[j]<arr[min]){
//                 min=arr[j];
//             }
//         }
//         if(i!==min){
//             temp=arr[i];
//             arr[i]=arr[min];
//             arr[min]=temp;
//         }
//     }
//     return arr;
// }
// var res=sort([3,2,1,4,5,45]);
// console.log(res);
 




// Question 4:
// Write a JavaScript program to check if two strings are anagrams. Anagram string are such two strings which can be rearranged to create one another.
// For example,
// Input: LISTEN and SILENT
// Output: True
// Input: HELLO and JELLO
// Output: False

// function check(a,b) {
//     let len1 = a.length;
//     let len2 = b.length;
//     if(len1 !== len2){
//        console.log('please enter equal length string');
//        return
//     }
//     let str1 = a.split('').sort().join('');
//     let str2 = b.split('').sort().join('');
//     if(str1 === str2){
//        console.log("True");
//     } else { 
//        console.log("False");
//     }
//  }
//  check("LISTEN","SILENT");
// check("HELLO","JELLO");





// Question 5:
// Write a JavaScript program to reverse a string without using inbuilt methods.
// For example,
// Input: Hello
// Output: olleH

function reverse(str){
  var newstr=" ";
  for(var i=str.length-1; i>=0; i--){
       newstr+=str[i];
  }
  return newstr;
}
var res= reverse("hello");
console.log(res);
