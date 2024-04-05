async function ImagetoBase64(file){
    console.log('File:', file);
    // Check if file is a Blob
    if (!(file instanceof Blob)) {
        console.error('Parameter is not a Blob:', file);
        return;
    }
    const reader = new FileReader();
    reader.readAsDataURL(file);

    const data = new Promise((resolve,reject)=>{
        reader.onload = ()=> resolve(reader.result)
        reader.onerror = err => reject(err)
    })

    return data;
}

export {ImagetoBase64}