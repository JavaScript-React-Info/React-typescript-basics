generics:

function getFirstElement<T>(array: T[]){
  return array[0]
}

const number= [1, 2, 3]
const firstNum =getFirstElement(number)
const strings = ["abc", "bcd", "asd"];
const firstString = getFirstElement(strings)
// ----------------------------------------------------
type APIResponse<Data> = {
  data: Data,
  isError: boolean
}

type UserResponse = APIResponse<{name: string, age: number}>

const response:  UserResponse = {
  data: {
    name: "Kyle",
    age: 28
  },
  isError:false
}


-------------------
https://www.youtube.com/watch?v=gChqkchbn9o&list=PLNqp92_EXZBJ4CBroxVBJEpAXoz1g-naZ&index=39

