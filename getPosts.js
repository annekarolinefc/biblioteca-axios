import {getPosts} from './services/postApi'

let res = await getPosts();
console.log(res)