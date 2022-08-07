const modifyData = {
	modifySpotName: function(x){
    	const y = parseInt(x) + 1
        return y
        },
    modifyLaneName: function(x){
    	const y = String(0) + String(x)
        return y
        },
    modifyTimeName: function(x){
    	// let y = 0
        if (x <= 16){
            y = x + 7
        } else if (x > 16){
            y = x -17
        }
        return String(y)
        }
    };

const spot1 = prompt("지점을 입력해주세요");
const lane1 = parseInt(prompt("차선을 입력해주세요"));
const time1 = parseInt(prompt("시간을 입력해주세요"));

const spot2 = modifyData.modifySpotName(spot1);
const lane2 = modifyData.modifyLaneName(lane1);
const time2 = modifyData.modifyTimeName(time1);

console.log(spot2)
console.log(lane2)
console.log(time2)