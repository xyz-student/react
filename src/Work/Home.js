    import React, { useState } from "react";

    const Home = () => {
        const [inputs, setInputs] = useState({
            name: "",
            email: "",
        });
        const [tableData, setTableData] = useState([]);//to show all data in  a table
        const [editClick, setEditClick] = useState(false); 
        const [editIndex, setEditIndex] = useState("");
        const handleChange = (e) => {
            setInputs({
                ...inputs,  //to store arrays more data
                [e.target.name]: e.target.value,
            });
            
        };
        const handleSubmit = (e) => {
            e.preventDefault(); // to not load the page
            // console.log("inputs", inputs);
            if (editClick) {
                const tempTableData = tableData;
                Object.assign(tempTableData[editIndex], inputs);
                setTableData([...tempTableData]);
                setEditClick(false);
                setInputs({
                    name: "",
                    email: "",
                });
            } else {
                setTableData([...tableData, inputs]); // when u submit than store the data
                
                setInputs({
                    //when you submit than input data getting blank
                    name: "",
                    email: "",
                });
            }
        };

        const handleDelete = (index) => {
            const filterData = tableData.filter((item, i) => i !== index);
            setTableData(filterData);
        };
        const handleEdit = (index) => {
            const tempData = tableData[index]; // store the index value

            setInputs({ name: tempData.name, email: tempData.email });
            setEditClick(true);
            setEditIndex(index);
        };
        return (
            <div  >
                <h1  >Crud App</h1>
                <div  >
                    <form onSubmit={handleSubmit}>
                        <div >
                            <label>Name</label>
                            <input name="name" value={inputs.name} onChange={handleChange} />
                        </div>
                        <div  >
                            <label>Email</label>
                            <input name="email" value={inputs.email} onChange={handleChange} />
                        </div>
                        <button type="submit"  >
                            {editClick ? "update" : "Add"}
                        </button>
                    </form>
                </div>
                <div>
                    <table  >
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody  >
                            {tableData.map((item, i) => (
                                <tr>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>
                                        <button onClick={() => handleEdit(i)}> Edit </button>
                                        <button onClick={() => handleDelete(i)}>Delete  </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    };

    export default Home;
