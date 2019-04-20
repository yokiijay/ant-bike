const time = new Promise((resolve,reject)=>{
  setTimeout(()=>{
    reject('haha')
  },1000)
}).then(res=>{
  console.log( res )
}).catch(res=>{
  console.log( res )
})