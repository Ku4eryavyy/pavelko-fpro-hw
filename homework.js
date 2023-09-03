function generateKey(count, characters) {
    const charactersLength = characters.length;
    let key = '';

    for (let i = 0; i < count; i++) {
        let index = Math.floor(Math.random() * charactersLength);
        key += characters[index];
    }
    return key; 
}
const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

const key = generateKey(16, characters);
console.log(key); // eg599gb60q926j8i