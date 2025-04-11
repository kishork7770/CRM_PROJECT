function DeleteLeads(props) {
    const { setDeleteModel, deleteModelClose } = props;
    return (
        <div id="modal" className="modal fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center">
            <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all w-9/12">
                <h2>Delete user</h2>
                <p>Are you sure ?</p>
                <div>
                    <button>Delete</button>
                    <button onClick={() => setDeleteModel(false)}>Cancle</button>
                </div>
            </div>


        </div>
    )
}

export default DeleteLeads;