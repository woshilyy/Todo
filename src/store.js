const SOTREAGE_KEY="todo"
export default{
    fetch(){
        return JSON.parse(window.localStorage.getItem(SOTREAGE_KEY) || '[]');
    },
    save(todos){
        window.localStorage.setItem(SOTREAGE_KEY,JSON.stringify(todos))
    }
}