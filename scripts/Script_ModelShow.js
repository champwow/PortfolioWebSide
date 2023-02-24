function ChangeModel(name) {
    let item = document.getElementById("Item");
    item.src = `./model/${name}.glb`;
    console.log(name);
}