import React from 'react';

const GuestHouse=()=>{
    return(
      <> 
      {/* Title */}
      <div className="med_tittle_section">
      <div className="med_img_overlay"></div>
      <div className="container">
        <div className="row">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="med_tittle_cont_wrapper">
              <div className="med_tittle_cont">
                <h1>Guest House Facilities</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/*Welcome Section  */}
    <div className="team_wrapper  ">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="team_heading_wrapper med_bottompadder40">
                <h1 className="med_bottompadder20">WELCOME TO OUR GUEST HOUSE </h1>
                <img src="images/Icon_team.png" alt="line" className="med_bottompadder20" />
                <p>
             Our guest house offers comfortable and affordable accomodation for patient's attendets, ensuring a pleasant and relaxing stay. \
             We provide a variety of room options to suit different needs and budgets, complete with modern amenities
                </p>
              </div>
            </div>
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="neurology_image_wrapper">
                <img className="img-fluid" src="https://cdn.pixabay.com/photo/2017/07/09/03/19/home-2486092_1280.jpg" alt="blood-centre-img" />
              </div>
            </div>
          </div>
        </div>

        <div className="container ">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="team_heading_wrapper med_bottompadder40">
                <h1 className="med_bottompadder20">ROOM TYPES & CHARGES</h1>
                <img src="images/Icon_team.png" alt="line" className="med_bottompadder20" />
                <p>
We offer a selection of room types, each designed to provide comfort and convenience during your stay. Below is detailed list of the avialable room types along with thier charges. 
                </p>
              </div>
            </div>
          </div>
    
        </div>

{/* Tables Section */}
        <div className="container ">
     
         
<table className='table '>
  <tr class=" bg-dark text-light ">
    <th >Room Type</th>
    <th >Description</th>
    <th >Charges (INR)</th>
  </tr>
  <tr className='table-secondary'>
    <td >Suite Room</td>
    <td >Luxury suite with dining and waiting areas.</td>
    <td>₹5,000 per night</td>
  </tr>
  <tr>
    <td>Excutive Room</td>
    <td>Spacious room with modern amenties.</td>
    <td>₹4,000 per night</td>
  </tr>
  <tr  class="table-secondary">
    <td>Deluxe Room</td>
    <td>Comfortable room with TV and fridge</td>
    <td>₹2,500 per night</td>
  </tr>
  <tr>
    <td>Single Room</td>
    <td>Private room with attached washroom</td>
    <td>₹1,500 per night</td>
  </tr>
  <tr  class="table-secondary">
    <td>Semi-Private Room</td>
    <td>Two room with shared washroom</td>
    <td>₹2,000 per night</td>
  </tr>
  <tr>
    <td>Double Sharing Room</td>
    <td>Room with 2 beds and washroom.</td>
    <td>₹1,200 per night</td>
  </tr>
  <tr  class="table-secondary">
    <td>Special General Ward</td>
    <td>Ward with 3 beds and washroom.</td>
    <td>₹1,000 per night</td>
  </tr>
  <tr>
    <td>General Ward</td>
    <td>Dormitory with 6 to 10 beds</td>
    <td>₹800 per night</td>
  </tr>
</table>
        

          </div>
    
    {/* Room Images section */}
    <div className="our_Services_3 med_toppadder100_3 ">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="team_heading_wrapper_3 text-center med_bottompadder40_3 wow fadeInDown" data-wow-delay="0.5s">
                <h1 className="med_bottompadder20_3">ROOM IMAGES</h1>
                <img src="images/Icon_team.png" alt="line" className="med_bottompadder20_3" />
                <p>Explore the various rooms avialable at our guest house, each offering a unique blend of comfort and style </p>
              </div>
            </div>
          </div>
   {/* Images  */}

 <div className='container text-center mx-auto'>
 <div className='row row-cols-4 grid '>
   <div className="card m-lg mx-auto" style={{width: 15 + 'rem' ,margin: 1 + 'rem'} }  >
    <img className="card-img-top" style={{height: 12 + 'rem'} }   src="..\images\guestHouse\suite_Room.jpg" alt="room-types"/>
    <div className="card-body">
    <h3 className="card-title fw-bolder text-dark float-left">Suite Room</h3>
    <p  className="card-text float-left">Luxury suite with premium facilities</p>
   </div>
   </div>


   <div className="card mx-auto" style={{width: 15 + 'rem' ,margin: 1 + 'rem'} }  >
    <img alt="room-types" style={{height: 12 + 'rem'} }   className="card-img-top"  src="..\images\guestHouse\executive_room.jpg"/>
    <div className="card-body">
    <h3 className="card-title fw-bolder text-dark float-left">Executive Room</h3>
    <p className="card-text float-left">Specious room with modern amenties</p>
   </div>
   </div>

   <div className="card mx-auto" style={{width: 15 + 'rem' ,margin: 1 + 'rem'} }  >
    <img alt="room-types" style={{height: 12 + 'rem'} }  className="card-img-top"  src=".\images\guestHouse\deluxe_room.jpg"/>
    <div className="card-body">
    <h3 className="card-title fw-bolder text-dark float-left">Deluxe Room</h3>
    <p className="card-text float-left">Comfortable room with essential amenities.</p>
   </div>
   </div>

   <div className="card mx-auto" style={{width: 15 + 'rem' ,margin: 1 + 'rem'} }  >
    <img alt="room-types" style={{height: 12 + 'rem'} }  className="card-img-top"  src=".\images\guestHouse\single_room.jpg"/>
    <div className="card-body">
    <h3 className="card-title fw-bolder text-dark float-left">Single Room</h3>
    <p className="card-text float-left">Private and cozy single room.</p>
   </div>
   </div>

   <div className="card mx-auto" style={{width: 15 + 'rem' ,margin: 1 + 'rem'} }  >
    <img alt="room-types" style={{height: 12 + 'rem'} }  className="card-img-top"  src=".\images\guestHouse\semi_private.jpg"/>
    <div className="card-body">
    <h3 className="card-title fw-bolder text-dark float-left">Semi Private Room</h3>
    <p className="card-text float-left">Shared room with comfortable amenities.</p>
   </div>
   </div>

   <div className="card mx-auto" style={{width: 15 + 'rem' ,margin: 1 + 'rem'} }  >
    <img alt="room-types" style={{height: 12 + 'rem'} }  className="card-img-top "  src=".\images\guestHouse\double_sharing.jpg"/>
    <div className="card-body">
    <h3 className="card-title fw-bolder text-dark float-left">Double Sharing Room</h3>
    <p className="card-text float-left">Ideal for two guests with privacy.</p>
   </div>
   </div>

   <div className="card mx-auto" style={{width: 15 + 'rem',margin: 1 + 'rem'}}  >
    <img alt="room-types" style={{height: 12 + 'rem'} }  className="card-img-top"  src=".\images\guestHouse\special_general_ward.jpg"/>
    <div className="card-body">
    <h3 className="card-title fw-bolder text-dark float-left">Special General Ward</h3>
    <p className="card-text float-left">Ward with 3 beds and washroom.</p>
   </div>
   </div>

   <div className="card mx-auto" style={{width: 15 + 'rem' ,margin: 1 + 'rem'} }  >
    <img alt="room-types" style={{height: 12 + 'rem'} }  className="card-img-top"  src=".\images\guestHouse\general_ward.jpg"/>
    <div className="card-body">
    <h3 className="card-title fw-bolder text-dark float-left">General Ward </h3>
    <p className="card-text float-left">Dormitory with 6 to 10 beds.</p>
   </div>
   </div>



   </div>
 </div>
        </div>
      </div>
      </div>
</>
    )
}

export default GuestHouse