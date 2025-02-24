export function AddMember(){
    return(
        <form>
          <input type="text"  className="form-control" placeholder="Enter Member Name" />
          <input type="number"  className="form-control" placeholder="Enter Member Phone Number" />
          <input type="email"  className="form-control" placeholder="Enter Member Email" />
          <input type="number"  className="form-control" placeholder="Enter Member NID" />
          <button type="button" className="add-btn">Add Member</button>
        </form>
    )
}