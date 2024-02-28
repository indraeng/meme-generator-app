export const getAllMemes = async() =>{
    const resp = await fetch('https://api.imgflip.com/get_memes')
    return await resp.json()
}