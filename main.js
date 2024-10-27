const app = document.querySelector("#app");
const show = ()=>{
    fetch("http://localhost:3000/products")
    .then(response=>response.json())
    .then((data)=>{
        app.innerHTML = data.map((item,index)=>{
            return`
                <tr>
                    <td>${index+1}</td>
                    <td>${item.name}</td>
                    <td><img src="${item.image}" width="100px"></td>
                    <td>${item.price}</td>
                    <td>
                        <button class="update.html?id=${item.id}">Update</button>
                        <button class="btn-delete" data-id=${item.id}>Delete</button>
                    </td>
                </tr>
            `
        }).join("");
    })
    
}
show();