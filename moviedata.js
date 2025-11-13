//function for getting the longest duration best scene with name
//-->making the timeArray logic
function getTimeArray(time){
    const timeArrStr=time.split(' ');
    const timeArrNum=timeArrStr.filter((x,i)=>x%2==0).map(x=>Number(x));
    return timeArrNum;
}
//-->comparing time
function compareTime(initial,current){
    if(initial.length<current.length){
        return true;
    }else if(initial.length==current.length){
        for(let i=0;i<current.length;i++){
            if(current[i]>initial[i]){
                return true;
            }else if(current[i]<initial[i]){
                return false;
            }
        }
    }else{
        return false;
    }
}
//-->main function returning the object
function longestBestScene(arr){
    let name;
    let longestDuration=[]; //-->what if there is a case of "1 hour 25 minutes" or longer durations
    for(const {movieName,bestScenes} of arr){
       for(const {duration} of bestScenes){
        const timeArray=getTimeArray(duration);
        if(compareTime(longestDuration,timeArray)){
            longestDuration=timeArray;
            name=movieName;
        }
       }
    }
    const durationInMinutes=longestDuration.reduce((acc,val,i)=>{
      return i===0?acc+val*60:acc+val;
    },0);

    return {movieName:name,longestSceneDuration:durationInMinutes};
}


//function to get the total duration
function totalDuration(arr){
    let total=0;
    for(const {bestScenes} of arr){
        for(const {duration} of bestScenes){
          const timeArr=getTimeArray(duration);
          total+=timeArr.reduce((acc,val,i)=>{
            if(timeArr.length>1){
            return i===0?acc+val*60:acc+val;
            }else{
                return val;
            }
          },0)
            
          }
        }
        return total;
    }






let data = [
  {
    "movieName": "The Shawshank Redemption",
    "actors": ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
    "rating": 4.8,
    "bestScenes": [
      {
        "title": "Andy Dufresne escapes from prison",
        "duration": "15 mins"
      },
      {
        "title": "Brooks was here",
        "duration": "10 mins"
      }
    ]
  },
  {
    "movieName": "The Godfather",
    "actors": ["Marlon Brando", "Al Pacino", "James Caan"],
    "rating": 4.9,
    "bestScenes": [
      {
        "title": "Horse head in bed",
        "duration": "5 mins"
      },
      {
        "title": "Cannoli scene",
        "duration": "3 mins"
      }
    ]
  },
  {
    "movieName": "The Dark Knight",
    "actors": ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
    "rating": 4.8,
    "bestScenes": [
      {
        "title": "Opening bank robbery",
        "duration": "12 mins"
      },
      {
        "title": "Why So Serious interrogation",
        "duration": "8 mins"
      }
    ]
  },
  {
    "movieName": "The Lord of the Rings: The Return of the King",
    "actors": ["Elijah Wood", "Viggo Mortensen", "Ian McKellen"],
    "rating": 4.9,
    "bestScenes": [
      {
        "title": "Ride of the Rohirrim",
        "duration": "10 mins"
      },
      {
        "title": "Frodo destroys the One Ring",
        "duration": "7 mins"
      }
    ]
  }
];

console.log(totalDuration(data));
