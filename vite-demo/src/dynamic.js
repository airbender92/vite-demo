
const file = 'a';
const module = await import(`./dir/${file}.js`)

function callback(){

    console.log('module', module)
}

export {
    callback
}