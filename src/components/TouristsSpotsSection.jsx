import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const TouristsSpotsSection = ({sport}) => {
    const {_id, country_Name} = sport
    // const id =_id;
    const handleDelete = _id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {

            fetch(`http://localhost:5000/TouristsSpot/${_id}`,{
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data=>{
                console.log(data);
                if(data.deletedCount>0){
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                }
            })
            }
          });
        console.log(id)
    }
    return (
        <div className="card shadow-xl border-2 p-2">
        {/* <figure className='bg-base-200 h-[230px] w-[320px] mx-auto'><img src={image} alt="Property Image" /></figure> */}
            <div className="card-body">

                    {/* country_Name */}
                     <h2 className="card-title">{country_Name}</h2>
                    {/*<h2>By: {publisher}</h2>

                    <hr/>
                    <div className='flex justify-between'>
                            <div>{category}</div>
                            <div className="flex items-center gap-2"><span>{rating}</span><FaRegStar/></div>
                    </div> */}

                {/* <Link to={`/View Details/${id}`} className="btn btn-success">View Details</Link> */}
                {/* <Link to={`/View Details/${id}`} className="btn btn-success">View Details</Link> */}
                <button onClick={()=> handleDelete(_id)}>Delete</button>
            </div>
    </div>
    );
};

export default TouristsSpotsSection;