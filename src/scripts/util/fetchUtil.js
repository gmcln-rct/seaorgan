

export default fetchUtil = () => {
    const list = [];
    fetch('http://localhost:8000/gov')
    .then(res => res.json())
    // .then(data => { console.log(data); window.data = data.data })
    .then(data => {
        data["data"].forEach(currStats => {
            return list.push(currStats)
        });
        return (list);
    })
};