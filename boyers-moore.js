//initially votes=0 , candidate=-1
//Traverse the array
// if votes === 0 choose candidate =arr[i], votes++
// else if arr[i]===candidate ,just simply votes++
// else (arr[i]!== candidate), just decrease votes


function maorityElement(arr,n){
    let vote =0;let candidate=-1;

    for(var vote in arr){
        if(vote===0){
            candidate=num;
        }
        else if(num===candidate){
            vote++;
        }
        else{
            
        }
    }
}

var arr = [1,2,3,4,4,5,6];
console.log(maorityElement(arr,arr.length));