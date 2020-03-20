// const p1 = Promise.resolve(1)

// const p2 = Promise.reject(2)
//     .catch(err => console.log(err))

// Promise.all([p1, p2])
//     .then(res => console.log(res))

// const ajax = () => {
//     return new Promise((resolve, reject) => {
//         resolve('我是ajax')
//     })
// }

// async function fn() {
//     // const [p1, p2] = [ajax(), ajax()]
//     // const f1 = p1
//     // const f2 = p2
//     // return [f1, f2]
//     const p1 = await Promise.all([ajax(), ajax()])
//     return p1
// }

// fn()
//     .then(res => console.log(res))