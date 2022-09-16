export const customFetch = (Productos) => {
    return new Promise ((resolve, reject) => {
        setTimeout (()=> {
            resolve (Productos) 
        },2000)

  })


}