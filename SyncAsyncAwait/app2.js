// function api(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("Weather API");
//             resolve(200);
//         },5000);
//     });
// }

// async function getWeatherData(){
//     await api();
//     await api();
// }

async function getWeatherData() {
    console.log("Getting Data1.....");
    await getData(1);
    console.log("Getting Data2.....");
    await getData(2);
    console.log("Getting Data3.....");
    await getData(3);
    console.log("Getting Data4.....");
    await getData(4);
    console.log("Getting Data5.....");
    await getData(5);
    console.log("Getting Data6.....");
    await getData(6);
    console.log("Getting Data7.....");
    await getData(7);
    console.log("Getting Data8.....");
    await getData(8);
}
////////////////IIFE With Normal /////////////////
(()=>{
    console.log("Getting Data1.....");
    getData(1);
    console.log("Getting Data2.....");
    getData(2);
    console.log("Getting Data3.....");
    getData(3);
    console.log("Getting Data4.....");
    getData(4);
    console.log("Getting Data5.....");
    getData(5);
    console.log("Getting Data6.....");
    getData(6);
    console.log("Getting Data7.....");
    getData(7);
    console.log("Getting Data8.....");
    getData(8);
})();
////////////////IIFE with async/////////////////
(async function() {
    console.log("Getting Data1.....");
    await getData(1);
    console.log("Getting Data2.....");
    await getData(2);
    console.log("Getting Data3.....");
    await getData(3);
    console.log("Getting Data4.....");
    await getData(4);
    console.log("Getting Data5.....");
    await getData(5);
    console.log("Getting Data6.....");
    await getData(6);
    console.log("Getting Data7.....");
    await getData(7);
    console.log("Getting Data8.....");
    await getData(8);
})();

function getData(dataId){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data",dataId);
            resolve("success");
        },2000);
    })
}

/////////// Promise Chain ////////
// function getData(dataId){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data",dataId);
//             resolve("success");
//         },5000);
//     })
// }

// getData(1).then((res)=>{
//     console.log(res);
//     return getData(2);
// })
// .then((res)=>{
//     console.log(res);
//     return getData(3);
// })
// .then((res)=>{
//     return getData(4);
    
// })
// .then((res)=>{
//     console.log("All Sucess1");
// });

// let p1 = getData(1);
// p1.then((res)=>{
//     console.log("Response 1= ",res);
//     console.log("Fetching Data 2");
//     let p2 = getData(2);
//     p2.then((res)=>{
//         console.log("Response 2= ",res);
//     });
// });

// function asyncFunc1(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("Print Promise 1");
//             resolve("Successfully Done");
//             //reject("Error Rejected 1");
//         },4000);
//     });
// }

// function asyncFunc2(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("Print Promise 2");
//             resolve("Successfully Done");
//             //reject("Error Rejected 2");
//         },4000);
//     });
// }


// console.log("Fetching Data 1");
// asyncFunc1();
// asyncFunc1().then((res)=>{
//     console.log("Response = ",res);
//     console.log("Fetching Data 2");
//     asyncFunc2();
//     asyncFunc2().then((res)=>{
//         console.log("Response 2 = ",res);
//     });

//     asyncFunc2().catch((err)=>{
//         console.log("Error 2 = ",err);
//     });
// });

// asyncFunc1().catch((err)=>{
//     console.log("Error = ",err);
// });



// const getPromise    =   ()  =>{
//     return new Promise((resolve,reject)=>{
//         console.log("I am promise");
//         resolve("success");
//         //reject("Promise Rejected1");
//     });
// }

// let promise =   getPromise();
// promise.then((res)=>{
//     console.log("Promise Fullfilled",res);
// });

// promise.catch((err)=>{
//     console.log("Promise rejected",err);
// });
// let promise =   new Promise((resolve,reject)=>{
//     console.log("I am a promise");
//     //resolve(123);
//     reject("Rejected");
// })

// function getData(dataId,getNextData){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data",dataId);
//             resolve("success");
//             if(getNextData){
//                 getNextData();
//             }
//         },9000);
//     })
// }




// function getData(data,getNextData){
//     setTimeout(()   =>  {
//         console.log("DATA =",data);
//         if(getNextData){
//             getNextData()
//         }
//     },2000);
// }

// getData(1,()=>{
//     getData(2,()=>{
//         getData(3,()=>{
//             getData(4);
//         })
//     })
// });