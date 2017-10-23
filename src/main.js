'use strict'
module.exports = {
    containPrime: (value)=>{
        if (typeof(value) !='number'){
            return 'undefined';
        }
        else if(value ===""){
            return 'undefined';
        }else if(value<=0){
            return 'undefined';
        }else{
            if(value%3===0&&value%5===0&&value%7===0){
                return 'plingplangplong';
            }
            else if(value%3===0&&value%5===0){
                return 'plingplang'
            }
            else if(value%3===0&&value%7===0){
                return 'plingplong'
            }
            else if(value%5===0&&value%7===0){
                return 'plangplong'
            }else if(value%3===0){
                return 'pling'
            }
            else if(value%5===0){
                return 'plang'
            }
            else if(value%7===0){
                return 'plong'
            }
            else{
                return value;
            }
        }

    }
}