
let state = {
    dialogData: [
        {id: 1,name: 'alex'},
        {id: 2,name: 'ivan'},
        {id: 3,name: 'mark'},
        {id: 4,name: 'bob'}
    ],
    posts:[

    ],
    addPost(text){
        this.posts.push(text)
        
    }
}
export default state