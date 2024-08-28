import DataTable from "react-data-table-component";

const TableRegistrasi = () => {

    const columns = [
        {
            name: "ID",
            selector: row => row.id
        },
        {
            name: "Full Name",
            selector: row => row.fullName
        },
        {
            name: "Height",
            selector: row => row.height
        },
        {
            name: "Weight",
            selector: row => row.weight
        },
    ];

    const rows = [
        {
            id: 1,
            fullName: "John Doe",
            height: "1.75m",
            weight: "89kg",
        },
        {
            id: 2,
            fullName: "Jane Doe",
            height: "1.64m",
            weight: "55kg",
        },
        {
            id: 3,
            fullName: "Sheera Maine",
            height: "1.69m",
            weight: "74kg",
        },
    ];
    
  return (
    <div>
        <div className="col-md-12 grid-margin stretch-card">
        <div className="card">
          <div className="card-body">
            <h6 className="card-title">Data Registrasi</h6>
            
            <div className="table-responsive">
            <DataTable 
                columns={columns} 
                data={rows} 
                fixedHeader
                pagination
                selectableRows
            />
            </div>
          </div>
        </div>
		</div>
    </div>
  )
}

export default TableRegistrasi