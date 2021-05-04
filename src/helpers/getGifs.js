
export const getGifs = async (category) =>{

    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=ECwQqy1YB8v5LccVSykUMjvUR0W8tk0L`;

    const respose = await fetch(url);
    const {data} = await respose.json();

    const gifs = data.map(img => {
        return{ 
            id: img.id,
            title: img.title,
            url : img.images?.downsized_medium.url
        }
    })

    return gifs;
}