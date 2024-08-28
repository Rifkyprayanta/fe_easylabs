
const Content = (data) => {
  return (
    <div>
        <div>
            <div className="d-flex justify-content-between align-items-center flex-wrap grid-margin">
            <div>
                <h4 className="mb-3 mb-md-0">{data.data}</h4>
            </div>
            
            </div>
        </div>
    </div>
  )
}

export default Content